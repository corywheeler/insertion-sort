module.exports = function () {
    return {
        files: [{pattern: 'src/**/*.js'}],
        tests: [{pattern: 'test/**/*.spec.js'}],
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