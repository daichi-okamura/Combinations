import { Head } from "$fresh/runtime.ts";
import Combinations from "../islands/Combinations.tsx";

export default function Index() {
  return (
    <>
      <Head>
        <title>Combinations</title>
      </Head>

      <body class="bg-blue-100">

      <header class="bg-black text-white h-24 p-4 pl-5 mb-8 italic">
        <h1 class="font-bold text-3xl text-white">Combination<span class="text-red-500">s</span></h1>
        <p class="whitespace-nowrap">
          This app will find all the combinations of <
          span class="text-red-500 text-2xl mx-1">n</span> non-overlapping numbers from 1 to 9 that sum to <
          span class="text-red-500 text-2xl mx-1">x</span>.</p>
      </header>

      <main class="">
        <div class="my-4 flex justify-evenly gap-x-8">
          <Combinations count={ 2 } sum={ 10 }/>
          <Combinations count={ 2 } sum={ 10 }/>
        </div>
        <div class="my-4 flex justify-evenly gap-x-8">
          <Combinations count={ 2 } sum={ 10 }/>
          <Combinations count={ 2 } sum={ 10 }/>
        </div>
        <div class="my-4 flex justify-evenly gap-x-8">
          <Combinations count={ 2 } sum={ 10 }/>
          <Combinations count={ 2 } sum={ 10 }/>
        </div>
        <div class="my-4 flex justify-evenly gap-x-8">
          <Combinations count={ 2 } sum={ 10 }/>
          <Combinations count={ 2 } sum={ 10 }/>
        </div>
      </main>

      </body>
    </>
  );
}
