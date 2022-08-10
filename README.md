<p align="center">
  <a href="https://medusajs.com/">
    <img alt="Medusa" src="./public/medusa-svg.svg" width="400" />
  </a>
</p>
<h1 align="center">
  Medusa Express
</h1>
<p align="center">
Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences.
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

<br/>

## Built with
### [Medusa](https://www.medusajs.com): Commerce engine
### [Next.js](https://nextjs.org/): React framework
### [Stripe](https://stripe.com/en-gb-dk): Payment provider
### [Medusa React](https://github.com/medusajs/medusa/tree/master/packages/medusa-react): Hooks and components for Medusa

<br/>

**Prerequisites**: To use Medusa Express, you need a Medusa server. Check out [medusa-starter-default](https://github.com/medusajs/medusa-starter-default) for a quick setup.

<br/>

## 🚀 Get started!

### Deploy in 5 minutes

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/medusajs/medusa-express-nextjs)

### 1. Create your Medusa Express project

#### Use npx and select medusa.express (recommended)
```zsh  
  npx create-medusa-app@latest
```

#### Use git clone
```zsh  
  git clone --depth=1 https://github.com/medusajs/medusa-express-nextjs medusa-express
```

### 2. Navigate to project and install dependencies

```zsh
  cd <your-express-folder>
  
  yarn
  # or
  npm install
```

### 3. Link your Medusa server

In your project, you should have a `.env.template` file with the following content:

```shell
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

Copy the template into a file used for local development:
```zsh
mv .env.template .env.local
```

Add Stripe API key as environment variable to complete orders:
```zsh
# Stripe key is required for completing orders
NEXT_PUBLIC_STRIPE_API_KEY=pk_test_... 
```

Your Medusa server runs locally on port 9000 by default. Make sure to update the above environment variable, if you've changed the port.

### 4. Try it out!

Start up both your Medusa server and Medusa Express and try it out!

Medusa Express is running at `http://localhost:8000`!

> **Important**: Medusa Express requires existing product. Either seed your Medusa server with some dummy products, or create your own through Medusa Admin.
