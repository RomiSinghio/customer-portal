"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function CreateJob() {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="flex justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Job
                  </Dialog.Title>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.773 8.28771C17.0659 7.99481 17.0659 7.51994 16.773 7.22705C16.4801 6.93415 16.0052 6.93415 15.7123 7.22705L16.773 8.28771ZM7.22706 15.7123C6.93416 16.0052 6.93416 16.4801 7.22706 16.773C7.51995 17.0659 7.99482 17.0659 8.28772 16.773L7.22706 15.7123ZM15.7123 16.7729C16.0052 17.0658 16.4801 17.0658 16.773 16.7729C17.0659 16.48 17.0659 16.0052 16.773 15.7123L15.7123 16.7729ZM8.28772 7.22699C7.99482 6.9341 7.51995 6.9341 7.22706 7.22699C6.93416 7.51989 6.93416 7.99476 7.22706 8.28765L8.28772 7.22699ZM15.7123 7.22705L7.22706 15.7123L8.28772 16.773L16.773 8.28771L15.7123 7.22705ZM16.773 15.7123L8.28772 7.22699L7.22706 8.28765L15.7123 16.7729L16.773 15.7123Z"
                      fill="#28303F"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2 flex justify-center text-center  bg-[#EFF0F6] py-1 rounded-lg  space-x-2">
                    <button className="bg-black py-2 w-[160px] rounded-lg text-white">
                      Quote
                    </button>
                    <button className="bg-transparent py-2 px-8 w-[160px] rounded-lg text-[#424242] hover:bg-slate-200">
                      Booking
                    </button>
                  </div>
                </div>

                <form className="py-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Passenger Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Job Date
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <CalendarIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Set Date"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Job Time
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <ClockIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="text"
                        name="time"
                        id="time"
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Set Time"
                      />
                    </div>
                  </div>
                  <div className="flex mt-4 w-full">
                    <div class="relative mt-5 mr-3">
                      <div class="absolute border-l border-dashed border-slate-500 left-3 inset-y-7" />
                      <ol class="">
                        <li>
                          <svg
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
                              stroke-width="1.5"
                            />
                            <path
                              d="M9.25 15.8333C9.25 16.2475 9.58579 16.5833 10 16.5833C10.4142 16.5833 10.75 16.2475 10.75 15.8333H9.25ZM11.75 4.16663C11.75 5.13312 10.9665 5.91663 10 5.91663V7.41663C11.7949 7.41663 13.25 5.96155 13.25 4.16663H11.75ZM10 5.91663C9.0335 5.91663 8.25 5.13312 8.25 4.16663H6.75C6.75 5.96155 8.20507 7.41663 10 7.41663V5.91663ZM8.25 4.16663C8.25 3.20013 9.0335 2.41663 10 2.41663V0.916626C8.20507 0.916626 6.75 2.3717 6.75 4.16663H8.25ZM10 2.41663C10.9665 2.41663 11.75 3.20013 11.75 4.16663H13.25C13.25 2.3717 11.7949 0.916626 10 0.916626V2.41663ZM10.75 15.8333V6.66663H9.25V15.8333H10.75Z"
                              fill="#EB8B89"
                            />
                          </svg>
                        </li>
                        <li class="flex gap-4 items-center"></li>

                        <li className="mt-[70px]">
                          <svg
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
                              stroke-width="1.5"
                            />
                            <path
                              d="M16.897 2.87264L16.2262 2.53723L16.2262 2.53723L16.897 2.87264ZM16.0197 4.62728L16.6905 4.96269L16.0197 4.62728ZM16.0197 5.37264L15.3489 5.70805L16.0197 5.37264ZM16.897 7.12728L17.5678 6.79187L17.5678 6.79187L16.897 7.12728ZM9.25 15.8333C9.25 16.2475 9.58579 16.5833 10 16.5833C10.4142 16.5833 10.75 16.2475 10.75 15.8333H9.25ZM11.6667 2.41663H16.1516V0.916626H11.6667V2.41663ZM16.2262 2.53723L15.3489 4.29187L16.6905 4.96269L17.5678 3.20805L16.2262 2.53723ZM15.3489 5.70805L16.2262 7.46269L17.5678 6.79187L16.6905 5.03723L15.3489 5.70805ZM10.75 15.8333V8.33329H9.25V15.8333H10.75ZM10.75 8.33329V3.33329H9.25V8.33329H10.75ZM16.1516 7.58329H10V9.08329H16.1516V7.58329ZM16.2262 7.46269C16.2539 7.5181 16.2136 7.58329 16.1516 7.58329V9.08329C17.3287 9.08329 18.0942 7.84463 17.5678 6.79187L16.2262 7.46269ZM15.3489 4.29187C15.126 4.73762 15.126 5.2623 15.3489 5.70805L16.6905 5.03723C16.6788 5.01377 16.6788 4.98615 16.6905 4.96269L15.3489 4.29187ZM16.1516 2.41663C16.2136 2.41663 16.2539 2.48182 16.2262 2.53723L17.5678 3.20805C18.0942 2.15529 17.3287 0.916626 16.1516 0.916626V2.41663ZM11.6667 0.916626C10.332 0.916626 9.25 1.9986 9.25 3.33329H10.75C10.75 2.82703 11.1604 2.41663 11.6667 2.41663V0.916626Z"
                              fill="#9098A6"
                            />
                          </svg>
                        </li>
                      </ol>
                    </div>
                    <div className="w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Collection
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="collection"
                            id="collection"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Destination
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="destination"
                            id="destination"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 text-[#5E68CD] text-sm hover:scale-110 transition-all ease-in-out">
                    + Add Stop
                  </button>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9341 6.72032L13.3038 6.06773L12.9341 6.72032ZM17.0292 9.03981L17.3988 8.38723L17.0292 9.03981ZM2.97084 9.03982L3.34047 9.6924H3.34047L2.97084 9.03982ZM7.06586 6.72032L6.69622 6.06773H6.69622L7.06586 6.72032ZM10.8926 17.447L11.2022 16.7639L10.8926 17.447ZM9.10736 17.447L9.41691 18.1301L9.10736 17.447ZM7.66876 14.7848L7.06461 14.3404L7.66876 14.7848ZM12.3312 14.7848L11.7271 15.2292L12.3312 14.7848ZM6.09656 16.9221L6.7007 17.3665V17.3665L6.09656 16.9221ZM7.37327 18.2328L7.06372 17.5496L7.37327 18.2328ZM13.9034 16.9221L14.5076 16.4777L13.9034 16.9221ZM12.6267 18.2328L12.3172 18.9159L12.6267 18.2328ZM11.7271 15.2292L13.2993 17.3665L14.5076 16.4777L12.9354 14.3404L11.7271 15.2292ZM6.7007 17.3665L8.2729 15.2292L7.06461 14.3404L5.49241 16.4777L6.7007 17.3665ZM12.9363 17.5496L11.2022 16.7639L10.5831 18.1301L12.3172 18.9159L12.9363 17.5496ZM8.7978 16.7639L7.06372 17.5496L7.68282 18.9159L9.41691 18.1301L8.7978 16.7639ZM8.75399 5.18635V3.66264H7.25399V5.18635H8.75399ZM3.34047 9.6924L7.4355 7.3729L6.69622 6.06773L2.6012 8.38723L3.34047 9.6924ZM11.246 3.66264V5.18635H12.746V3.66264H11.246ZM12.5645 7.3729L16.6595 9.6924L17.3988 8.38723L13.3038 6.06773L12.5645 7.3729ZM16.5002 9.96126H12.994V11.4613H16.5002V9.96126ZM11.246 11.6157V13.7814H12.746V11.6157H11.246ZM8.75399 13.7814V11.6157H7.25399V13.7814H8.75399ZM7.00598 9.96126H3.49978V11.4613H7.00598V9.96126ZM8.75399 11.6157C8.75399 10.6342 7.90022 9.96126 7.00598 9.96126V11.4613C7.09764 11.4613 7.16703 11.4948 7.20803 11.5319C7.24783 11.568 7.25399 11.5984 7.25399 11.6157H8.75399ZM12.994 9.96126C12.0998 9.96126 11.246 10.6342 11.246 11.6157H12.746C12.746 11.5984 12.7522 11.568 12.792 11.5319C12.833 11.4948 12.9024 11.4613 12.994 11.4613V9.96126ZM11.246 5.18635C11.246 6.10426 11.7675 6.92149 12.5645 7.3729L13.3038 6.06773C12.9335 5.85803 12.746 5.51584 12.746 5.18635H11.246ZM16.6595 9.6924C16.7305 9.73262 16.7434 9.76609 16.7458 9.77221C16.7501 9.78346 16.7531 9.8026 16.7445 9.82986C16.7358 9.85745 16.7163 9.88793 16.6831 9.91218C16.6533 9.93395 16.5979 9.96126 16.5002 9.96126V11.4613C17.327 11.4613 17.9623 10.9534 18.1746 10.2824C18.3912 9.59809 18.1422 8.80831 17.3988 8.38723L16.6595 9.6924ZM2.6012 8.38723C1.85778 8.80831 1.60883 9.59809 1.8254 10.2824C2.03774 10.9534 2.67301 11.4613 3.49978 11.4613V9.96126C3.40211 9.96126 3.34674 9.93395 3.31693 9.91218C3.28373 9.88793 3.26423 9.85745 3.2555 9.82986C3.24687 9.8026 3.24993 9.78346 3.25423 9.77221C3.25657 9.7661 3.26947 9.73262 3.34047 9.6924L2.6012 8.38723ZM7.25399 5.18635C7.25399 5.51584 7.06645 5.85803 6.69622 6.06773L7.4355 7.3729C8.23246 6.92149 8.75399 6.10426 8.75399 5.18635H7.25399ZM11.2022 16.7639C10.4435 16.4201 9.55648 16.4201 8.7978 16.7639L9.41691 18.1301C9.7821 17.9646 10.2179 17.9646 10.5831 18.1301L11.2022 16.7639ZM8.2729 15.2292C8.5829 14.8078 8.75399 14.304 8.75399 13.7814H7.25399C7.25399 13.9731 7.19179 14.1675 7.06461 14.3404L8.2729 15.2292ZM12.9354 14.3404C12.8082 14.1675 12.746 13.9731 12.746 13.7814H11.246C11.246 14.304 11.4171 14.8078 11.7271 15.2292L12.9354 14.3404ZM5.49241 16.4777C4.95851 17.2035 5.15028 18.0414 5.64152 18.5457C6.12126 19.0382 6.91654 19.2631 7.68282 18.9159L7.06372 17.5496C6.91463 17.6172 6.7877 17.5726 6.71601 17.499C6.68045 17.4625 6.67392 17.434 6.67311 17.4268C6.67276 17.4237 6.67275 17.4205 6.67426 17.415C6.67576 17.4095 6.68117 17.3931 6.7007 17.3665L5.49241 16.4777ZM13.2993 17.3665C13.3188 17.3931 13.3242 17.4095 13.3257 17.415C13.3272 17.4205 13.3272 17.4237 13.3269 17.4268C13.3261 17.434 13.3195 17.4625 13.284 17.499C13.2123 17.5726 13.0854 17.6172 12.9363 17.5496L12.3172 18.9159C13.0835 19.2631 13.8787 19.0382 14.3585 18.5457C14.8497 18.0414 15.0415 17.2035 14.5076 16.4777L13.2993 17.3665ZM8.75399 3.66264C8.75399 2.97448 9.31184 2.41663 10 2.41663V0.916626C8.48342 0.916626 7.25399 2.14606 7.25399 3.66264H8.75399ZM12.746 3.66264C12.746 2.14606 11.5166 0.916626 10 0.916626V2.41663C10.6882 2.41663 11.246 2.97449 11.246 3.66264H12.746Z"
                          fill="#9098A6"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="flight"
                      id="flight"
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Flight number"
                    />
                  </div>

                  <div className=" mt-4 border-t border-[#f6f6f6]" />
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Passengers
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserGroupIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle Type
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          width="51"
                          height="30"
                          viewBox="0 0 51 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_285_17534)">
                            <path
                              d="M4.34635 8.09147L1.95636 10.2361C1.95636 10.2361 0.476639 11.1392 0.419847 11.5906C0.363045 12.042 0.419847 13.1144 0.419847 13.1144L0.0783151 13.7352V16.1618C0.0783151 16.1618 -0.206055 16.4438 -0.206055 16.6699C-0.206055 16.8956 0.476644 18.9275 0.874985 19.3226C1.21652 19.7177 1.55768 20.2821 1.55768 20.2821H2.46829C2.46829 20.2821 2.58225 14.5819 7.58981 14.5819C12.5974 14.5819 12.5406 20.2821 12.5406 20.2821L31.8885 20.5641C31.8885 20.5641 31.661 14.6947 37.1808 14.6947C42.701 14.6947 41.8476 20.5641 41.8476 20.5641H44.6359C44.7499 20.5641 44.8067 20.5078 44.8635 20.4511C45.1478 20.2254 45.9445 19.4916 45.9445 19.2096V18.2501V15.3717C45.9445 15.2587 45.8877 15.0897 45.8305 15.033L45.2614 14.2992L44.0096 12.606C43.8957 12.4929 43.782 12.3803 43.6113 12.3803L34.3931 10.9131C34.3931 10.9131 26.4832 6.45447 22.6136 6.11574C22.6136 6.11574 9.92361 5.77702 6.9645 6.62381C4.06219 7.47026 2.98115 7.13189 2.98115 7.13189L3.55027 7.80896L4.34635 8.09147Z"
                              fill="black"
                            />
                            <path
                              d="M11.4596 19.4354C11.4596 21.5861 9.70152 23.3296 7.53307 23.3296C5.36456 23.3296 3.60657 21.586 3.60657 19.4354C3.60657 17.2848 5.36461 15.5413 7.53307 15.5413C9.70158 15.5413 11.4596 17.2848 11.4596 19.4354Z"
                              fill="black"
                            />
                            <path
                              d="M41.0509 19.4354C41.0509 21.5861 39.2932 23.3296 37.1247 23.3296C34.9559 23.3296 33.1982 21.586 33.1982 19.4354C33.1982 17.2848 34.9559 15.5413 37.1247 15.5413C39.2932 15.5413 41.0509 17.2848 41.0509 19.4354Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_285_17534">
                              <rect width="51" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        className="block w-full pl-16  rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button className="mt-3 text-black text-sm hover:scale-110 transition-all ease-in-out">
                      + Add Notes
                    </button>
                  </div>
                  <div className="flex w-full m-auto space-x-4 mt-6">
                    <button className="border rounded-lg px-4 py-2 w-1/2">
                      Cancel
                    </button>
                    <button className="bg-primary text-black font-bold rounded-lg px-4 py-2 w-1/2">
                      Create Job
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
