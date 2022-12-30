import React from 'react';

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 text-white bg-black bg-opacity-10 bg-clip-padding navBackground">
      <div className="w-full flex-grow flex items-center">
        <div className="flex-grow">
          <a href="/">
            <p className="font-semibold text-xl tracking-tight">React Space X</p>
          </a>
        </div>
        <div>
          <a href="/" className="inline-block text-lg px-4 py-2 leading-none hover:underline">Home</a>
          <a href="favoris" className="inline-block text-lg px-4 py-2 leading-none hover:underline">Favoris</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
