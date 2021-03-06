# brex-api [![NPM][npm-badge]][npm] [![Test][workflow-badge]][workflow]

Unofficial JS/TS wrapper for Brex (c) API.

## Installation

```sh
yarn add @maroo-us/brex-api
```

## Usage

```ts
import { BrexClient } from '@maroo-us/brex-api'

const brex = new BrexClient({
  accessToken: 'your_access_token',
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

Follow Brex [developer documentation][auth-docs] to obtain an access token.

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

If you want to connect to Brex staging environment, you can specify optional `environment` property in the initialization options:

```ts
import { BrexClient, BrexEnvironment } from '@maroo-us/brex-api'

const brex = new BrexClient({
  accessToken: 'your_access_token',
  environment: BrexEnvironment.Staging,
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
> npm publish --access=public
> git push && git push --tags
```

## License

Maroo-us/brex-api — Licensed under the [MIT License](LICENSE).

“Brex” and the Brex logo — registered trademarks of ”Brex Inc.”

#### Pull/feature requests and issue posting are highly appreciated!

[workflow]: https://github.com/Maroo-us/brex-api/actions?query=workflow%3ABuild
[workflow-badge]: https://img.shields.io/github/workflow/status/Maroo-us/brex-api/Build
[npm]: https://www.npmjs.com/package/@maroo-us/brex-api
[npm-badge]: https://img.shields.io/npm/v/@maroo-us/brex-api
[auth-docs]: https://developer.brex.com/docs/authentication/
