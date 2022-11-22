
## Client (Vue.js)

### Init
```bash
sudo npm i -g vue-cli

vue init webpack client
```
### Run Client Web App (dev)
```bash
npm run dev
```
## Server (Express.js)

### Init

```bash
mkdir server && cd server;
npm init
npm i express dotenv
npm i -D typescript @types/express @types/node
# Generating tsconfig.json
npx tsc --init

# Watch mode for TS files
npm install -D concurrently nodemon

# ESLint with TS
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
# BROKEN /X/ but cool Idea v
# npm install eslint-plugin-shopify --save-dev # Shopify-es-lint

```

### Express Generator

```bash
sudo npm install -g express-generator
express -h
```

## Sources

- Tutorial: https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D
- Notion: https://www.notion.so/fractiunate/Vue-js-da589096bf3b4f56bdf4db3f44e30172?p=bd30a69a046c48bdb001ac75da72b11c&showMoveTo=true
- https://vuejs.org
- https://expressjs.com
- https://blog.logrocket.com/how-to-set-up-node-typescript-express
- ESLint for server: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
- https://www.sqlite.org/index.html