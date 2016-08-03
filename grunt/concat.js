module.exports = {
  concat: {
    files: {
      'dist/libs_scripts.js': [
        'libs/angular/angular-route.js',
        'libs/angular/angular.js'
      ]
    }
  }

  // prodTestLib: {
  //
  //   files: {
  //     'dist/swc_libs_styles.css': [
  //       'bower_components/bootstrap/dist/css/bootstrap.css',
  //       'bower_components/bootstrap/dist/css/bootstrap-theme.css',
  //       'bower_components/angularjs-toaster/toaster.css',
  //       'bower_components/angular-ui-layout/src/ui-layout.css'
  //     ],
  //     'dist/swc_libs_scripts.js': [
  //       'bower_components/jquery/dist/jquery.js',
  //       'bower_components/angular/angular.js',
  //       'bower_components/angular-animate/angular-animate.js',
  //       'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js',
  //       'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
  //       'bower_components/angularjs-toaster/toaster.js',
  //       'bower_components/angular-ui-layout/src/ui-layout.js',
  //       'bower_components/ui-router/release/angular-ui-router.js',
  //       'bower_components/kineticjs/kinetic.js',
  //       'bower_components/xmlToJSON/lib/xmlToJSON.js',
  //       'libs/materialize/js/materialize.min.js'
  //     ]
  //   }
  // },
  //
  // prodLib: {
  //   options: {
  //     process: function(content, path) {
  //       return '/* Source: ' + path + ' */\n' + content + '\n';
  //     }
  //   },
  //   files: {
  //     'dist/swc_libs_styles.min.css': [
  //       'bower_components/bootstrap/dist/css/bootstrap.min.css',
  //       'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
  //       'bower_components/angularjs-toaster/toaster.min.css',
  //       'bower_components/angular-ui-layout/src/ui-layout.css'
  //     ],
  //     'dist/swc_libs_scripts.min.js': [
  //       'bower_components/jquery/dist/jquery.min.js',
  //       'bower_components/angular/angular.min.js',
  //       'bower_components/angular-animate/angular-animate.min.js',
  //       'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
  //       'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
  //       'bower_components/angularjs-toaster/toaster.min.js',
  //       'bower_components/angular-ui-layout/src/ui-layout.js',
  //       'bower_components/ui-router/release/angular-ui-router.min.js',
  //       'bower_components/kineticjs/kinetic.min.js',
  //       'bower_components/xmlToJSON/lib/xmlToJSON.js',
  //       'libs/materialize/js/materialize.min.js'
  //     ]
  //   }
  // },
  //
  // prodTest: {
  //   options: {
  //     process: function(content, path) {
  //       return '/* Source: ' + path + ' */\n' +
  //       '(function() {\n' +
  //       content + '\n' +
  //       '})();';
  //     }
  //   },
  //   files: {
  //     'dist/swc_scripts.js': [
  //       'src/swc/swc.js',
  //       'src/swc/**/*.js',
  //       'src/app/**/*.js',
  //       'src/i18n/en.js',
  //       'src/binding/app_module.js',
  //       'src/binding/*/**/*_module.js',
  //       'src/binding/*/**/*.js',
  //       'src/gui/**/*_module.js',
  //       'src/gui/**/*.js',
  //       'src/binding/app_controller.js',
  //       'src/binding/app_config*.js',
  //       'src/binding/app_run*.js'
  //     ]
  //   }
  // }
};
