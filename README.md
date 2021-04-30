### Express

- yarn add express
- yarn add express @types/express -D

### Typescript

- yarn add typescript -D
- yarn tsc --init
- yarn add ts-node-dev -D
<!-- Criar script no package -->
- yarn dev

### TypeORM

- yarn add typeorm reflect-metadata sqlite3
<!-- Criar ormconfig.json na raiz do projeto -->

### Configurar Typescript com o TypeORM

- descomentar
- tsconfig.json -> "experimentalDecorators": true , "emitDecoratorMetadata": true
- mudar "strict" para false

## Criar Migrations

- package.json -> "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
- yarn typeorm migration:create -n 'name'

## Up e Down Migrations

- yarn typeorm migration:run | yarn typeorm migration:revert

## uuid

- yarn add uuid
- yarn add @types/uuid -D

## Mapear entidades

- ormconfig -> "entities"

### Fluxo

- Migrations -> Criar arquivo de conexão com o banco de dados -> Entities -> Repositories -> Service -> Controller -> Route -> run server.ts

### Websocket

- yarn add socket.io
- yarn add @types/socket.io -D
- yarn add socket.io-client

- yarn add ejs
