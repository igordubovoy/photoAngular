module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/**/*.js',
      'grunt/*.js'
    ],
    tasks: [
       'jshint',
       'copy'
    ]
  },
  styles: {
    files: [
      'src/**/*.less'
    ],
    tasks: [
      'copy'
    ]
  },
  html: {
    files: [
      'src/ui/*.tpl.html'
    ],
    tasks: [
      'copy',
      'includeSource'
    ]
  }
};
