const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'news-widget',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './src/app/app.component.ts',
    './NewsWidgetComponent': './src/app/news-widget/news-widget.component.ts',
    './NewsWidgetModule': './src/app/news-widget/news-widget.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
