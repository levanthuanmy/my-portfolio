import React, { FC, useRef, useState } from 'react'

const Home: FC<{}> = () => {
  const homeRef = useRef<any>(null)
  const detailRef = useRef<any>(null)
  const skillRef = useRef<any>(null)
  const expRef = useRef<any>(null)
  const contactRef = useRef<any>(null)
  const mainRef = useRef<any>(null)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const [current, setCurrent] = useState<string>('Home')

  const scrollToRef = (ref: any) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleClickTopNav = (ref: any, name: string) => {
    scrollToRef(ref)
    setCurrent(name)
  }

  const handleScroll = (refs: any[]) => {
    setIsScrollDown(mainRef.current.scrollTop != 0)
    for (let i = 0; i < refs.length; i++) {
      if (refs[i].ref?.current?.offsetTop === mainRef.current.scrollTop) {
        setCurrent(refs[i].name)
      }
    }
  }

  const menuTitle: any[] = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: detailRef },
    { name: 'Skills', ref: skillRef },
    { name: 'Experience', ref: expRef },
    { name: 'Contact', ref: contactRef },
  ]
  const img: string = 'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const avt: string =
    'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/37958068_2253414014870463_7938932397351895040_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=gjAMyG5SHoEAX8WE3RG&_nc_ht=scontent.fsgn3-1.fna&oh=66a6a9cef7271d40c3b4493bd0766a35&oe=61559167'

  return (
    <main ref={mainRef} className="snap-container h-screen overflow-y-scroll text-white" onScroll={() => handleScroll(menuTitle)}>
      <nav>
        {/* >= sm screen */}
        <div
          style={{ width: 'calc(100vw - 5px)' }}
          className={`grid-cols-9 text-center hidden sm:grid fixed ${isScrollDown && 'bg-white bg-opacity-40 text-black'}`}>
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
              ) : (
                <div
                  key={idx}
                  onClick={() => handleClickTopNav(item.ref, item.name)}
                  className={`cursor-pointer py-3 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white col-span-2 ${
                    current === item.name && 'bg-gray-500 text-white'
                  }`}>
                  {item.name}
                </div>
              )}
            </>
          ))}
        </div>
        {/* < sm screen */}
        <div
          style={{ width: 'calc(100vw - 2px)' }}
          className={`sm:hidden text-right fixed ${isHover ? 'w-screen h-screen bg-black bg-opacity-50 bg-blend-saturation' : ''}`}>
          <button className="bg-black w-min p-3 cursor-pointer" onClick={() => setIsHover(!isHover)} onBlur={() => setIsHover(false)}>
            {isHover ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div className={`${isHover ? 'visible opacity-100' : 'invisible opacity-0'} transition-visibility text-center bg-white text-black`}>
            {menuTitle.map((item, idx) => (
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
            ))}
          </div>
        </div>
      </nav>
      <div ref={homeRef} className="h-screen snap-child">
        <img src={img} alt="img" className="w-screen h-screen object-cover absolute top-0 left-0" style={{ zIndex: -1 }} />
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2 items-center text-center">
          <div className="flex justify-center">
            <img src={avt} alt="avt" className="w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96 object-cover rounded-full" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold self-start lg:self-center break-words">
            <div>Le Van Thuan My</div>
            <div className="text-lg pt-4">Front-end Developer</div>
            <div>
              <button
                onClick={() => scrollToRef(detailRef)}
                className="mt-4 text-base bg-white bg-opacity-30 border border-white text-white p-3 px-5 rounded-md hover:bg-opacity-100 hover:text-gray-800">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={detailRef}
        className="text-white h-screen snap-child flex justify-center items-center"
        style={{
          backgroundColor: '#a6b0bd',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234b5563' fill-opacity='0.43'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}>
        detail information
      </div>
      <div ref={skillRef} className="text-white h-screen bg-red-300 snap-child flex justify-center items-center">
        skills
      </div>
      <div ref={expRef} className="text-white h-screen bg-red-300 snap-child flex justify-center items-center">
        experience
      </div>
      <div ref={contactRef} className="text-white h-screen bg-blue-400 snap-child pt-12">
        <div>instagram</div>
        <div>facebook</div>
        <div>linkedin</div>
        <div>gmail</div>
      </div>
      <div
        onClick={() => handleClickTopNav(homeRef, 'Home')}
        className={`fixed bg-black text-white right-6 bottom-6 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 ${
          isScrollDown ? 'visible' : 'invisible'
        }`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </div>
    </main>
  )
}

export default Home
