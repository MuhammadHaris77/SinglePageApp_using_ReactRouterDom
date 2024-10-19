import React from 'react'
import Card from '../components/Card';
import Image from '../assets/images/image.jpg'
const Home = () => {
  return  (
    <div className='text-center m-auto'>
<div
  className="hero min-h-screen"
>
  <div className="hero-overlay bg-white"></div>
  <div className="hero-content text-blue text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-8xl font-bold">Hello there</h1>
      <h3 className="mb-5 text-2xl">
      I'm a passionate developer with expertise in both front-end development and Gen Ai chatbots. I design and develop engaging chatbots that can answer questions, provide support, and guide users through your application or website.      </h3>
      <button className="btn btn-success"> Hire Me </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home;