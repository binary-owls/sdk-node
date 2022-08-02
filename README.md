# Node SDK

Useful for any backend or frontend JavaScript or TypeScript project.

## Usage

```shell script
yarn add @binary-owls/sdk-node
```


## Maintain

### Maintain: Unit Tests

First, it's easiest to use the Jetbrains Debugger to run individual unit tests.

But you can also test via CLI:

```sh
yarn test
```

### Maintain: Try Locally

To locally develop the package, install Yalc:

```shell script
yarn global add yalc
```

Then we can publish this package locally:

```shell script
cd sdk-node
yalc publish
```

In the implementing project:

```shell script
yalc add @binary-owls/sdk-node
```


## Publish to NPM

```shell script

# Log in to npmjs.org
npm login

# NOTE the built files is the main publication, not the TS source
yarn build

# 1. Edit version in package.json
# 2. Run publish
# NOTE: yarn publish has issues with auto-committing, and running `npm publish` as a yarn command also has issues, so we need to just run this raw:
npm publish --access public

# You will be prompted for the new semver.  
# Then if publication is successful, package.json will automatically have its `"version"` updated
git add --all
git commit
```

Optional:

```shell
# Remove a specific package version
npm unpublish @binary-owls/sdk-node@0.1.0
```
