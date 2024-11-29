const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inserta los estilos CSS en el DOM
          'css-loader',   // Resuelve dependencias de CSS
          'sass-loader',  // Compila Sass a CSS
          'postcss-loader' // Aplica PostCSS si es necesario
        ]
      }
    );
    return config;
  },
};
