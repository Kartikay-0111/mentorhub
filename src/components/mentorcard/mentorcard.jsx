import React from 'react'
import "w3-css/w3.css";
import "./mentorcard.css"
export const Mentorcard = () => {
  return (
    <div className="card w3-center">
      <div className="card-inner">
        <div className="card-front">
          <div className="image"><img src="mentor\src\assets\avatar.png" alt="" /><p className="title w3-bottom-left">
            Lorem ipsum dolor sit
          </p>
            <p>Experice : 4 years</p></div>



        </div>
        <div className="card-back">
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
          </p>
          <div className='w3-btn w3-blue w3-hover-black'>
            Find out more
            <span aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}
