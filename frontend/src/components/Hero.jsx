import React from "react";

function Hero({ttile = 'Become A React Dev', subtitle = 'Apply your skills on real world project be the hero'}) {
  return (
    <main
      class="flex flex-col items-center p-8 bg-blue-500 text-white"
      data-id="10"
    >
      <h2 class="text-4xl font-bold" data-id="11">
       {ttile} 
      </h2>
      <p class="mt-2 text-lg" data-id="12">
        {subtitle}
      </p>
    </main>
  );
}

export default Hero;
