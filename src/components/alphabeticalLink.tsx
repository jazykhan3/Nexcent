"use client"
import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

const AlphabeticalLinks: React.FC = () => {
  const router = useRouter();

  const handleClick = (letter: string) => {
    // Redirect to the corresponding route (replace 'your-route-prefix' with your actual route prefix)
    // router.push(`/your-route-prefix/${letter.toLowerCase()}`);
  };

  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => handleClick('All')}
        className={'font-normal text-2xl mr-1'}
      >
        All |
      </button>
      {alphabet.map((letter, index) => (
        <React.Fragment key={letter}>
          <button
            onClick={() => handleClick(letter)}
            className="font-normal text-2xl mr-1"
          >
            {letter}
          </button>
          {index < alphabet.length - 1 && <span className="">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AlphabeticalLinks;
