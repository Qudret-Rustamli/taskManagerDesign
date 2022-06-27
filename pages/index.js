import { useState } from 'react';

const Home = () => {
  const [open, togglesidebar] = useState(false);
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 bg-white left-0 w-64 px-8 py-4 border-r overflow-auto z-50 lg:translate-x-0 transform ${
          open
            ? 'translate-x-0 ease-out transition-medium'
            : '-translate-x-full ease-in transition-medium'
        }`}>
        <div className="flex justify-between items-center">
          <img src="/img/logo.jpg" alt="logo" className="w-10 h-10 rounded-full" />
          <button className="text-gray-700 lg:hidden" onClick={() => togglesidebar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* x button */}
        <nav className="mt-8">
          <h3 className="text-sm font-semibold  uppercase text-gray-600 tracking-wide">
            SCRUMBOARD
          </h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg">
              <span className="text-sm font-medium text-white">Active Sprints</span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>

          {/* section -2 */}
          <h3 className="text-sm font-semibold  uppercase text-gray-600 tracking-wide mt-8">
            tags
          </h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bug</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2 0 rounded-lg">
              <span className="text-sm font-medium text-gray-700">New Feature</span>
              <span className="text-xs font-semibold text-gray-700">1</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Marketing</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Disign</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Research</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 min-w-0  ">
        <div className="flex-shrink-0">
          <header className="flex flex-col border-b border-gray-200 px-6 ">
            <div className=" flex justify-between items-center py-3">
              <div className="min-w-0 flex-shrink-1 flex items-center py-3">
                {/* hamburger menu */}
                <button className="text-gray-600 lg:hidden" onClick={() => togglesidebar(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {/* Searchbar */}
                <div className="relative w-64 ml-4 lg:ml-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
                    placeholder="Search"
                  />
                </div>
              </div>

              {/* ICons */}
              <div className="ml-4 mr-2 flex items-center">
                <button className="flex-shrink-0 text-gray-500">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="ml-4 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                </button>
              </div>
            </div>
            {/* header buttons */}
            <div className="flex items-center justify-between mb-2">
              <div className="sm:flex sm:item-center">
                <h2 className="text-lg font-medium text-gray-900 ">Assigness</h2>
                <div className="flex items-center sm:ml-6 sm:mt-0 mt-1">
                  <span className="border-2 border-white rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                      alt="avatar"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                      alt="avatar"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                      alt="avatar"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                      alt="avatar"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </span>
                </div>
              </div>
              <div className="ml-8 flex-shrink-0 flex items-center">
                <button className="text-white bg-gray-900 pl-2 pr-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Complete Sprint
                </button>
                <button className=" flex items-center ml-5 text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 pl-2 pr-4 py-2 rounded-md hover:from-purple-600 hover:to-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>New item</span>
                </button>
              </div>
            </div>
          </header>
        </div>
        <div className="bg-gray-50 flex-1 overflow-auto">
          {/* content */}
          <main className="h-full p-3 inline-flex space-x-2 overflow-hidden">
            {/* Todo */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1">
                Todo
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Li-2 todo */}
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-red-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-red-500 leading-tight">
                              BUG
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* In progress */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1">
                In Progress
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto">
                <ul className="pt-1 pb-3 px-3">
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              RESEACH
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/*  li-2 iprogress */}
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-pink-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-pink-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* li-3 inprogress */}
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-green-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-green-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* li-4 inprogress */}
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-pink-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-pink-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* li-4 */}
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-pink-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-pink-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* testing */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1">
                Testing
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Done */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1">
                Done
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className=" mt-1">
                    <a href="#" className="block bg-white shadow p-5 rounded-md ">
                      <div className="">
                        <div className="flex justify-between items-baseline">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            voluptatibus nihil, ad quaerat nostrum aspernatur tempora voluptates
                            rem.
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=144&h=144&q=60"
                              alt="avatar"
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
