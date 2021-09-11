import React, { FC, useRef, useState } from 'react'
import MyMenu from '../components/MyMenu'

const Home: FC<{}> = () => {
  const homeRef = useRef<any>(null)
  const detailRef = useRef<any>(null)
  const skillRef = useRef<any>(null)
  const expRef = useRef<any>(null)
  const contactRef = useRef<any>(null)
  const mainRef = useRef<any>(null)
  const [isFlip, setIsFlip] = useState<boolean>(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const [current, setCurrent] = useState<string>('Home')
  const [darkMode, setDarkMode] = useState<boolean>(false)

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
    { name: 'Settings', ref: null },
  ]
  const img: string = 'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const avt: string =
    'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/37958068_2253414014870463_7938932397351895040_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=gjAMyG5SHoEAX8WE3RG&_nc_ht=scontent.fsgn3-1.fna&oh=66a6a9cef7271d40c3b4493bd0766a35&oe=61559167'
  const contactWays: any[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/my-le-van-thuan/', icon: 'https://image.flaticon.com/icons/png/512/220/220201.png' },
    { name: 'Gmail', url: 'levanthuanmy2000@gmail.com', icon: 'https://image.flaticon.com/icons/png/512/732/732200.png' },
    { name: 'Github', url: 'https://github.com/levanthuanmy', icon: 'https://image.flaticon.com/icons/png/512/270/270798.png' },
    { name: 'Facebook', url: 'https://www.facebook.com/levanthuanmy', icon: 'https://image.flaticon.com/icons/png/512/733/733549.png' },
  ]

  return (
    <main ref={mainRef} className="snap-container h-screen overflow-y-scroll text-white" onScroll={() => handleScroll(menuTitle)}>
      <MyMenu
        current={current}
        handleClickTopNav={handleClickTopNav}
        isScrollDown={isScrollDown}
        menuTitle={menuTitle}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
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
      <div ref={skillRef} className="text-white h-screen bg-white snap-child pt-16">
        <div className="flex justify-center mt-32">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/234600581_964115151104717_430242195234628819_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=gaNj_mFPCJsAX8rPTpY&_nc_ht=scontent.xx&oh=8bad9b018547c995b232b4c451156e5a&oe=61600D3C"
            alt=""
            className="w-96 h-64 object-cover"
          />
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/231844334_152240897045642_9201570931905168414_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=lEXpRndPLwsAX8n9WGb&_nc_ht=scontent.xx&oh=543f0635d8304ae774859f3d4d63de9d&oe=615EA3BF"
            alt=""
            className="w-56 h-96 object-cover ml-[-7rem] mt-[3rem]"
          />
        </div>
      </div>
      <div ref={expRef} className="text-white h-screen bg-red-300 snap-child flex justify-center items-center">
        experience
      </div>
      <div
        ref={contactRef}
        className="text-white h-screen snap-child pt-16 pb-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-flow-col gap-1"
        style={{
          backgroundColor: '#85b3ec',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbfbfb' fill-opacity='0.49'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}>
        {contactWays.map((item, idx) => (
          <div key={idx} className="flex justify-center items-center">
            {item.name === 'Gmail' ? (
              <div
                className="bg-white bg-opacity-70 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 text-black rounded-lg cursor-pointer shadow-lg hover:bg-opacity-100"
                onClick={() => {
                  navigator.clipboard.writeText(item.url)
                  setIsFlip(!isFlip)
                }}>
                <div className="flex justify-center w-full h-full items-center">
                  {!isFlip ? (
                    <div className="flex flex-col items-center">
                      <img src={item.icon} alt={item.name} className="w-10 h-10" />
                      <div className="pt-3">{item.name}</div>
                    </div>
                  ) : (
                    <div className="break-all px-3 text-center text-sm">
                      {item.url}
                      <div className="text-green-600 flex justify-center items-center">
                        Coppied
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <a target="_blank" href={item.url} rel="noopener noreferrer">
                <div className="bg-white bg-opacity-70 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 text-black rounded-lg flex flex-col justify-center items-center cursor-pointer shadow-lg hover:bg-opacity-100">
                  <img src={item.icon} alt={item.name} className="w-10 h-10" />
                  <div className="pt-3">{item.name}</div>
                </div>
              </a>
            )}
          </div>
        ))}
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
