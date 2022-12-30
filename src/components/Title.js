import React from 'react';

export default function App() {
  return (
    <div className="grid grind-cols-1 justify-center items-center h-32 text-white">
      <div className="text-center place-self-end">
        <h1 className="text-5xl text-center sm:whitespace-nowrap sm:text-4xl"> 👋 Welcome on React space X</h1>
      </div>
      <div className="text-center place-self-stretch mt-2">
        <span className="text-l text-center sm:text-base">The place where you can find everything about space X</span>
      </div>
    </div>
  );
}
