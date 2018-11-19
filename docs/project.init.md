# project init

## yarn or npm init
```bash
yarn init
```

## .gitignore
```bash
curl https://www.gitignore.io/api/node,webstorm,visualstudio > .gitignore
echo "**/*.ignore" >> .gitignore

git add .gitignore
```

## LFS
```bash
git lfs install
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.jpeg"

git add .gitattributes
```

## esm: ES6 modules support
[ref](https://github.com/standard-things/esm)
```bash
yarn add esm
```

## index.js
