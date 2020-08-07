const fs = require('fs');
const UglifyJS = require('uglify-js');

const inputPath = 'bin/pixi-tween.js';
const outputPath = 'bin/pixi-tween.min.js';

const inputContent = fs.readFileSync(inputPath, 'utf8');

const result = UglifyJS.minify(inputContent, {});

fs.writeFileSync(outputPath, result.code, 'utf8');
