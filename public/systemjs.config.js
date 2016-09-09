/**
 * Provides information to a module loader about where to find application modules,
 * and registers all the necessary packages. It also contains other packages that
 * will be needed by later documentation examples.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'primeng': 'node_modules/primeng',
            'moment': 'node_modules/moment',
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': {main: './boot.js', defaultExtension: 'js'},
            'angular2-in-memory-web-api': {main: './index.js', defaultExtension: 'js'},
            'primeng': {defaultExtension: 'js'},
            'moment': {defaultExtension: 'js'},
            'rxjs': {defaultExtension: 'js'}
        }
    });
})(this);