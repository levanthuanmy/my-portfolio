import React, { FC } from 'react'

const Home: FC<{}> = () => {
  const menuTitle: string[] = ['About', 'Skills', 'Experiences', 'Contact']
  return (
    <main className="snap-container h-screen overflow-y-scroll">
      <div className="text-white h-screen bg-yellow-300 snap-child">
        {/* >= sm screen */}
        <div className="grid-cols-4 text-center bg-white text-black hidden sm:grid">
          {menuTitle.map((item, idx) => (
            <div key={idx} className="cursor-pointer py-3 hover:bg-gray-500 hover:text-white">
              {item}
            </div>
          ))}
        </div>
        {/* < sm screen */}
        <div className="text-center bg-white text-black block sm:hidden">
          {menuTitle.map((item, idx) => (
            <div key={idx} className="cursor-pointer py-3 hover:bg-gray-500 hover:text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="text-white h-screen bg-gray-600 snap-child flex justify-center items-center text-9xl">oke</div>
      <div className="text-white h-screen bg-red-300 snap-child flex justify-center items-center text-9xl">oke</div>
      <div className="text-white h-screen bg-blue-400 snap-child flex justify-center items-center text-9xl">oke</div>
    </main>
  )
}

export default Home
