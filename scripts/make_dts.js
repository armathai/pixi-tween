#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

const dtsFile = path.resolve(`dist/types/index-types.d.ts`);
let dtsContent = fs.readFileSync(dtsFile, 'utf8');
dtsContent = dtsContent.replace(/namespace pixitween/g, 'module PIXI');
fs.writeFileSync(dtsFile, dtsContent, 'utf8');
