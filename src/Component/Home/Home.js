import React from 'react';
import Sajek from '../Image/Sajek.png';
import Sreemongol from '../Image/Sreemongol.png';
import sundorbon from '../Image/sundorbon.png';
import cox from '../Image/cox.jpg';
import himchori from '../Image/himchori2.jpg';
import captai from '../Image/captai.jpg';
import './Home.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Home = () => {

  

    return (
       
     <div className="containerr">
    
        <div className="card">
            <div className="imgBox">
                <img src={Sajek} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Its Sajek</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem minima dicta cupiditate temporibus qui officiis omnis, dolores repellendus sit quas, nesciunt provident saepe voluptatibus excepturi corporis itaque non? Numquam quisquam voluptate neque architecto, eligendi nemo!.</p>
                <Link to='/home/details'> <Button variant="primary" type="submit">
                Book Now...
                </Button></Link>
                </div>
        </div>
         <div className="card">
            <div className="imgBox">
                <img src={Sreemongol} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Lets Go Sreemongol</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus natus nam tenetur dolores labore dolore nihil, est dolorem qui et facilis, velit impedit voluptatem iusto illo quam in totam.</p>
              <Link to='/home/details'> <Button variant="primary" type="submit">
              Book Now...
              </Button></Link>
              </div>
        </div>
         <div className="card">
            <div className="imgBox">
                <img src={sundorbon} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Green Forest Sundorban</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, illo ex nostrum sequi dolore? Eaque libero illum nam mollitia, tenetur blanditiis atque! Eos exercitationem velit cum, dicta illo repellendus quam ratione at. Ullam, impedit.</p>
              <Link to='/home/details'> <Button variant="primary" type="submit">
              Book Now...
              </Button></Link>
              </div>
        </div>
         <div className="card">
            <div className="imgBox">
                <img src={cox} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Lets Swimming In Cox</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, deserunt autem. Veritatis quam odit obcaecati! Labore animi praesentium nobis nulla accusantium delectus quasi iusto officia fugiat, ea eligendi tenetur. Est totam vitae soluta rem vel!</p>
                <Link to='/home/details'> <Button variant="primary" type="submit">
                Book Now...
                </Button></Link>
                </div>
        </div>
         <div className="card">
            <div className="imgBox">
                <img src={himchori} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Just Himchori</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti assumenda dignissimos fugit magni. Nisi veritatis, eos aut officia, nesciunt corporis exercitationem iure suscipit distinctio quidem et totam aliquam ullam. Quisquam voluptas fugit assumenda voluptate facere!</p>
               <Link to='/home/details'> <Button variant="primary" type="submit">
               Book Now...
               </Button></Link>
               </div>
        </div>
         <div className="card">
            <div className="imgBox">
                <img src={captai} alt="" height="400px" width="300px"/>
            </div>
            <div className="details">
                <h2>Its Captai bridge</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum sed repellendus magni a in dolorum voluptas? Mollitia, aspernatur sit ullam modi deleniti non, eligendi fuga laborum pariatur ex magni nesciunt rem, deserunt autem rerum.</p>
               <Link to='/home/details'> <Button variant="primary" type="submit">
               Book Now...
               </Button></Link>
               </div>
        </div>
           
     </div>
    );
};

export default Home;