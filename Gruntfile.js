module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sketchbox: {
      options: {
        stylePreProcessor: 'scss'
      },
    },
    sass: {                              
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                         
          'dist/app.dist.css': 'components/app.scss'
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.test.js']
      }
    }
  });

  // Load custom task(s).
  grunt.loadTasks('tasks');

  // Load Sass task
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', 'mochaTest');
};