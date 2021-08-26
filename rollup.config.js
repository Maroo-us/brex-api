import banner from 'rollup-plugin-banner2'
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
    output('brex-api', 'cjs'),
    output('brex-api.min', 'cjs'),
    output('brex-api.esm', 'esm'),
    output('brex-api.esm.min', 'esm'),
  ],
  plugins: [
    banner(() => bannerText),
    typescript({
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    }),
  ],
}
