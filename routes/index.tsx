import { Head } from "$fresh/runtime.ts";
import Combinations from "../islands/Combinations.tsx";

export default function Index() {
  return (
    <>
      <Head>
        <title>Combinations</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>

      <body class="bg-blue-100">

      <header class="bg-black text-white  p-4 pl-5 mb-8 italic h-auto">
        <h1 class="font-bold text-3xl text-white">Combination<span class="text-red-500">s</span></h1>
        <p>
          This app will find all the combinations of <
          span class="text-red-500 text-2xl mx-1">n</span> non-overlapping numbers from 1 to 9 that sum to <
          span class="text-red-500 text-2xl mx-1">x</span>.</p>
      </header>

      <main class="flex flex-wrap gap-2 p-2">
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
        <div class="flex-auto"><Combinations count={ 2 } sum={ 10 }/></div>
      </main>

      </body>
    </>
  );
}
