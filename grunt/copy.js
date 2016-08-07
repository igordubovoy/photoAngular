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
        src: 'bower_components/angular/angular.js',
        dest: 'dist/libs/angular/angular.js'
      },
      {
        src: 'bower_components/angular-ui-router/release/angular-ui-router.js',
        dest: 'dist/libs/angular/angular-ui-router.js'
      },
      {
        src: 'bower_components/angular-resource/angular-resource.js',
        dest: 'dist/libs/angular/angular-resource.js'
      },
      {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html', '**/*.js'],
        dest: 'dist/src/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'data/',
        src: '**/*',
        dest: 'dist/data/',
        filter: 'isFile'
      }
    ]
  }
};
