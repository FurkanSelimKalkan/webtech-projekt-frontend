"use strict";
exports.__esModule = true;
exports.useCounterStore = void 0;
var pinia_1 = require("pinia");
exports.useCounterStore = pinia_1.defineStore({
    id: 'counter',
    state: function () { return ({
        counter: 0
    }); },
    getters: {
        doubleCount: function (state) { return state.counter * 2; }
    },
    actions: {
        increment: function () {
            this.counter++;
        }
    }
});
