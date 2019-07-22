# Admin Core

- [Setup](#setup)
- [Environment Variables](#env)
- [Structure](#structure)
- [API Documentation](#api-documentation)


## <a name="setup"></a> Getting Started

### Install Yarn via Homebrew (macOs)

```sh
$ brew install yarn
```

### Install package dependencies

```sh
$ yarn
```

### Copy .env.example to .env

```sh
$ cp .env.example .env
```

### Start docker dependencies

```
$ docker-compose up -d
```

### Run the application

```sh
$ yarn dev
```


## <a name="env"></a> Env Variables



**Required**
- `BUS_QUEUE_ADAPTER` parameters to Bus / rabbitmq
- `BUS_QUEUE_URI` parameters to Bus / amqp

- `HOST` Host name
- `PORT` Number of the port that will be listening
- `SWAGGER_PORT` Number of the port that will be listening
- `MONGODB_HOST` hostname in mongo db
- `MONGODB_DATABASE` database name

**Optional**
- `LOG_LEVEL` Change what should be logged
- `LOG_SILENT` - Disable logs
- `NODE_ENV` - Environment app is deployed on. *(development, beta, production)*


## <a name="structure"></a> Structure

- **src**

    - **bin** - start domain/denormalizer/view
    - **denormalizer**
        - **config** - Bootstrap configurations denormalizer
        - **handlers** -

    - **domain**
        - **config** - Bootstrap configurations denormalizer
        - **entities** -
        - **handlers** -
    - **view**
        - **config** - Bootstrap configurations denormalizer
        - **controllers** - Available on the container by name with suffix `Controller`
        - **services** - Available on the container by name with suffix `Service`
        - **schemas**
            - **entities**
            - **requests**
            - **responses**
    - **shared**
        - **db** - conection to database
        - **errors** - Classes errors
        - **events**
        - **interfaces**
        - **models** model database
        - **repositories** - Available on the container by name with suffix `Repository`
        - **utils** Common functions


## Test
  - **fixtures** - Data structures and helpers for tests
  - **functional** - Domain and view
  - **integration** - Dernomalizer
  - **unit** - Step and Utils tests
  - **utils** - Utilities necessary for test run

## <a name="api-documentation"></a> API Documentation

Available at `/documentation`