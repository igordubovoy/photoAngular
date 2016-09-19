module.exports = {
  prod: {
    options: {
      wrap: true,
      sourceMap: true,
      beautify: false
    },
    files: {
      'dist/libs_scripts.min.js': [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-resource/angular-resource.js'
      ],
			'dist/src_scripts.min.js': [
				 'src/**/*.js'
      ]
    }
  }
};
