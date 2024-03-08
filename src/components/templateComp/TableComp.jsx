import { Profile } from '../images/images';

const TableComp = () => {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-left rtl:text-right">
        <thead className="text-lg border-y-2 my-2">
          <tr className="">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                />
                <label for="checkbox-all-search" className="sr-only rounded-lg">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Memebr
            </th>
            <th scope="col" className="px-6 py-3">
              Admin
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Finish Date
            </th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr className="hover:bg-blue-100 rounded-full">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-table-search-1"
                  className="sr-only rounded-lg"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Redesign main page
            </th>
            <td class="flex gap-1 px-2 py-4 items-center">
              <div class="">
                <img src={Profile} className="h-6" alt="profile pic" />
              </div>
              <div>Dianne R.</div>
            </td>
            <td className="px-6 py-4">3</td>
            <td className="flex justify-center">
              <span className="bg-blue-300 rounded-full p-2">In progress</span>
            </td>
            <td className="px-6 py-4">8h</td>
            <td className="flex justify-center">
              <span className="bg-gray-300 rounded-full p-2">13 Mon</span>
            </td>
          </tr>
          <tr className="h-16 hover:bg-blue-100 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-table-search-2"
                  className="sr-only rounded-lg"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              Meeting with HR
            </th>
            <td class="flex gap-1 px-2 py-4 items-center">
              <div class="">
                <img src={Profile} className="h-6" alt="profile pic" />
              </div>
              <div>Jenny W.</div>
            </td>
            <td className="px-6 py-4">2</td>
            <td className="flex justify-center">
              <span className="bg-green-300 rounded-full p-2">Done</span>
            </td>
            <td className="px-6 py-4">2h</td>
            <td className="flex justify-center">
              <span className="bg-gray-300 rounded-full p-2">08 Tue</span>
            </td>
          </tr>
          <tr className="hover:bg-blue-100 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-table-search-3"
                  className="sr-only rounded-lg"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Make changes for developers
            </th>
            <td class="flex gap-1 px-2 py-4 items-center">
              <div class="">
                <img src={Profile} className="h-6" alt="profile pic" />
              </div>
              <div>Ronald R.</div>
            </td>
            <td className="px-6 py-4">1</td>
            <td className="flex justify-center">
              <span className="bg-blue-300 rounded-full p-2">In progress</span>
            </td>
            <td className="px-6 py-4">8h</td>
            <td className="flex justify-center">
              <span className="bg-gray-300 rounded-full p-2">18 Fri</span>
            </td>
          </tr>
          <tr className=" hover:bg-blue-100 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-table-search-3"
                  className="sr-only rounded-lg"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Mentorship
            </th>
            <td class="flex gap-1 px-2 py-4 items-center">
              <div class="">
                <img src={Profile} className="h-6" alt="profile pic" />
              </div>
              <div>Elenor</div>
            </td>
            <td className="px-6 py-4">1</td>
            <td className="flex justify-center">
              <span className="bg-pink-300 rounded-full p-2">To Do</span>
            </td>
            <td className="px-6 py-4">10h</td>
            <td className="flex justify-center">
              <span className="bg-gray-300 rounded-full p-2">27 Tue</span>
            </td>
          </tr>
          <tr className="hover:bg-blue-100 ">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-table-search-3"
                  className="sr-only rounded-lg"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Meeting with HR
            </th>
            <td class="flex gap-1 px-2 py-4 items-center">
              <div class="">
                <img src={Profile} className="h-6" alt="profile pic" />
              </div>
              <div>Robert F.</div>
            </td>
            <td className="px-6 py-4">4</td>
            <td className="flex justify-center">
              <span className="bg-blue-300 rounded-full p-2">In progress</span>
            </td>
            <td className="px-6 py-4">12 h</td>
            <td className="flex justify-center">
              <span className="bg-gray-300 rounded-full p-2 mt-1">25 Wed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
