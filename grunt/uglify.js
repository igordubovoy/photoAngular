module.exports = {
  prod: {
    options: {
      wrap: true,
      sourceMap: true,
      beautify: false
    },
    files: {
      'dist/swc_scripts.min.js': [
        'src/swc/swc.js',
        'src/swc/**/*.js',
        'src/app/**/*.js',
        'src/i18n/en.js',
        'src/binding/app_module.js',
        'src/binding/*/**/*_module.js',
        'src/binding/*/**/*.js',
        'src/gui/**/*_module.js',
        'src/gui/**/*.js',
        'src/binding/app_controller.js',
        'src/binding/app_config*.js',
        'src/binding/app_run*.js'
      ]
    }
  }
};
