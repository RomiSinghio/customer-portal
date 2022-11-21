import DatePicker from "./DatePicker";
import Search from "./Search";

const tabs = [
  { name: "Awaiting Price", count: "2", href: "#", current: false },
  { name: "Quotes", count: "12", href: "#", current: false },
  { name: "Bookings", count: "32", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative px-4 mx-auto mt-6 mt-8sm:pb-0 sm:px-6 lg:px-8 ">
      <div className="md:flex md:items-center md:justify-between ">
        <div className="flex mx-auto mt-8 md:absolute md:top-3 md:right-0 md:mt-0 sm:px-6 lg:px-8 ">
          <DatePicker />
          <Search />
        </div>
      </div>
      <div className="mt-4 ">
        <div className="sm:hidden ">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>
                {tab.name} ({tab.count})
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block ">
          <nav className="flex -mb-px space-x-8 ">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-black text-[#172451] "
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm "
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
                <span
                  className={classNames(
                    tab.current ? "bg-primary " : "text-[#24282F] bg-[#F2F4F7]",
                    "px-3 py-1 mx-3  rounded-xl text-xs"
                  )}
                >
                  {tab.count}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
