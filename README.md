# vite-practice

## viteで環境構築
## ESlintでCI

### clone
```bash
git clone <URL>
```

### Setup
```bash
cd vite-project
```
Various install
```bash
npm install
```
Run server
```bash
npm run dev
```

### Tips
typesyncを入れていないと ```npm install```ではじかれる
```bash
npm install -g typesync
```

### Develop
package.jsonでdependenciesとdevDependenciesを使い分ける
```package.json
"dependencies": {
  // npm install コマンドを使ってインストールしたパッケージ
  // 本番環境で使うパッケージ
},
"devDependencies": {
  // npm install --save-dev コマンドを使ってインストールしたパッケージ
  // 開発環境で使うパッケージ(@typesなどはこっち)
}
```