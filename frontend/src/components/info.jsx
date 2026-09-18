import { IoFilterSharp, IoSearchOutline } from "react-icons/io5"

function Info ({title, subTitle}) {
  
  return (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-7">
    <div className="mb-6 md:mb-0">
      <h1 className="text-4xl font-semibold text-black dark:text-gray-300 mb-2">
        {title}
      </h1>

      <span className="text-gray-600 dark:text-gray-300">
        {subTitle}
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md p-2">
        <IoSearchOutline className="text-xl text-gray-600 dark:text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-gray-700 dark:text-gray-300"
        />
      </div>

      <button className="flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white">
        <IoFilterSharp size={24} />
        <span className="text-base">Filter By</span>
      </button>
    </div>
  </div>
);
}

export default Info