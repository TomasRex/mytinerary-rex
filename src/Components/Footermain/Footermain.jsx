
const Footermain = () => {
  return (
    <footer className="h-9 w-full bg-[#f9f2ff] fixed bottom-0">
    <div class="w-full p-2 md:flex md:items-center md:justify-between">
      <span class="text text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 MyTinerary . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center text font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Cities
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footermain;