import { runMain as _runMain, defineCommand } from "citty";
import consola from "consola";
import { renderUnicodeCompact } from "hqr";
import { description, name, version } from "../package.json";
import { startTunnel } from "./tunnel";

export const tunnel = defineCommand({
  meta: {
    name: "tunnel",
    description: "Create a tunnel to a local server",
  },
  args: {
    url: {
      type: "positional",
      description: "The URL of the tunnel",
      required: false,
    },
    port: {
      type: "string",
      description: "The port of the tunnel (default: 3000)",
    },
    hostname: {
      type: "string",
      description: "The hostname of the tunnel (default: localhost)",
      valueHint: "localhost|example.com",
    },
    protocol: {
      type: "string",
      description: "The protocol of the tunnel (default: http)",
      valueHint: "http|https",
    },
  },
  async run({ args }) {
    const tunnel = await startTunnel({
      url: args.url,
    });

    if (!tunnel) {
      console.log("Tunnel not started.");
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }

    const tunnelUrl = await tunnel.getURL();

    const ansi = renderUnicodeCompact(tunnelUrl, {
      ecc: 'L',
      border: 1,
    })

    consola.info("Waiting for tunnel URL...");
    consola.success(`Tunnel ready at \`${tunnelUrl}\``);
    consola.success(`QR Code:`);
    console.log(ansi);
  },
});

export const main = defineCommand({
  meta: {
    name,
    description,
    version,
  },
  subCommands: {
    tunnel,
  },
});

export const runMain = () => _runMain(main);
