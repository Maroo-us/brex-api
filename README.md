# brex-api

Unofficial JS/TS wrapper for Brex (c) API.

## Installation

```sh
yarn add @maroo/brex-api
```

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

Working with transfers:

```ts
// List existing transfers
const listTransferRes = await brex.transfers.list()

// Create a new transfer
const createTransferRes = await brex.transfers.create({
  amount: {
    // Transfer Amount as cents
    amount: 12340,
    currency: 'USD',
  },
  description: 'Test transfer',
  counterparty: {
    type: 'VENDOR',
    paymentInstrumentId: 'vendor_payment_instrument_id',
  },
  externalMemo: 'ACH PMT',
  cashAccountId: 'your_cash_account_id',
})

// Get existing transfer
const getTransferRes = await brex.transfers.get('transfer_id')
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
> git push && git push --tags
```

## License

Maroo-us/brex-api — Licensed under the [MIT License](LICENSE).

“Brex” and the Brex logo — registered trademarks of ”Brex Inc.”
