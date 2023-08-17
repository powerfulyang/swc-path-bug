# swc-typescript issue

## Install dependencies

```sh
npm install
```

## Reproduction steps

Run the following command on Windows and it fails, run the same command on MacOS and presumably on Linux and it works:

```sh
npm start
```

On windows the module path being generated is absolute as well as wrong while on MacOS it is relative.

### Workarounds

1. I'm not sure I fully understand, but if you disable/remove `swcOptions.jsc.baseUrl` from the compile script, on Windows it suddenly starts working.
2. What also seems to work is changing `swcOptions.jsc.paths` to `['@utils/*': [ 'dist/utils/*' ]]` because then the absolute path is pointing to the correct dir.
