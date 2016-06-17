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
        }
    });

    grunt.loadNpmTasks('grunt-node-qunit');

    grunt.registerTask('test', ['node-qunit']);

};