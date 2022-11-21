import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full h-24 bg-[#010101]  ">
      <div className="flex justify-between px-4 mx-auto  sm:px-6 lg:px-8">
        <div className="h-full px-12 py-2 my-auto bg-white rounded-lg ">
          <h1 className="font-bold "> LOGO </h1>
        </div>
        <div className="flex space-x-6 my-7">
          <button className="text-white hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9819 11.8356L12.7365 11.1269H12.7365L12.9819 11.8356ZM8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9H8.25ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14H11.25ZM6 2.75H18V1.25H6V2.75ZM21.25 6V18H22.75V6H21.25ZM18 21.25H6V22.75H18V21.25ZM2.75 18V6H1.25V18H2.75ZM6 21.25C4.20507 21.25 2.75 19.7949 2.75 18H1.25C1.25 20.6234 3.37665 22.75 6 22.75V21.25ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C20.6234 22.75 22.75 20.6234 22.75 18H21.25ZM18 2.75C19.7949 2.75 21.25 4.20507 21.25 6H22.75C22.75 3.37665 20.6234 1.25 18 1.25V2.75ZM6 1.25C3.37665 1.25 1.25 3.37665 1.25 6H2.75C2.75 4.20507 4.20507 2.75 6 2.75V1.25ZM14.25 9C14.25 9.98356 13.6185 10.8216 12.7365 11.1269L13.2273 12.5444C14.6946 12.0363 15.75 10.6424 15.75 9H14.25ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75V5.25C9.92893 5.25 8.25 6.92893 8.25 9H9.75ZM12 6.75C13.2426 6.75 14.25 7.75736 14.25 9H15.75C15.75 6.92893 14.0711 5.25 12 5.25V6.75ZM11.25 13V14H12.75V13H11.25ZM12.7365 11.1269C12.0578 11.3619 11.25 11.9975 11.25 13H12.75C12.75 12.9441 12.7708 12.8708 12.8517 12.7813C12.9366 12.6873 13.0697 12.5989 13.2273 12.5444L12.7365 11.1269Z"
                fill="#7B8089"
              />
              <circle cx="12" cy="17" r="1" fill="#7B8089" />
            </svg>
          </button>
          <button className="text-white hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9L21 12M21 12L18 15M21 12H9"
                stroke="#7B8089"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 7.5V7C15 4.79086 13.2091 3 11 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H11C13.2091 21 15 19.2091 15 17V16.5"
                stroke="#7B8089"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
