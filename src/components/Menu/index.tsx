import React, {
  ReactNode,
  CSSProperties,
  useEffect,
  useState,
  useRef,
} from "react";
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from "../../utils/useInteractiveStyles";


interface MenuProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RippleProps {
  left: number;
  top: number;
  diameter: number;
}

interface MenuListProps extends ExtendedCSSProperties {
  forPosition?: "left" | "right" | "center";
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItemProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  rippleAnimation?: boolean;
}

export const Menu = ({ children, ...rest }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "right",

    ...rest,
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<MenuItemProps>(child)) {
      return React.cloneElement(child, {
        isOpen,
        setIsOpen,
      });
    }
    return child;
  });

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <nav ref={menuRef} style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {clonedChildren}
      <div style={afterStyles} />
    </nav>
  );
};

export const MenuButton = ({
  children,
  isOpen,
  setIsOpen,
  ...rest
}: MenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setIsOpen && setIsOpen(!isOpen);
  };

  const showRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const { left, top } = button.getBoundingClientRect();
    const { clientX, clientY } = event;

    const diameter = Math.max(button.offsetWidth, button.offsetHeight) * 1.5;
    const radius = diameter / 2;

    const ripple: RippleProps = {
      left: clientX - left - radius,
      top: clientY - top - radius,
      diameter,
    };

    let rippleElement: HTMLSpanElement | null = document.createElement("span");
    rippleElement.className = "ripple";
    rippleElement.style.height = rippleElement.style.width = diameter + "px";
    rippleElement.style.borderRadius = "1000px";
    rippleElement.style.pointerEvents = "none";
    rippleElement.style.position = "absolute";
    rippleElement.style.top = ripple.top + "px";
    rippleElement.style.left = ripple.left + "px";
    rippleElement.style.transform = "scale(0)";
    rippleElement.style.transition = "transform 1s ease, opacity 0.6s ease";
    rippleElement.style.background = "rgba(255, 255, 255, 0.3)";

    button.appendChild(rippleElement);

    setTimeout(() => {
      if (rippleElement) {
        rippleElement.style.transform = "scale(1.4)";
      }
    }, 10);

    const removeRipple = () => {
      if (rippleElement && button.contains(rippleElement)) {
        if (rippleElement) {
          rippleElement.style.opacity = "0";
          setTimeout(() => {
            if (rippleElement && rippleElement.parentElement === button) {
              button.removeChild(rippleElement);
            }
          }, 400);
        }
      }
    };

    button.addEventListener("pointerup", removeRipple, { once: true });
    button.addEventListener("pointerout", removeRipple, { once: true });
  };

  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 600,
    padding: '0.6rem 1rem',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.16)',
    color: '#575656',
    backgroundColor: '#f5f5f5',
    fontSize: '0.9rem',
    justifyContent: "center",
    textAlign: "center",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <button
      ref={buttonRef}
      aria-label="Options"
      onClick={handleOpen}
      style={combinedStyles}
      onMouseDown={showRipple}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </button>
  );
};

export const MenuList = ({
  children,
  isOpen,
  forPosition = "center",
  ...rest
}: MenuListProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    position: "absolute",
    top: isOpen ? "130%" : "180%",
    backgroundColor: "#ffffff",
    opacity: isOpen ? 1 : 0,
    minWidth: "200px",
    width: "100%",
    transition: "opacity 0.4s ease, top 0.4s ease",
    boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
    listStyleType: "none",
    padding: "0.8rem",
    borderRadius: "10px",
    flexDirection: "column",
    zIndex: isOpen ? 1000 : -2,
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles }] = useInteractiveStyles({
    baseStyles: baseStylesWithDefault,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  const getPositionStyles = () => {
    if (forPosition === "left") {
      return { left: 0 };
    } else if (forPosition === "right") {
      return { right: 0 };
    } else {
      return { left: "50%", transform: "translateX(-50%)" };
    }
  };

  const positionStyles = getPositionStyles();

  return (
    <ul style={{ ...combinedStyles, ...positionStyles }}>
      <div style={beforeStyles} />
      {children} <div style={afterStyles} />
    </ul>
  );
};

export const MenuItem = ({ children, ...rest }: MenuProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "0.6rem 0.8rem",

    justifyContent: "left",
    transition: "all 0.4s ease",
    backgroundColor: "#ffffff",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <li className={`menu-item`} style={combinedStyles} {...eventHandlers}>
      {" "}
      <div style={beforeStyles} />
      {children} <div style={afterStyles} />
    </li>
  );
};

export const MenuDivider = ({ children, ...rest }: MenuProps) => {
  const baseStylesWithDefault: CSSProperties = {
    width: "100%",
    height: "1px",
    backgroundColor: "#c0c0c07b",
    margin: "0.6rem 0",
    ...rest,
  };

  const [combinedStyles] = useInteractiveStyles({
    baseStyles: baseStylesWithDefault,
  });

  return <div className="divider" style={combinedStyles} />;
};
