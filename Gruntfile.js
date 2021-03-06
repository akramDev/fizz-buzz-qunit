module.exports = function(grunt) {

    grunt.initConfig({
        'node-qunit': {
            all: {
                code: './app/app.js',
                tests: './tests/tests.js',
                done: function (err, res) {
                    !err && publishResults("node", res, this.async());
                }
            }
        },
        watch: {
            scripts: {
                files: ['./app/*.js', './tests/*.js'],
                tasks: ['node-qunit']
            }
        },
        jshint: {
            all: ['app/*.js', 'tests/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-node-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['node-qunit', 'jshint']);

};