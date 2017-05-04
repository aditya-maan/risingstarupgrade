/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    defaultJSExtensions: true,
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

      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',


      // other libraries
      'rxjs': 'npm:rxjs',
      // 'ng2-datepicker': 'npm:ng2-datepicker/index.js',
      // 'ng2-slimscroll':                      'npm:ng2-slimscroll/index.js',
      'hammerjs': 'npm:hammerjs/hammer.js',
      'angular2-color-picker': 'node_modules/angular2-color-picker',
      'angular2-image-upload': 'node_modules/angular2-image-upload',
      "ng2-datetime-picker": "node_modules/ng2-datetime-picker/dist/ng2-datetime-picker.umd.js",
      "materialize-css": "node-modules/materialize-css",
      'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'typescript': 'node_modules/typescript/lib/typescript.js',
      'angular2': 'node_modules/angular2',
      // '@angular/animations': 'npm:@angular/animations/@angular/browser',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js', 
      'ng2-progressbar': 'node_modules/ng2-progressbar/bundles/ng2-progressbar.umd.js',
      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: { 
        main: 'main.js', 
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: { defaultExtension: 'js' },
      'ng2-datetime-picker': { main: 'ng2-datetime-picker.umd.js', defaultExtension: 'js' },
      '@angular/router': { main: 'index.js', defaultExtension: 'js' },
      'angular2-color-picker': {main:'index.js', defaultExtension: 'js'},
      angular2: { defaultExtension: 'js' },
      'angular2-image-upload': {main:'index.js', defaultExtension: 'js'},   
      'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' }
    }
  });
})(this);
