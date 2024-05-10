import React, { useState } from 'react';
import './App.css';
import './something.css';
import records from './data/db.json';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = (image) => {
    if (selectedItems.length < 4) {
      setSelectedItems([...selectedItems, image]);
    } else {
      alert('You can only add up to 4 books.');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  return (
    <div className='pb-7'>
      <div className="header mb-10">
        <h1 className="text-red-500 text-5xl flex justify-center mb-5 mt-5">Shop The Best Books</h1>
        <p className='flex justify-center'>You can add only 4 books in your cart</p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {/* Books Section */}
        <div className="col-span-8">
          <div className="book-list grid grid-cols-3 gap-4">
            {records.books.map(book => (
              <div key={book.id} className="book-item mx-5 flex flex-col items-center bg-gray-100 px-2 py-5 rounded-xl">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className='text-center mt-3'>
                  <h3 className="book-title text-3xl">{book.title}</h3>
                  <p className="book-info">{book.info}</p>
                </div>
                <div className="mt-auto">
                  <button onClick={() => handleAddItem(book.image)} className='bg-green-500 px-5 py-3 text-white rounded-3xl mt-3 hover:bg-green-700'>Add Me</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Items Section */}
        <div className="col-span-4 bg-gray-200 p-4 rounded-xl">
          <h1 className='text-center text-2xl'>Your Items</h1>
          <div className='flex flex-wrap justify-center mt-5'>
            {selectedItems.map((item, index) => (
              <div key={index} className="relative">
                <img src={item} alt={`Item ${index + 1}`} className="h-20 w-20 object-cover m-2" />
                <button onClick={() => handleRemoveItem(index)} className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 px-2 py-1 text-white rounded-full">X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
