import React from "react";



export const Pageheader = () => {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date: Date) {
    return (
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
         date.getFullYear()
      ].join('-') +
      ' ' 
    );
  }
  
  return (
    <header className="h-20 bg-green-700 gap-2 flex items-center justify-center text-white">
      <div className="flex flex-col gap-2">
        <span className="font-bold">TODO-APP</span>
        <p>{`${formatDate(new Date())}`}</p>
      </div>
    </header>
  );
};
