
import commonjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from ' @rollup/plugin-json';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'cjs',
      exports: 'named' // export mode
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named'
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    ts({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          target: 'es5'
        }
      }
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    terser(),
  ]
};


