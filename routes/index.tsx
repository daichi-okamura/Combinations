import { Head } from "$fresh/runtime.ts";
import Combinations from "../islands/Combinations.tsx";
import IconBrandGithubFilled from "icons/brand-github.tsx";
import range from "../libs/range.ts";

export default function Index() {
  return (
    <>
      <Head>
        <title>Combinations</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <body class="bg-blue-100 select-none">
        <header class="bg-black text-white italic p-2">
          <h1 class="font-bold text-3xl text-white m-1">
            Combination<span class="text-red-500">s</span>
          </h1>
          <p class="m-1">
            This app will find all the combinations of
            <span class="text-red-500 text-2xl mx-1">n</span>
            non-overlapping numbers from 1 to 9 that sum to
            <span class="text-red-500 text-2xl mx-1">x</span>.
          </p>
        </header>

        <main class="flex flex-wrap gap-2 p-2">
          {[...range(1, 6)].map((i) => (
            <div class="flex-auto">
              <Combinations key={i} count={2} sum={10} />
            </div>
          ))}
        </main>

        <footer class="p-2">
          <div class="flex justify-end items-center gap-2">
            <a href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge-dark.svg"
                alt="Made with Fresh"
              />
            </a>
            <a href="https://github.com/daichi-okamura/combinations">
              <IconBrandGithubFilled class="w-8 h-8" />
            </a>
          </div>
        </footer>
      </body>
    </>
  );
}
