/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['**/*.css', '*.html'],
        tasks: []
      },
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 640,
            name: 'lg',
            quality: 50
          },{
            width: 1024,
            name: 'lg',
            suffix: '2x',
            quality: 50
          },{
            width: 450,
            name: 'md',
            quality: 50
          },{
            width: 200,
            name: 'sm',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['responsive_images', 'watch']);

};
