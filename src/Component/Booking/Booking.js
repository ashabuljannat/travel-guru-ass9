
import React from 'react';
import hotel from'../Image/hotel.jpg'
import hotel1 from '../Image/hotel1.png';
import hotel2 from '../Image/hotel2.png';
import hotel3 from '../Image/hotel3.png';
import './Boking.css';



const Booking = () => {
    return (
        <div>
        <h3 style={{color:'yellow'}}> Choose your room</h3>
          <div className="bookAll">
           <img src={hotel1} alt=""/>
            <div className='title'>
              <h5>Sayeman Beach Resort</h5>
              <p>2 Rooms ,2 Baths ,2 Corridors</p>
              <p>With Aircon + Wifi</p>
              <h4>$150/one day</h4>
            </div>
           <img src={hotel2} alt=""/>
            <div className='title'>
            <h5>Hotel Sea Shine</h5>
              <p>3 Rooms ,2 Baths ,3 Corridors</p>
              <p>With Aircon + Wifi</p>
              <h4>$170/one day</h4>
          
            </div>
           <img src={hotel3} alt=""/>
            <div className='title'>
            <h5>Hotel Suite Sadaf</h5>
              <p>2 Rooms ,1 Baths ,1 Corridors</p>
              <p>With Aircon + Wifi</p>
              <h4>$110/one day</h4>
            </div>
          </div>
          <div className="book">
           <img src={hotel} alt="" height="600px" width="580px"/>
          </div>
        </div>
    );
};

export default Booking;