
import React from 'react';
import CustomCollapse from './custom-collapse';

function Faq() {
  const faqData = [
    {
      title: 'What is Webflow and why is it the best website builder?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'What is your favorite template from BRIX Templates?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'What is your favorite template from BRIX Templates?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className='md:w-[56rem] mx-3 md:mx-auto flex flex-col gap-[1.875rem] items-center'>
        <p className="text-center  text-xl md:text-4xl font-semibold">
        Our FAQs     </p>
      <p className="text-lg md:text-2xl font-avenir font-normal text-center md:w-[52rem] mt-[1rem]">Mortgages are some of the biggest commitments you’ll make in your financial life. And with all the options, it can be hard to work out what they’ll cost you. Our mortgage calculator can help.</p>

      {faqData.map((faq, index) => (
        <CustomCollapse key={index} title={faq.title}>
          <p>{faq.content}</p>
        </CustomCollapse>
      ))}
           <button
          className="text-white rounded text-base md:text-xl my-[2rem] font-normal font-avenir py-3 px-8 bg-black "
        >
Read All FAQs        </button>
    </div>
  );
}

export default Faq;
