module.exports = {
  concat: {
    files: {
      'dist/libs_scripts.js': [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-resource/angular-resource.js'
      ],
			 'dist/src_scripts.js': [
				 'src/**/*.js'
			 ]
    }
  }
};
