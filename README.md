# TEST service

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

### Run the application

```sh
$ yarn dev
```


## <a name="env"></a> Env Variables



**Required**

- `HOST` Host name
- `PORT` Number of the port that will be listening
- `SWAGGER_PORT` Number of the port that will be listening
- `SERVICE_ACCOUNT_KEY` = Firebase admin sdk json


**Optional**
- `LOG_LEVEL` Change what should be logged
- `NODE_ENV` - Environment app is deployed on. *(development, beta, production)*


## <a name="structure"></a> Structure

- **src**

    - **bin** - start API
    - **config** - Bootstrap configurations API
        - **db** - conection to database
    - **controllers** - Available on the container by name with suffix `Controller`
    - **repositories** - Available on the container by name with suffix `Repository`
    - **schemas**
        - **entities**
        - **requests**
        - **responses**
       
    - **services** - Available on the container by name with suffix `Service`
    - **interfaces**
    - **utils** Common functions


## Test
  - **fixtures** - Data structures and helpers for tests
  - **functional** - api
  - **integration** - repository
  - **unit** - Step and Utils tests
  - **utils** - Utilities necessary for test run

## <a name="api-documentation"></a> API Documentation

Available at `/documentation`