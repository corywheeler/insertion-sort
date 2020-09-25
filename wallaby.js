module.exports = function () {
    return {
        files: ['src/**/*/*.js'],
        tests: ['test/**/*.spec.js'],
        env: {
            type: 'node'
        },
        testFramework: 'mocha',
        setup: function () {
            chai.should();
            global.expect = chai.expect;
            global.assert = chai.assert;
        }
    };
};