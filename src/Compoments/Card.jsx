import React from 'react';

const Card = ({ item }) => {
  // Normalize category length to ensure equal text appearance
  const normalizedTitle= item.title.padEnd(20, ' ').substring(0, 20);

  return (
    <div className="mt-6 my-3 px-6">
      <div className="card bg-base-100 w-72 h-[420px] dark:border overflow-hidden duration-200 dark:bg-slate-900 dark:text-white hover:scale-105 shadow-xl flex flex-col">
        <figure className="h-48">
          <img
            src={item.image}
            alt="image"
            className="w-full h-full object-cover transform transition-transform cursor-pointer "
          />
        </figure>
        <div className="card-body flex-grow flex flex-col justify-between">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary w-32 text-center truncate">
              {item.catagery}
            </div>
          </h2>
          <p className="flex-grow">{normalizedTitle}...</p>
          <div className="card-actions flex items-center justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer rounded-full border-[2px] hover:bg-pink-500 duration-200 px-2 py-1 hover:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
