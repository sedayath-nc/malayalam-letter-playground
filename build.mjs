import {build} from 'esbuild';
await build({entryPoints:['src/app.jsx'],bundle:true,minify:true,outfile:'dist/app.js',define:{'process.env.NODE_ENV':'"production"'},jsx:'automatic'});
