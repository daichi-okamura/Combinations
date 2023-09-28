import { defineLayout } from "$fresh/server.ts";
import IconBrandGithubFilled from "icons/brand-github.tsx";

export default defineLayout((_, ctx) => {
  return (
    <div>
      <header className="bg-black text-white p-2">
        <h1 className="font-bold text(3xl white) m-1">
          <a href="https://github.com/daichi-okamura/combinations">
            Combination<span className="text-red-500">s</span>
          </a>
        </h1>
        <p className="m-1">
          This app will find all the combinations of
          <span className="text(red-500 2xl) mx-1">n</span>
          non-overlapping numbers from 1 to 9 that sum to
          <span className="text(red-500 2xl) mx-1">x</span>.
        </p>
      </header>

      <ctx.Component />

      <footer className="p-2">
        <div className="flex justify-start">
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </footer>
    </div>
  );
});
