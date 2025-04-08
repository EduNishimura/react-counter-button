"use client"

import { useState } from "react";

import { ButtonSharedState } from "@/Components/button-shared-state";
import { ButtonIndependentState } from "@/Components/button-independent-state";

export default function Home() {
  const [count, setCount] = useState(0)
    
  function handleClick() {
      setCount(count + 1);
  }

  return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
          <h1 className="text-3xl font-bold">React Counter Button</h1>
          <h2 className="text-x1">Buttons with shared state</h2>
          <ButtonSharedState count={count} onClick={handleClick}/>
          <ButtonSharedState count={count} onClick={handleClick}/>

          <h2 className="text-x1">Buttons with indepentdent state</h2>
          <ButtonIndependentState/>
          <ButtonIndependentState/>
      </main>
  );
}

