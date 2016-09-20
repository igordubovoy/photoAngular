module.exports = {
  prod: {
    options: {
      wrap: true,
      sourceMap: true,
      beautify: false
    },
    files: {
      'dist/libs_scripts.min.js': [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js'
      ],
			'dist/src_scripts.min.js': [
				 'src/**/*.js'
      ]
    }
  }
};
