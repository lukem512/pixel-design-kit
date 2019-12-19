module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
              files: {
                    'pixel.min.css': ['css/*.css']
                }
            }
        },
        watch: {
            scripts: {
              files: ['css/*.css'],
              tasks: ['cssmin'],
              options: {
                spawn: false,
              },
            },
        }
    })
}