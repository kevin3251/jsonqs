import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'main.js',
    output: {
        name: 'jsonqs',
        file: 'dist/bundle.js',
        format: 'umd',
        exports: 'named'
    },
    plugins: [
        resolve({
            mainFields: ['module', 'main'],
            browser: true,
            preferBuiltins: false
        }),
        commonjs()
    ]
}