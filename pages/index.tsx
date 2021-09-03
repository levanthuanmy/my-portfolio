import React, { FC, useRef, useState } from 'react'

const Home: FC<{}> = () => {
  const detailRef = useRef<any>(null)
  const skillRef = useRef<any>(null)
  const expRef = useRef<any>(null)
  const contactRef = useRef<any>(null)
  const mainRef = useRef<any>(null)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)

  const scrollToRef = (ref: any) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const menuTitle: any[] = [
    { name: 'About', ref: detailRef },
    { name: 'Skills', ref: skillRef },
    { name: 'Experience', ref: expRef },
    { name: 'Contact', ref: contactRef },
  ]
  const img: string = 'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const avt: string =
    'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/37958068_2253414014870463_7938932397351895040_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=gjAMyG5SHoEAX8WE3RG&_nc_ht=scontent.fsgn3-1.fna&oh=66a6a9cef7271d40c3b4493bd0766a35&oe=61559167'

  return (
    <main
      ref={mainRef}
      className="snap-container h-screen overflow-y-scroll text-white"
      onScroll={() => setIsScrollDown(mainRef.current.scrollTop != 0)}>
      <nav>
        {/* >= sm screen */}
        <div
          style={{ width: 'calc(100vw - 5px)' }}
          className={`grid-cols-4 text-center hidden sm:grid fixed ${isScrollDown && 'bg-white bg-opacity-40 text-black'}`}>
          {menuTitle.map((item, idx) => (
            <div
              key={idx}
              onClick={() => scrollToRef(item.ref)}
              className="cursor-pointer py-3 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white">
              {item.name}
            </div>
          ))}
        </div>
        {/* < sm screen */}
        <div style={{ width: 'calc(100vw - 2px)' }} className="sm:hidden text-right fixed">
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
                onClick={() => scrollToRef(item.ref)}
                className="cursor-pointer py-3 hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-screen snap-child">
        <img src={img} alt="img" className="w-screen h-screen object-cover absolute top-0 left-0" style={{ zIndex: -1 }} />
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2 items-center text-center">
          <div className="flex justify-center">
            <img src={avt} alt="avt" className="w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96 object-cover rounded-full" />
          </div>
          <div className="text-5xl lg:text-7xl font-bold self-start lg:self-center break-words">
            <div>Le Van Thuan My</div>
            <sup className="text-lg">Front-end Developer</sup>
            <div>
              <button
                onClick={() => scrollToRef(detailRef)}
                className="text-base bg-white bg-opacity-30 border border-white text-white p-3 px-5 rounded-md hover:bg-opacity-100 hover:text-gray-800">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={detailRef} className="text-white h-screen bg-gray-600 snap-child flex justify-center items-center">
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
        onClick={() => mainRef.current.scrollTo(0, 0)}
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
