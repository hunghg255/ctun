import consola from "consola";
import { renderUnicodeCompact } from "hqr";
import cac from "cac";
import { version } from "../package.json";
import { startTunnel } from "./tunnel";

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

cli.command('').action(async (args) => {
  if (!args.url)  {
    consola.error("Please specify a URL.");
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

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
    ecc: "L",
    border: 1,
  });

  consola.info("Waiting for tunnel URL...");
  consola.success(`Tunnel ready at \`${tunnelUrl}\``);
  consola.success(`QR Code:`);
  console.log(ansi);
});

cli.parse();
