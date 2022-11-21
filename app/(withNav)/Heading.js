import Link from "next/link";

export default function Heading() {
  return (
    <div className="flex items-center justify-between px-4 mx-auto mt-8 sm:px-6 lg:px-8 ">
      <div className="flex-1 min-w-0">
        <h2 className="text-3xl font-bold leading-7 tracking-tight text-gray-900 truncate ">
          Dashboard
        </h2>
      </div>
      <div className="flex mt-4 md:mt-0 md:ml-4">
        <Link
          href={"#"}
          className="inline-flex items-center hover:scale-110  px-4 py-2 ml-3 text-sm font-medium text-black bg-primary border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            className="mr-2"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 4.16666V15.8333M4.66663 10H16.3333"
              stroke="black"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create Job
        </Link>
      </div>
    </div>
  );
}
