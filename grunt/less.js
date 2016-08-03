module.exports = {
  dev: {
    options: {
      paths: ['src']
    },
    files: [
      {
        expand: true,
        cwd: 'src',
        src: ['**/*.less'],
        dest: 'dist/src',
        ext: '.css'
      }
    ]
  }
};
