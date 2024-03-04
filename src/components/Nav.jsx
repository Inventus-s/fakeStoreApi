import React from 'react';

const Nav = () => {
    return (
        <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
          <a className='py-2 px-5 border rounded border-blue-200 text-blue-300'
           href='/create'>Add New Products</a>
          <hr className='w-[80%] my-3'></hr>
          <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
          <ul className="w-[80%]">
            <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>{" "}
            cat 1
            </li>
            <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-100"></span>{" "}
            cat 1
            </li>
            <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-100"></span>{" "}
            cat 1
            </li>
          </ul>
        </nav>
    );
}

export default Nav;