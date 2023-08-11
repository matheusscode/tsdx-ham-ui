module.exports = {
  // ... outras configurações ...

  // Adicione o módulo 'css-loader' para processar arquivos CSS
  rollup(config, options) {
    config.plugins = config.plugins.map(plugin => {
      if (plugin.name === 'replace') {
        // Atualize esta configuração se necessário
        return require('rollup-plugin-replace')({
          'process.env.NODE_ENV': JSON.stringify(options.env),
        });
      }
      return plugin;
    });

    config.plugins.push(
      // Adicione o loader para arquivos CSS
      require('rollup-plugin-postcss')({
        modules: true, // ativar módulos CSS (opcional)
        extract: true, // extrair estilos para um arquivo separado (opcional)
        minimize: true, // minificar estilos (opcional)
        inject: { insertAt: 'top' }, // injetar estilos no topo do <head> (opcional)
      })
    );

    return config;
  },
};
