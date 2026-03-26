import React from 'react'
import logo1 from './assets/jadoo.png'
import logo2 from './assets/logo.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import fff from './assets/fff.png'
import ggg from './assets/gogle.png'
import aaa from './assets/aple.png'

const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo1} alt="" />
          <ul>
            <li>Desitnations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
          <div className='bola1'>
            <button className='btn1'>logIn</button>
            <button className='btn2'>SignUp</button>

            <select>
              <option>EN</option>
              <option>RU</option>
              <option>UZ</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        <section className='sec1'>
          <div >
            <h3 className='h3'>Best Destinations around the world</h3>
            <h1 className='h1'>
              Travel, enjoy <br />
              and live a new <br />
              and full life <br />
            </h1>
          </div>
          <img className='img1' src={logo2} alt="" />
        </section>
        <section className='sec2'>
          <div className='bola3'>
            <h3 className='h0'>CATEGORY</h3>
            <h1>We Offer Best Services</h1>
          </div>
          <div className='bola2'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </section>
        <section className='sec3'>
          <div className='bola4'>
            <h3 className='h0'>Top Selling</h3>
            <h1>Top Destinations</h1>
          </div>
          <div>
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
          </div>
        </section>
      </main>
      <footer>
        <div className="div1">
          <img src={logo1} alt="" /><br />
          <p>Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </div>
        <div className="div2">
          <h1>Company</h1><br />
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className="div3">
          <h1>Contact</h1><br />
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div className="div4">
          <h1>More</h1><br />
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
        <div className="div5">
         <img src={fff} alt="" /><br />
         <h1>Discover our app</h1><br />
        <div className='bola5'>
          <img src={ggg} alt="" />
          <img src={aaa} alt="" />
        </div>
        </div>
      </footer>
      <p className='p0'>All rights reserved@jadoo.co</p>
    </>
  )
}

export default App