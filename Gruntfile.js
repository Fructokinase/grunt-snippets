'use strict';

module.exports = function (grunt) {
    //require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    //typing grunt hi in terminal will console.log
    grunt.registerTask("hi", function () {
        console.log("grunt task 'hi' tells me to say hi");
    })

    grunt.initConfig({
        //takes all html files from the "from" directory
        //outputs to to/concatted.html"
        concat: {
            dist:{
                src: ['from/**/*.html'],
                dest: 'to/concatted.html'
            }
        },

        //looks for all js files in all subdirectories of non-uglified
        //and uglify it to uglified/minified.js
        uglify: {
            dist: {
                files: {
                    'uglified/minified.js': ['non-uglified/**/*.js']
                }
            }
        }
    });

    //typing grunt concatSample will do the actual concatting
    grunt.registerTask("concatSample", ['concat']);

    //typing grunt uglifySample will uglify the files to uglified/minified.js
    grunt.registerTask("uglifySample", ['uglify']);
}