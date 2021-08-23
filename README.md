# brex-api

A Node.js wrapper around Brex API.

## Usage

```ts
import { BrexClient } from './BrexClient'

const brex = new BrexClient({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  redirectUri: 'redirect_uri',
  tokenPair: {
    accessToken: 'access_token',
    refreshToken: 'refresh_token',
  },
})

// ES async/await
;(async () => {
  const response = await brex.vendors.list()
  console.log(response.list)
})()

// Promises
brex.vendors.list().then((response) => {
  console.log(response.list)
})
```

Optionally, you can add a callback function that will be called when token pair is updated:

```ts
brex.onTokenPairExchanged((pair) => {
  // Persist data here
})
```

If you want to connect to Brex staging environment, you can specify optional `environment` property in the initialization options:

```ts
import { BrexClient } from './BrexClient'
import { BrexEnvironment } from './BrexEnvironment'

const brex = new BrexClient({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  redirectUri: 'redirect_uri',
  environment: BrexEnvironment.Staging,
  tokenPair: {
    accessToken: 'access_token',
    refreshToken: 'refresh_token',
  },
})
```

By default, the production environment is used.

## Development

```sh
# Install dependencies
> yarn install

# Lint project files
> yarn lint:fix

# Format project files
> yarn format:fix

# Build the project
> yarn build

# Generate TS declaration file
> yarn types

# Create dist tarball
> yarn dist

# Prepare a new release
> npm version patch|minor|major
> npm publish
```

## License

Licensed under the [MIT License](LICENSE).
