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
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	//grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.registerTask('default',['watch']);
}
