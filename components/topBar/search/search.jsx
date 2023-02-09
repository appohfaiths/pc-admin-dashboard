'use client';

import { MdSearch } from 'react-icons/md';

export default function Search() {
  return (
    <form>
      <div className="flex items-center px-2 py-1 border-2 border-solid border-neutral-300 rounded-xl hover:shadow-lg ">
        <MdSearch className="text-neutral-500" size={25} />
        <input
          type="search"
          className="flex-auto block w-full px-2 py-1 text-base font-normal bg-white transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none "
          placeholder="Search"
        />
      </div>
    </form>
  );
}
