const awaitPrice = [
  {
    ref: "35235",
    collection: "OMC House, Unit 12 Oakfield Industrial Estate, OX294TH",
    destination: "2 Begbroke Cresecent, Begbroke, OX51RW",
    department: "Optimization",
    passanger_name: "Romi Singh",
    passanger_phone: "07498203260",
    vehicle_type: "16 Seater Minibus",
    pax: "10",
    job_date: "12 February",
    job_time: "9:00 AM",
    notes:
      "this is a test note that may be needed. 123 this is a test note that may be needed. this is a test note that may be needed.",
    flight: "BA385",

    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // More awaitPrices...
];

export default function AwaitPriceTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-[#F6F6F6]">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-heading sm:pl-6"
                    >
                      Ref
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-heading"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-heading"
                    >
                      Passenger Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-heading"
                    >
                      Vehicle Type
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-heading"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-heading"
                    >
                      Notes
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {awaitPrice.map((awaitPrice) => (
                    <tr
                      className="hover:bg-[#EFF0F6] transition-all ease-in-out"
                      key={awaitPrice.ref}
                    >
                      <td className="px-3 py-4 text-sm text-secondary whitespace-nowrap ">
                        <div className="text-black ">
                          #{awaitPrice.ref}
                          <div className="group">
                            <svg
                              className="mx-auto mt-2 ml-2 cursor-pointer"
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0094 4.28362V2.67137C10.0094 1.56175 9.10985 0.662231 8.00024 0.662231C6.89063 0.662231 5.99111 1.56175 5.99111 2.67137V4.28362C5.99111 4.87555 5.67715 5.42307 5.16627 5.72205L1.09125 8.10693C0.35766 8.53626 0.662179 9.65948 1.51216 9.65948H5.28218C5.74242 9.65948 6.11552 10.0326 6.11552 10.4928V12.5565C6.11552 13.107 5.93382 13.6421 5.59863 14.0788L4.11958 16.0056C3.84792 16.3595 3.90545 16.865 4.2497 17.1489C4.48344 17.3416 4.80375 17.3913 5.0849 17.2784L7.36557 16.3428C7.77055 16.1767 8.22463 16.1765 8.62972 16.3424L10.9156 17.2784C11.1967 17.3913 11.517 17.3416 11.7508 17.1489C12.095 16.865 12.1526 16.3595 11.8809 16.0056L10.4018 14.0788C10.0667 13.6421 9.88496 13.107 9.88496 12.5565V10.4928C9.88496 10.0326 10.2581 9.65948 10.7183 9.65948H14.4883C15.3383 9.65948 15.6428 8.53626 14.9092 8.10693L10.8342 5.72205C10.3233 5.42307 10.0094 4.87555 10.0094 4.28362Z"
                                fill="#BDC2F9"
                              />
                            </svg>
                            <div className="relative invisible ml-4 group-hover:visible">
                              <div className="absolute w-[150px] top-[-50px] left-[15px] z-20 px-3 py-2 bg-white rounded-lg shadow-2xl ">
                                <div className="text-secondary">
                                  {" "}
                                  Flight Number{" "}
                                </div>
                                {awaitPrice.flight}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-secondary whitespace-nowrap">
                        <div className="flex mb-2 text-black">
                          <svg
                            className="mr-2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="15.8333"
                              rx="7.5"
                              ry="2.5"
                              stroke="#EB8B89"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9.25 15.8333C9.25 16.2475 9.58579 16.5833 10 16.5833C10.4142 16.5833 10.75 16.2475 10.75 15.8333H9.25ZM11.75 4.16666C11.75 5.13316 10.9665 5.91666 10 5.91666V7.41666C11.7949 7.41666 13.25 5.96158 13.25 4.16666H11.75ZM10 5.91666C9.0335 5.91666 8.25 5.13316 8.25 4.16666H6.75C6.75 5.96158 8.20507 7.41666 10 7.41666V5.91666ZM8.25 4.16666C8.25 3.20016 9.0335 2.41666 10 2.41666V0.916656C8.20507 0.916656 6.75 2.37173 6.75 4.16666H8.25ZM10 2.41666C10.9665 2.41666 11.75 3.20016 11.75 4.16666H13.25C13.25 2.37173 11.7949 0.916656 10 0.916656V2.41666ZM10.75 15.8333V6.66666H9.25V15.8333H10.75Z"
                              fill="#EB8B89"
                            />
                          </svg>
                          <div className="overflow-hidden w-[225px] text-ellipsis">
                            {" "}
                            {awaitPrice.collection}{" "}
                          </div>
                        </div>
                        <div className="flex text-secondary">
                          <svg
                            className="mr-2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="15.8333"
                              rx="7.5"
                              ry="2.5"
                              stroke="#9098A6"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M16.897 2.87267L16.2262 2.53726L16.2262 2.53726L16.897 2.87267ZM16.0197 4.62731L16.6905 4.96272L16.0197 4.62731ZM16.0197 5.37267L15.3489 5.70808L16.0197 5.37267ZM16.897 7.12731L17.5678 6.7919L17.5678 6.7919L16.897 7.12731ZM9.25 15.8333C9.25 16.2475 9.58579 16.5833 10 16.5833C10.4142 16.5833 10.75 16.2475 10.75 15.8333H9.25ZM11.6667 2.41666H16.1516V0.916656H11.6667V2.41666ZM16.2262 2.53726L15.3489 4.2919L16.6905 4.96272L17.5678 3.20808L16.2262 2.53726ZM15.3489 5.70808L16.2262 7.46272L17.5678 6.7919L16.6905 5.03726L15.3489 5.70808ZM10.75 15.8333V8.33332H9.25V15.8333H10.75ZM10.75 8.33332V3.33332H9.25V8.33332H10.75ZM16.1516 7.58332H10V9.08332H16.1516V7.58332ZM16.2262 7.46272C16.2539 7.51813 16.2136 7.58332 16.1516 7.58332V9.08332C17.3287 9.08332 18.0942 7.84466 17.5678 6.7919L16.2262 7.46272ZM15.3489 4.2919C15.126 4.73765 15.126 5.26233 15.3489 5.70808L16.6905 5.03726C16.6788 5.0138 16.6788 4.98618 16.6905 4.96272L15.3489 4.2919ZM16.1516 2.41666C16.2136 2.41666 16.2539 2.48185 16.2262 2.53726L17.5678 3.20808C18.0942 2.15532 17.3287 0.916656 16.1516 0.916656V2.41666ZM11.6667 0.916656C10.332 0.916656 9.25 1.99864 9.25 3.33332H10.75C10.75 2.82706 11.1604 2.41666 11.6667 2.41666V0.916656Z"
                              fill="#9098A6"
                            />
                          </svg>
                          <div className="overflow-hidden w-[225px] text-ellipsis">
                            {awaitPrice.destination}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-secondary whitespace-nowrap">
                        <div className="mb-2 text-black">
                          {awaitPrice.passanger_name}
                        </div>
                        <div className="text-secondary">
                          {awaitPrice.passanger_phone}
                        </div>
                      </td>

                      <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 mr-3">
                            <svg
                              className="my-2"
                              width="54"
                              height="24"
                              viewBox="0 0 54 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M45.1482 1.97998H3.49788C1.8134 1.97998 0.358673 3.43011 0.358673 5.28303V13.7408L26.3899 13.7408H52.4213C51.2728 8.90741 48.3635 1.97998 45.1477 1.97998H45.1482ZM0.359493 13.7411C0.359493 15.9968 2.04397 17.8494 4.26403 17.8494H9.47023C9.69993 15.916 11.3078 14.3856 13.2982 14.3856C15.2124 14.3856 16.82 15.9162 17.1262 17.8494H37.8747C38.181 15.916 39.7889 14.3856 41.7027 14.3856C43.6934 14.3856 45.3011 15.9162 45.6073 17.8494H51.426C52.115 17.8494 52.7275 17.2855 52.7275 16.4799C52.7275 15.7549 52.651 14.7881 52.4213 13.7408H0.358547L0.359493 13.7411ZM50.1247 10.9215H43.7701L37.1092 3.67122C40.0952 3.59066 43.081 3.59066 45.9902 3.59066C48.2106 5.52411 49.3587 8.10186 50.1244 10.9215L50.1247 10.9215ZM35.8842 3.51008H2.19689V6.57148C2.19689 7.941 3.2688 9.06893 4.57046 9.06893H40.7079L35.8845 3.51048L35.8842 3.51008Z"
                                fill="black"
                              />
                              <path
                                d="M35.8842 3.51008H2.19689V6.57148C2.19689 7.941 3.2688 9.06893 4.57046 9.06893H40.7079L35.8845 3.51048L35.8842 3.51008Z"
                                fill="black"
                              />
                              <path
                                d="M50.1244 10.9215L43.7701 10.9215L37.1092 3.67122C40.0952 3.59066 43.081 3.59066 45.9902 3.59066C48.2106 5.52411 49.3587 8.10186 50.1244 10.9215Z"
                                fill="black"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M41.7802 15.1108C40.0957 15.1108 38.7175 16.561 38.7175 18.3334C38.7175 20.0252 40.0957 21.4753 41.7802 21.4753C43.388 21.4753 44.7662 20.0252 44.7662 18.3334C44.7662 16.561 43.388 15.1108 41.7802 15.1108ZM41.7802 16.561C40.8614 16.561 40.0957 17.3666 40.0957 18.3334C40.0957 19.3002 40.8613 20.0252 41.7802 20.0252C42.6224 20.0252 43.388 19.3001 43.388 18.3334C43.388 17.3666 42.6224 16.561 41.7802 16.561Z"
                                fill="black"
                              />
                              <path
                                d="M41.7802 16.561C40.8614 16.561 40.0957 17.3666 40.0957 18.3334C40.0957 19.3002 40.8613 20.0252 41.7802 20.0252C42.6224 20.0252 43.388 19.3001 43.388 18.3334C43.388 17.3666 42.6224 16.561 41.7802 16.561Z"
                                fill="black"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.2983 15.1108C11.6138 15.1108 10.2356 16.561 10.2356 18.3334C10.2356 20.0252 11.6138 21.4753 13.2983 21.4753C14.9828 21.4753 16.2844 20.0252 16.2844 18.3334C16.2844 16.561 14.9828 15.1108 13.2983 15.1108ZM13.2983 16.561C12.3795 16.561 11.6138 17.3666 11.6138 18.3334C11.6138 19.3002 12.3795 20.0252 13.2983 20.0252C14.2171 20.0252 14.9062 19.3001 14.9062 18.3334C14.9062 17.3666 14.2171 16.561 13.2983 16.561Z"
                                fill="black"
                              />
                              <path
                                d="M13.2983 16.561C12.3795 16.561 11.6138 17.3666 11.6138 18.3334C11.6138 19.3002 12.3795 20.0252 13.2983 20.0252C14.2171 20.0252 14.9062 19.3001 14.9062 18.3334C14.9062 17.3666 14.2171 16.561 13.2983 16.561Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="mb-2 font-medium text-black">
                              {awaitPrice.vehicle_type}
                            </div>
                            <div className="flex text-secondary">
                              <svg
                                className="mr-2"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <ellipse
                                  cx="10"
                                  cy="13.75"
                                  rx="5"
                                  ry="2.08333"
                                  stroke="#9098A6"
                                  strokeWidth="1.5"
                                  strokeLinejoin="round"
                                />
                                <circle
                                  cx="10"
                                  cy="6.66666"
                                  r="2.5"
                                  stroke="#9098A6"
                                  strokeWidth="1.5"
                                  strokeLinejoin="round"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.62886 10.9185C4.48487 10.9392 3.42297 11.1327 2.60853 11.4585C2.17923 11.6302 1.78148 11.8534 1.47879 12.1397C1.17452 12.4274 0.916687 12.8305 0.916687 13.3333C0.916687 13.8361 1.17452 14.2392 1.47879 14.527C1.78148 14.8133 2.17923 15.0365 2.60853 15.2082C3.07814 15.3961 3.63003 15.5399 4.23249 15.632C3.69696 15.1139 3.37579 14.517 3.33727 13.8797C3.27795 13.859 3.2207 13.8375 3.16562 13.8155C2.8409 13.6856 2.62846 13.5497 2.50946 13.4372C2.45652 13.3871 2.43246 13.3524 2.422 13.3333C2.43246 13.3143 2.45652 13.2796 2.50946 13.2295C2.62846 13.117 2.8409 12.9811 3.16562 12.8512C3.29716 12.7986 3.44107 12.7493 3.59599 12.7043C3.95759 12.0024 4.67401 11.3853 5.62886 10.9185ZM2.41456 13.3508C2.41443 13.3508 2.41468 13.3495 2.41568 13.3467C2.41519 13.3495 2.41469 13.3508 2.41456 13.3508ZM2.41568 13.3199C2.41468 13.3172 2.41443 13.3159 2.41456 13.3159C2.41469 13.3159 2.41519 13.3172 2.41568 13.3199Z"
                                  fill="#9098A6"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.6628 13.8797C16.6243 14.517 16.3031 15.1139 15.7676 15.632C16.37 15.5399 16.9219 15.3961 17.3915 15.2082C17.8208 15.0365 18.2186 14.8133 18.5213 14.527C18.8256 14.2392 19.0834 13.8361 19.0834 13.3333C19.0834 12.8305 18.8256 12.4274 18.5213 12.1397C18.2186 11.8534 17.8208 11.6302 17.3915 11.4585C16.5771 11.1327 15.5152 10.9392 14.3712 10.9185C15.3261 11.3853 16.0425 12.0024 16.4041 12.7043C16.559 12.7493 16.7029 12.7986 16.8345 12.8512C17.1592 12.9811 17.3716 13.117 17.4906 13.2295C17.5436 13.2796 17.5676 13.3143 17.5781 13.3333C17.5676 13.3524 17.5436 13.3871 17.4906 13.4372C17.3716 13.5497 17.1592 13.6856 16.8345 13.8155C16.7794 13.8375 16.7221 13.859 16.6628 13.8797ZM17.5855 13.3508C17.5854 13.3508 17.5849 13.3495 17.5844 13.3467C17.5854 13.3495 17.5856 13.3508 17.5855 13.3508ZM17.5844 13.3199C17.5849 13.3172 17.5854 13.3159 17.5855 13.3159C17.5856 13.3159 17.5854 13.3172 17.5844 13.3199Z"
                                  fill="#9098A6"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.8142 8.34647C13.6078 8.81448 13.3178 9.23733 12.9631 9.59609C13.3175 9.80003 13.7285 9.91668 14.1667 9.91668C15.5014 9.91668 16.5834 8.8347 16.5834 7.50001C16.5834 6.16532 15.5014 5.08334 14.1667 5.08334C14.0638 5.08334 13.9625 5.08977 13.863 5.10224C14.049 5.56097 14.1556 6.06035 14.1659 6.58334C14.1661 6.58334 14.1664 6.58334 14.1667 6.58334C14.673 6.58334 15.0834 6.99375 15.0834 7.50001C15.0834 8.00627 14.673 8.41668 14.1667 8.41668C14.0418 8.41668 13.9227 8.3917 13.8142 8.34647Z"
                                  fill="#9098A6"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.13701 5.10224C6.03755 5.08977 5.9362 5.08334 5.83335 5.08334C4.49867 5.08334 3.41669 6.16532 3.41669 7.50001C3.41669 8.8347 4.49867 9.91668 5.83335 9.91668C6.27159 9.91668 6.68258 9.80003 7.03697 9.59609C6.68226 9.23733 6.39223 8.81448 6.18582 8.34646C6.07731 8.3917 5.95825 8.41668 5.83335 8.41668C5.32709 8.41668 4.91669 8.00627 4.91669 7.50001C4.91669 6.99375 5.32709 6.58334 5.83335 6.58334C5.83363 6.58334 5.8339 6.58334 5.83417 6.58334C5.84443 6.06035 5.95105 5.56097 6.13701 5.10224Z"
                                  fill="#9098A6"
                                />
                              </svg>
                              {awaitPrice.pax}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-3 py-4 text-sm text-secondary whitespace-nowrap">
                        <div className="mb-2 text-black">
                          {awaitPrice.job_date}
                        </div>
                        <div className="text-secondary">
                          {awaitPrice.job_time}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-secondary whitespace-wrap lg:block hidden max-w-[280px]">
                        <div className="text-black t">{awaitPrice.notes}</div>
                      </td>
                      <td className="px-3 py-4 text-sm text-secondary whitespace-nowrap">
                        <button className="transition-all ease-in-out hover:scale-150">
                          {/* This opens the more options menu */}
                          <svg
                            width="13"
                            height="3"
                            viewBox="0 0 13 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.5 1.25C0.5 1.94036 1.05964 2.5 1.75 2.5C2.44036 2.5 3 1.94036 3 1.25C3 0.559644 2.44036 0 1.75 0C1.05964 0 0.5 0.559644 0.5 1.25ZM6.75 2.5C6.05964 2.5 5.5 1.94036 5.5 1.25C5.5 0.559644 6.05964 0 6.75 0C7.44036 0 8 0.559644 8 1.25C8 1.94036 7.44036 2.5 6.75 2.5ZM11.75 2.5C11.0596 2.5 10.5 1.94036 10.5 1.25C10.5 0.559644 11.0596 0 11.75 0C12.4404 0 13 0.559644 13 1.25C13 1.94036 12.4404 2.5 11.75 2.5Z"
                              fill="#28303F"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex text-xs justify-between bg-white border-t border-secondary border-opacity-25 p-4">
                <button className="flex border border-[#D0D5DD] py-2 px-4 rounded-lg min-w-[100px]">
                  <svg
                    className="mr-2"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8333 7.00008H1.16666M1.16666 7.00008L6.99999 12.8334M1.16666 7.00008L6.99999 1.16675"
                      stroke="#344054"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>

                <div className="text-[#667085] flex">
                  <button className="py-2 px-4 bg-[#F2F5F7] rounded-lg text-black">
                    1
                  </button>
                  <button className="py-2 px-4 hover:bg-primary rounded-lg ">
                    2
                  </button>
                  <button className="py-2 px-4 hover:bg-primary rounded-lg ">
                    3
                  </button>
                </div>

                <button className="flex border min-w-[100px] justify-center border-[#D0D5DD] py-2 px-4 rounded-lg">
                  Next
                  <svg
                    className="ml-2"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16663 7.00008H12.8333M12.8333 7.00008L6.99996 1.16675M12.8333 7.00008L6.99996 12.8334"
                      stroke="#344054"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
