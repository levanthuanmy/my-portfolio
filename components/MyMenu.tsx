import { Popover, Transition, Switch, Menu } from '@headlessui/react'
import React, { FC, Fragment } from 'react'

const MyMenu: FC<{
  menuTitle: any[]
  handleClickTopNav: Function
  isScrollDown: boolean
  current: string
  darkMode: boolean
  setDarkMode: any
}> = ({ menuTitle, handleClickTopNav, isScrollDown, current, darkMode, setDarkMode }) => {
  return (
    <nav>
      {/* >= sm screen */}
      <div
        style={{ width: 'calc(100vw - 5px)' }}
        className={`grid-cols-10 text-center hidden sm:grid fixed ${isScrollDown && 'bg-white bg-opacity-40 text-black'}`}>
        {menuTitle.map((item, idx) => (
          <>
            {item.name === 'Home' ? (
              <div
                key={idx}
                onClick={() => handleClickTopNav(item.ref, item.name)}
                className={`cursor-pointer py-3 hover:text-white focus:text-white col-span-1 flex justify-center`}>
                {current !== item.name ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ) : (
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
                    <g>
                      <path
                        stroke="null"
                        d="m13.04051,3.3749a1.23101,1.14618 0 0 0 -1.74064,0l-8.61704,8.02324a1.23101,1.14618 0 0 0 1.74064,1.62069l0.36069,-0.33584l0,7.54872a1.23101,1.14618 0 0 0 1.23101,1.14618l2.46201,0a1.23101,1.14618 0 0 0 1.23101,-1.14618l0,-2.29235a1.23101,1.14618 0 0 1 1.23101,-1.14618l2.46201,0a1.23101,1.14618 0 0 1 1.23101,1.14618l0,2.29235a1.23101,1.14618 0 0 0 1.23101,1.14618l2.46201,0a1.23101,1.14618 0 0 0 1.23101,-1.14618l0,-7.54872l0.36069,0.33584a1.23101,1.14618 0 0 0 1.74064,-1.62069l-8.61704,-8.02324l-0.00003,0z"
                      />
                    </g>
                  </svg>
                )}
              </div>
            ) : item.name === 'Settings' ? (
              <Popover key={idx} className="relative w-full h-full cursor-pointer col-span-1">
                {({ open }) => (
                  <>
                    <Popover.Button className="w-full h-full hover:text-white hover:bg-gray-400 rounded-none flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1">
                      <Popover.Panel className="fixed right-0 mt-3 mr-5 z-10 w-min min-w-[11vw]">
                        <div className="overflow-auto rounded-lg shadow-lg bg-white text-black">
                          <div className="border-b p-3">
                            <div className="text-left">Theme</div>
                            <Switch
                              checked={darkMode}
                              onChange={setDarkMode}
                              className={`${darkMode ? 'bg-gray-900 ' : 'bg-gray-200 '}
      relative inline-flex flex-shrink-0 h-[24px] w-[58px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                              <span className="sr-only">Use setting</span>
                              <span
                                aria-hidden="true"
                                className={`${darkMode ? 'translate-x-9' : 'translate-x-0'}
        pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                              />
                            </Switch>
                          </div>
                          <div>dasdas</div>
                          <div>dasdas</div>
                          <div>dasdas</div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <div
                key={idx}
                onClick={() => handleClickTopNav(item.ref, item.name)}
                className={`cursor-pointer py-3 hover:bg-gray-400 hover:text-white col-span-2 ${current === item.name && 'bg-gray-500 text-white'}`}>
                {item.name}
              </div>
            )}
          </>
        ))}
      </div>
      {/* < sm screen */}
      <div style={{ width: 'calc(100vw - 2px)' }} className="sm:hidden text-right fixed">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="bg-black w-min p-3 cursor-pointer">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Menu.Items className="text-center bg-white text-black">
                  {menuTitle.map((item, idx) => (
                    <Menu.Item>
                      <div
                        key={idx}
                        onClick={() => handleClickTopNav(item.ref, item.name)}
                        className="cursor-pointer py-3 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white grid grid-cols-12">
                        <div className="col-span-1 flex justify-end self-center">
                          {current === item.name && <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>}
                        </div>
                        <div className={`col-span-10 ${current === item.name && 'text-yellow-500'}`}>{item.name}</div>
                        <div className="col-span-1"></div>
                      </div>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </nav>
  )
}
export default MyMenu
