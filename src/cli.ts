/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable unicorn/no-array-reduce */
import consola from "consola";
import { renderUnicodeCompact } from "hqr";
import { cyan, green, underline, red, white } from "kolorist";
import ip from "ip";
import { cac, note } from "unprompts";
import { version } from "../package.json";
import { startTunnel } from "./tunnel";
import { getPort } from "./utils";

const cli = cac("ctun");

cli
  .version(version)
  .option("--url <url>", "The URL of the tunnel")
  .option("--port <port>", "The port of the tunnel (default: 3000)")
  .option(
    "--hostname <hostname>",
    "The hostname of the tunnel (default: localhost)",
  )
  .option("--protocol <protocol>", "The protocol of the tunnel (default: http)")
  .help();

cli.command("").action(async (args) => {
  if (!args.url) {
    consola.error("Please specify a URL.");
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  const tunnel = await startTunnel({
    url: args.url,
  });

  if (!tunnel) {
    console.error("Tunnel not started.");
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  const url =
    args.url ||
    `${args.protocol || "http"}://${args.hostname ?? "localhost"}:${
      args.port ? args.port : getPort(args.url)
    }`;

  const urlIp = `http://${ip.address()}:${args.port ? args.port : getPort(args.url)}`;

  const tunnelUrl = await tunnel.getURL();

  const qrTunnel = renderUnicodeCompact(tunnelUrl, {
    ecc: "L",
    border: 1,
  });

  const qrTunnelWhite = qrTunnel
    .split("\n")
    .map((it) => white(it))
    .join("\n");

  note(
    `${cyan(`Tunnel URL: ${underline(tunnelUrl)}`)}\n\n${cyan(
      `IP Static URL: ${underline(urlIp)}`,
    )}\n\n${cyan("QR Tunnel:\n")}\n${qrTunnelWhite}\n\n${red(
      "Press Ctrl+C to exit.",
    )}`,
    green(`Starting cloudflared tunnel to ${underline(url)}`),
  );
});

cli.parse();
