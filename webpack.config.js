const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'news-widget',
    filename: 'remoteEntry.js',
    exposes: {
        './Component': './src/app/app.component.ts',
        './NewsWidgetComponent': './src/app/components/news-widget/news-widget.component.ts',
    },
    shared: {
        ...shareAll({ singleton: true, requiredVersion: 'auto' }),
    },
});
