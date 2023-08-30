const swcCli = require('@swc/cli/lib/swc/dir');

swcCli.default({
    swcOptions: {
        '$schema': 'https://json.schemastore.org/swcrc',
        module: { type: 'commonjs' },
        jsc: {
            target: 'es2021',
            parser: { syntax: 'typescript', decorators: true, dynamicImport: true },
            transform: {
                legacyDecorator: true,
                decoratorMetadata: true,
                useDefineForClassFields: false
            },
            keepClassNames: true,
            baseUrl: `\\\\?\\${process.cwd()}`,
            paths: {
                '@utils/*': [ 'src/utils/*' ],
            }
        },
        minify: false,
        swcrc: true,
        sourceMaps: true
    },
    cliOptions: {
        outDir: `${process.cwd()}/dist`,
        filenames: [ 'src' ],
        sync: false,
        extensions: [ '.js', '.ts' ],
        copyFiles: false,
        includeDotfiles: false,
        quiet: false,
        watch: false,
        configPath: 'tsconfig.build.json'
    }
});
