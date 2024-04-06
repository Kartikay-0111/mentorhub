import React from 'react'
import "w3-css/w3.css";
import "./mentorcard.css"
import "./input.css"
export const Mentorcard = () => {

  return (
    <div>
      <div className='flex justify-evenly'>
        <div>
          <p className='ml-6 text-4xl font-bold  text-black '>Some of our Mentors </p>
          <p className='ml-6 text-xl text-white '>We are a community of 50,000+ ambitious professionals, going further each day.</p>
        </div>
        <div><button className='mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8' type='button'>Explore all</button></div>
      </div>
      <div className='all  md:grid md:grid-cols-5 md:gap-3 ml-6  mt-10'>
        <div className="card">
          <div className="card-inner">
            <div className="card-front  bg-purple-400">
              <div style={{ height: "100%" }} className="image"><img src="photo1.jpg" alt="" /><p className="title text-black font-semibold font-3xl ml-3">Harry</p>
                <p className=' text-purple-800 ml-3 font-light'>Software Developer</p>
                <p></p></div>
            </div>
            <div className="card-back  bg-purple-400">
              <p className="desc  text-purple-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.</p>
              <div className='button mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8'>Book a session<span aria-hidden="true">→</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front  bg-purple-400">
              <div style={{ height: "100%" }} className="image"><img src="photo2.jpg" alt="" /><p className="title text-black font-semibold font-3xl ml-3">Caroline</p>
                <p className=' text-purple-800 ml-3 font-light'>Public Speaker</p></div>
            </div>
            <div className="card-back  bg-purple-400">
              <p className="desc  text-purple-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.</p>
              <div className='button mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8'>Book a session<span aria-hidden="true">→</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front  bg-purple-400">
              <div style={{ height: "100%" }} className="image"><img src="photo3.jpg" alt="" /><p className="title text-black font-semibold font-3xl ml-3">John Doe</p>
                <p className=' text-purple-800 ml-3 font-light'>Security Analyst</p></div>
            </div>
            <div className="card-back  bg-purple-400">
              <p className="desc  text-purple-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.</p>
              <div className='button mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8'>Book a session<span aria-hidden="true">→</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front  bg-purple-400">
              <div style={{ height: "100%" }} className="image"><img src="photo4.jpg" alt="" /><p className="title text-black font-semibold font-3xl ml-3">Jacob Periera</p>
                <p className=' text-purple-800 ml-3 font-light'>Entrepreneur</p></div>
            </div>
            <div className="card-back  bg-purple-400">
              <p className="desc  text-purple-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.</p>
              <div className='button mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8'>Book a session<span aria-hidden="true">→</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front  bg-purple-400">
              <div style={{ height: "100%" }} className="image"><img src="photo5.jpg" alt="" /><p className="title text-black font-semibold font-3xl ml-3">Alan Jefrey</p>
                <p className=' text-purple-800 ml-3 font-light'>Businessman</p></div>
            </div>
            <div className="card-back  bg-purple-400">
              <p className="desc  text-purple-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit.</p>
              <div className='button mt-5 mb-2 bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-slate-500 rounded ml-8 mr-8'>Book a session<span aria-hidden="true">→</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
