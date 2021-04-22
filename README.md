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

- Migrations -> Entities -> Repositories -> Service -> Controller -> Route
