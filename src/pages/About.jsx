import React from 'react'

const About = () => {
  return (
    <div>
<div className="hero bg-white min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.freepik.com/premium-vector/man-sits-desk-with-laptop-plant-background_1013341-201141.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">I'm Front End Developer!</h1>
      <p className="py-6">
      I am currently BSCS Final Year student at Virtual University, my proficiency in computer science. <br />
       My journey in technology includes being certified in Front End Development by Jawan Pakistan, <br />
       where I gained hands-on experience in crafting engaging user interfaces.      </p>
      <button className="btn btn-primary">Contact Me</button>
    </div>
  </div>
</div>    </div>
  )
}

export default About;