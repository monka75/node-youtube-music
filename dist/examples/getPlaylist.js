"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const main = () => src_1.default.listMusicsFromPlaylist('VLRDCLAK5uy_n20FRYQXNt1p1wS55Nj2r14IouO5weaYU', {
    lang: 'fr',
    country: 'FR',
});
main().then((results) => console.log(results));
