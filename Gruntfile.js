module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass:dev']
			}
		},
        compass: {
            dev: {
                options: {
                    sassDir: ['library/sass'],
                    cssDir: ['library/css'],
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    sassDir: ['library/sass'],
                    cssDir: ['library/css'],
                    environment: 'production'
                }
            }
        },
        imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'library/images/workingfiles',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'library/images'
                    }]
                }
        },
        cssmin: {
              minify: {
                expand: true,
                cwd: 'library/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'library/css/',
                ext: '.min.css'
              }
        }
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	//grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.registerTask('default',['watch']);
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.registerTask('imagemin', ['imagemin']);
}
