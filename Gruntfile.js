
module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
    sass: {
      dist: {
	options: {
	},
	files: [{
          expand: true,
          cwd: 'src',
          src: ['*.sass'],
          dest: 'static/css',
          ext: '.css'
	}]
      }
    },
    babel: {
      options: {
	sourceMap: false,
	presets: ['@babel/preset-env']
      },
      dist: {
	files: [{
	  expand: true,
          cwd: 'src',
          src: ['*.jsx'],
          dest: 'static/js',
          ext: '.js'
	}]
      }
    }
  });
  
  //// Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');
  
  // Default task(s).
  grunt.registerTask('default', ['sass']);
  
};
