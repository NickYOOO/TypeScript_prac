## 초기 세팅

- npm init -y

- tsc --init --rootDir ./src --outDir ./dist --esModuleInterop --module commonjs --strict true --allowJS true --checkJS true

## package.json 설정

"scripts": {
"start": "tsc && node ./dist/index.js",
"build": "tsc --build",
"clean": "tsc --build --clean"
},
