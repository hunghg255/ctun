/* eslint-disable unicorn/no-array-reduce */
import isUnicodeSupported from 'is-unicode-supported';
import { green, white } from "kolorist";

function ansiRegex() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
  ].join("|");

  return new RegExp(pattern, "g");
}

const unicode = isUnicodeSupported();
const s = (c: string, fallback: string) => (unicode ? c : fallback);

const strip = (str: string) => str.replace(ansiRegex(), "");

const S_BAR = s('│', '|');
const S_STEP_SUBMIT = s('◇', 'o');

const S_BAR_H = s('─', '-');
const S_CORNER_TOP_RIGHT = s('╮', '+');
const S_CONNECT_LEFT = s('├', '+');
const S_CORNER_BOTTOM_RIGHT = s('╯', '+');


export const note = (message = "", title = "") => {
  const lines: any = `\n${message}\n`.split("\n");
  const titleLen = strip(title).length;
  const len =
    Math.max(
      lines.reduce((sum: any, ln: any) => {
        ln = strip(ln);
        return ln.length > sum ? ln.length : sum;
      }, 0),
      titleLen,
    ) + 2;
  const msg = lines
    .map(
      (ln: any) =>
        `${white(S_BAR)}  ${ln}${" ".repeat(
          len - strip(ln).length,
        )}${white(S_BAR)}`,
    )
    .join("\n");
  process.stdout.write(
    `${white(S_BAR)}\n${green(S_STEP_SUBMIT)}  ${title} ${white(
      S_BAR_H.repeat(Math.max(len - titleLen - 1, 1)) + S_CORNER_TOP_RIGHT,
    )}\n${msg}\n${white(
      S_CONNECT_LEFT + S_BAR_H.repeat(len + 2) + S_CORNER_BOTTOM_RIGHT,
    )}\n`,
  );
};
