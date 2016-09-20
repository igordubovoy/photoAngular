module.exports = {
  all: {
    files: [
      {
        expand: true,
        cwd: 'assets/',
        src: '**/*',
        dest: 'dist/assets/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'font/',
        src: '**/*',
        dest: 'dist/font/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html'],
        dest: 'dist/src/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'data/',
        src: '**/*',
        dest: 'dist/data/',
        filter: 'isFile'
      },
			{
        expand: true,
        cwd: 'analytics/',
        src: '*.js',
        dest: 'dist/analytics/',
        filter: 'isFile'
      }
    ]
  },
	dev: {
    files: [
      {
        src: 'bower_components/angular/angular.js',
        dest: 'dist/libs/angular/angular.js'
      },
      {
        src: 'bower_components/angular-route/angular-route.js',
        dest: 'dist/libs/angular/angular-route.js'
      },
      {
        src: 'bower_components/angular-resource/angular-resource.js',
        dest: 'dist/libs/angular/angular-resource.js'
      },
      {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js'],
        dest: 'dist/src/',
        filter: 'isFile'
      }
    ]
  }
};
