import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';


const plugins = [
    typescript({
        useTsconfigDeclarationDir: true,
        clean: true,
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
];

export default [
    // Browser-friendly UMD build
    {
        input: 'src/index.ts',
        output: {
            name: 'isAprilFools',
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
        },
        plugins: [
            ...plugins,
            terser(),
        ],
    },
    // ES module (for bundlers) build
    {
        input: 'src/index.ts',
        external: ['ms'],
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins,
    },
];
