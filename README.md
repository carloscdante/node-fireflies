# Node-fireflies

A Typescript API library for Fireflies.AI (docs.fireflies.ai)

## Installation

You can install node-fireflies with your preferred package manager:

### NPM
`npm install node-fireflies`

### Yarn
`yarn add node-fireflies`

### pnpm
`pnpm add node-fireflies`

----

## Tutorial
### Getting an API token

To initialize the client and use the API library, you will need a Fireflies API key. If you already have one, skip to the next step.

API keys are automatically generated once you create an account on Fireflies. You can access your key [here.](https://app.fireflies.ai/integrations/custom/fireflies)


### Initializing the client

Now that you have your API key, the client must be initialized before running any operations. Initializing it is very simple, just instance a new `FirefliesClient` object class using your token as the only parameter:

```typescript
import { FirefliesClient } from "fireflies";

const ffClient = new FirefliesClient('YOUR_API_KEY')
```

The client is now ready and `ffClient` will carry all of the API functionality.

### Getting your user details

Next, let's use the client library to fetch your own details from the API.

Most functions take in an object with a `filter` parameter.

```typescript
export type UserRequest = {
  id?: string;
  filter: string[];
}
```

`filter` will serve as a selector layer; the function will only return the parameters you specified on the filter array. Let's take a look at an example:

```typescript
const userRequest = {
  filter: ['user_id', 'email', 'name', 'minutes_consumed', 'is_admin', 'integrations'],
}

const user = await ffClient.getUserData(userRequest)
```

For this operation, the expected response would be:

```json
{
  "id": "3049zvC2nq",
  "email": "example@fireflies.ai",
  "name": "John Doe",
  "minutesConsumed": "2218.839111328125",
  "isAdmin": false,
  "integrations": {}
}
```

All properties are being returned following the `filter` parameter on the API call. Hence, you can personalize the output using `filter`, returning only what you want.

For more information, you can check the [API Reference](https://docs.fireflies.ai/).
