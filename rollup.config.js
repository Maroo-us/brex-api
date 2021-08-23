import banner from 'rollup-plugin-banner2'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

import { name, version } from './package.json'

const bannerText = `/*
 * ${name} v${version}
 * (c) Maroo Team
 * Licensed under the MIT License
 */
`

function output(distFileName, format) {
  const minify = distFileName.endsWith('.min')
  const plugins = []
  if (minify) {
    plugins.push(terser())
  }

  return {
    file: `dist/${distFileName}.js`,
    format: format,
    name: 'BrexApi',
    plugins: plugins,
  }
}

export default {
  input: 'src/index.ts',
  output: [
    output('brex-api', 'umd'),
    output('brex-api.min', 'umd'),
    output('brex-api.esm', 'esm'),
    output('brex-api.esm.min', 'esm'),
  ],
  plugins: [
    banner(() => bannerText),
    nodeResolve({ browser: true }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    }),
  ],
}
