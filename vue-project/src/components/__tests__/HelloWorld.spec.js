"use strict";
exports.__esModule = true;
// var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var HelloWorld_vue_1 = require("../HelloWorld.vue");
vitest_1.describe('HelloWorld', function () {
    vitest_1.it('renders properly', function () {
        var wrapper = test_utils_1.mount(HelloWorld_vue_1["default"], { props: { msg: 'Hello Vitest' } });
        vitest_1.expect(wrapper.text()).toContain('Hello Vitest');
    });
});
