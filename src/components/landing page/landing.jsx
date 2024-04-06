import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css'; 

function Landing() {
  return (
    <div>
    <div className="img">
    <div className="img">
    <div className="img1">
    </div>
    <div className="img2">
    </div>
    <div className="img3">
    </div>
    <div className="img4">
    </div>
    <div className="img5">
    </div>
    <div className="img6">
    </div>
    <div className="img7">
    </div>
    <div className="img8">
    </div>
    <div className="img10">
    </div>
  </div>
    </div>
    <div className="svg">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c375e03e"
          d="M40.3,-62.8C49.1,-49,50.9,-33.1,56.4,-17.9C62,-3.5,71.3,11.4,65.2,18.4C59.2,25,37.8,23.3,24.5,24.9C15,24.5,5.5,26.2,-6.4,34.6C-17.6,43,-35.4,58,-50.9,58.4C-65.5,58.8,-80,64.6,-85.2,27.9C-90.4,11.4,-87.5,-8.1,-74.4,-16.8C-61.4,-25.5,-38.7,-23.7,-24.6,-35.5C-10.6,-47.8,-5.4,-73.7,5.2,-80.9C15.7,-89,31.5,-76.5,40.3,-62.7"
          transform="translate(100 100)" />
      </svg>
    </div>
    <div className="main">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">MENTORS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <a className="nav-link active" style={{ color: 'rgb(208, 125, 219)' }} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'rgb(208, 125, 219)' }}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ color: 'rgb(208, 125, 219)' }}>
                  Dropdown
                </a>
                <ul className="dropdown-menu bg-info-subtle">
                  <li><a className="dropdown-item" href="#" style={{ color: 'rgb(208, 125, 219)' }}>Action</a></li>
                  <li><a className="dropdown-item" href="#" style={{ color: 'rgb(208, 125, 219)' }}>Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#" style={{ color: 'rgb(208, 125, 219)' }}>Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={{ color: 'rgb(208, 125, 219)' }}>Disabled</a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-info me-2" data-bs-target="#signinmodal" data-bs-toggle="modal"
              fdprocessedid="jnxsw">SIGN IN</button>
            <button type="button" className="btn btn-outline-info me-2" data-bs-target="#signupmodal"
              data-bs-toggle="modal">SIGN UP</button>
          </div>
        </div>
      </nav>
      <div className="content">
        <h1>
          <div className="content1" style={{ color: 'rgb(145, 152, 157)' }}>Learn and grow with help from</div>
          <div className="content2" style={{ color: 'rgb(232, 92, 166)' }}>world-class mentors</div>
        </h1>
        <h5 className="content3" style={{ color: 'rgb(64, 8, 58)' }}>Book and meet over 6,086+ mentors for 1:1 mentorship in our global
          community.</h5>
        <div className="search">
          <input type="text" className="search__input" placeholder="Search by company, language or role" />
          <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></div>
        </div>
      </div>
    </div>

  </div>

  );
}

export default Landing;
