import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Body = () => {
  const [selectedItem, setSelectedItem] = useState('RECOMMENDED');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleCheckboxChange = (e) => {
    const option = e.target.value;
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    }
  };



  return (
    <div>
      <div className={`border mx-5 sm:mx-10 filter-nav ${sidebarOpen ? 'filter-nav--sidebar-open' : ''} flex bg-white text-black px-3`}>
        <div className='T-items'>14564 Items</div>
        <div className='Filter-sidebar px-6 cursor-pointer' onClick={() => setSidebarOpen(!sidebarOpen)}>filter</div>
        <div className='relative ml-auto '>
          <div className='r-dropdown cursor-pointer' onClick={() => setDropdownVisible(!dropdownVisible)}>
            {selectedItem}
          </div>
          {dropdownVisible && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
              <div className='py-1'>
                <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleItemClick('Recomended')}>Recommended</button>
                <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleItemClick('Most Recent')}>Most Recent</button>
                <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleItemClick('Item 3')}>Item 3</button>
                <button className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleItemClick('Item 4')}>Item 4</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <section className="text-gray-600 body-font">
        <div className={`container py-12 mx-auto relative ${sidebarOpen ? 'ml-4 sm:ml-6' : ''}`}>
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="absolute inset-y-1 w-48 sm:w-64 bg-white shadow-lg">
              <div className="p-4">
                <button className="absolute top-0 right-0 mr-4 mt-2 text-gray-600" onClick={handleCloseSidebar}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h1 className="text-lg font-semibold mb-4">Filter Options</h1>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold mb-2">Category</h2>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Option 1"
                      onChange={handleCheckboxChange}
                      checked={selectedOptions.includes('Option 1')}
                      className="mr-2"
                    />
                    men 
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Option 2"
                      onChange={handleCheckboxChange}
                      checked={selectedOptions.includes('Option 2')}
                      className="mr-2"
                    />
                    women
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Option 3"
                      onChange={handleCheckboxChange}
                      checked={selectedOptions.includes('Option 3')}
                      className="mr-2"
                    />
                    Option 3
                  </label>
                </div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold">Category</h2>
                  <select className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold">Category</h2>
                  <select className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold">Category</h2>
                  <select className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold">Category</h2>
                  <select className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Apply Filters</button>
              </div>
            </div>
          )}

          {/* Your content here */}
          <div className={`container px-4 sm:px-60 mx-auto ${sidebarOpen ? 'pr-64' : ''}`}>
            <div className="flex flex-wrap -m-4">
              {/* Items go here */}
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product1.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product2.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product3.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product4.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product5.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product6.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product7.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product8.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product1.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='image'>
                  <Image
                    src="/images/product6.png"
                    width={300}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
                <div className='name text-black text-lg'>THE NAME of the card</div>
                <div className='info'>
                  <p> <Link href={'/'}>Signin</Link> to view the price  <Image
                    src="/images/heart.png"
                    width={20}
                    height={40}
                  /></p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
