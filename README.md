<p align="center">
<a href="https://www.npmjs.com/package/ctun" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/devicon:cloudflare-wordmark.svg?color=%23b3ff75" alt="logo" width='100'/></a>
</p>

<p align="center">
  A script create a tunnel to your localhost use Cloudflare Argo Tunnel
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ctun" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/ctun.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/ctun" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/ctun.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=ctun" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/ctun" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/ctun/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/ctun/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/ctun" alt="License" /></a>
</p>

## Usage (CLI)

Globally run tunnel with `npx`:

```sh
npx ctun@latest --url http://localhost:3000
```

Use `npx ctun --help` for more usage info.

## Result

![ads](https://private-user-images.githubusercontent.com/42096908/335439503-352de869-90c8-43e7-8f12-2537c0c0b1b7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTcxMjc3NjUsIm5iZiI6MTcxNzEyNzQ2NSwicGF0aCI6Ii80MjA5NjkwOC8zMzU0Mzk1MDMtMzUyZGU4NjktOTBjOC00M2U3LThmMTItMjUzN2MwYzBiMWI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTMxVDAzNTEwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2MGIzZDBmZTc1MzI0ZDUyZDBjYTI4NmM5NGZjODhkNGJjYTQyODE3ZDBjZTNiZDQ2YTlhZDRiNjgwNTBkOGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JzmRpeyw_EV5MfPGiNHozCAqW1hWsYBbAHESfyxJmUs)

## Usage (API)

Install package:

```sh
# npm
npm install ctun

# yarn
yarn add ctun

# pnpm
pnpm install ctun
```

Import:

```ts
// ESM
import { startTunnel } from "ctun";
```

Start tunnel:

```ts
const tunnel = await startTunnel({ port: 3000 });
```

## Options

### `url`

- Default: `{protocol}://{hostname}:{port}`

The local server URL to tunnel.

### `port`

- Default: `3000`

The local server PORT (only effective if `url` is not provided).

### `hostname`

- Default: `localhost`

The local server hostname (only effective if `url` is not provided).

### `protocol`

- Default: `http`

The local server protocol (only effective if `url` is not provided).

### `verifyTLS`

- Default: `false`

Verify local server TLS certificate.

## License

Cloudflared integration based on a fork of [JacobLinCool/node-cloudflared](https://github.com/JacobLinCool/node-cloudflared)

Your installation of cloudflared software constitutes a symbol of your signature indicating that you accept the terms of the Cloudflare [License](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/license/), [Terms](https://www.cloudflare.com/terms/) and [Privacy Policy](https://www.cloudflare.com/privacypolicy/).
