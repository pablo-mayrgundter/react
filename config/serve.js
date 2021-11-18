import esbuild from 'esbuild'
import * as common from './common.js'

const port = 8080;

esbuild.serve({
  port: 8080,
  servedir: `${common.buildDir}`,
}, {
  entryPoints: ['src/App.jsx'],
  bundle: true,
  outfile: `${common.buildDir}/out.js`,
  sourcemap: true,
  target: ['chrome58','firefox57','safari11','edge16'],
}).then(result => {
  console.log(`serving on http://localhost:${port} and watching...`)
}).catch(() => process.exit(1))
