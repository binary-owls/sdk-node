# Node SDK

Useful for any backend or frontend JavaScript or TypeScript project.

## Usage

```shell script
yarn add @binary-owls/sdk-node
```


## Maintain

Compile and commit changes:

```sh
yarn build
git add --all  
```

To locally develop the package, install Yalc:

```shell script
yarn global add yalc
```


### Maintain - test locally

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
# Using npmjs.org credentials
npm login

# 1. Edit version in package.json
# 2. Run publish
yarn pub

# Remove a specific package version
npm unpublish @binary-owls/sdk-node@0.1.0
```
