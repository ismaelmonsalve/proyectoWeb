// import React from "react";
import { useState , useEffect} from 'react';
import '../Navbar/Navbar.css'
import car_icon from '../Assets/car-auto-logo-vector-graphic-element_1405001.png';
import m123i from '../Assets/bmw.png';
import a45 from '../Assets/A45.png'
import carro from '../Assets/carro.png';
import { SiFerrari } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";
import { SiPorsche } from "react-icons/si";
import panamera from '../Assets/panamera.png';
import modelx from '../Assets/modelx.jpeg';
import model3 from '../Assets/model3.png';
import mixitup from 'mixitup';
import overCar from '../Assets/overcar.png';
import map from '../Assets/map.png';
import { BiSolidStore } from "react-icons/bi";

export const Navbar = ({theme,setTheme}) => {

    useEffect(() => {
        let mixer = mixitup('.featured-content', {
          selectors: {
            target: '.info-card'
          },
          animation: {
            duration: 300
          }
        });

        return () => mixer.destroy();
  }, []);

return (
    

    <>
    <nav className={`nav ${theme === 'dark' ? 'bg-dark txt-white' : 'bg-white'}`}>
        
        <div className='title'>
           <img className='navpic' src={car_icon} alt="" />
            <a href="#" className="brand"> Autopia </a> 
        </div>
          
             
      <ul className="nav-menu">
        <li className="nav-item">
            <a href="" className="nav-link">Home</a>
        </li>
        <li>
        <a href="" className="nav-link">About</a>
        </li>
        <li>
        <a href="" className="nav-link">Account</a>
        </li>
      </ul>
      
      <div className='theme-icon'>
        {
            theme === "dark"?(
            <IoIosSunny 
            onClick={() => {setTheme("light")}}
            className='sun'/>
        ):(
            <IoIosMoon 
            onClick={() => setTheme("dark")}
            className='moon'/>
        )}
        
        </div>

      
    </nav>
        
    <section className='principal' >
            <h2 className='title'>Elige tu automovil de lujo</h2>
            <div className="featured__container container">
                <ul className="filters">
                    <li>
                    <button className="featured_item" data-filter='all'>
                        <span color='white' >All</span>
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.ferrari'>
                        
                        <SiFerrari size="5rem" color='white' />
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.bmw'>
                    
                    <SiBmw size="5rem" color='white'/>
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.mercedes'>
                    
                    <SiMercedes size="5rem" color='white' />
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.tesla'>
                    
                    <SiTesla size="5rem" color='white' />
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.lamborghini'>
                    
                    <SiLamborghini size="5rem" color='white' />
                    </button>
                    </li>
                    <li>
                    <button className="featured_item" data-filter='.porsche'>
                    
                    <SiPorsche size="5rem" color='white' />
                    </button>
                    </li>
                </ul>

                <div className="featured-content">
                    <article className="info-card mix bmw" >
                        <div className="shape shape-smaller"></div>

                        <h1 className="featured-title">BMW</h1>

                        <h3 className="featured-subtitle">m135i</h3>

                        <img src={m123i} alt="" className="featured-pic" />

                        <h3 className="price">$1000000</h3>

                        <button className="button buy">
                        <FaShoppingCart />
                        </button>
                    </article>

                    <article className="info-card mix tesla">
                        <div className="shape shape-smaller"></div>

                        <h1 className="featured-title">Tesla</h1>

                        <h3 className="featured-subtitle">Model X</h3>

                        <img src={modelx} alt="" className="featured-pic" />

                        <h3 className="price">$1000000</h3>

                        <button className="buy">
                        <FaShoppingCart />
                        </button>
                    </article>

                    <article className="info-card mix mercedes">
                        <div className="shape shape-smaller"></div>

                        <h1 className="featured-title">Mercedez</h1>

                        <h3 className="featured-subtitle">A45</h3>

                        <img src={a45} alt="" className="featured-pic" />

                        <h3 className="price">$1000000</h3>

                        <button className="buy">
                        <FaShoppingCart />
                        </button>
                    </article>

                    <article className="info-card mix porsche">
                        <div className="shape shape-smaller"></div>

                        <h1 className="featured-title">Porsche</h1>

                        <h3 className="featured-subtitle">Panamera</h3>

                        <img src={panamera} alt="" className="featured-pic" />

                        <h3 className="price">$1000000</h3>

                        <button className="buy">
                        <FaShoppingCart />
                        </button>
                    </article>

                    <article className="info-card mix tesla">
                        <div className="shape shape-smaller"></div>

                        <h1 className="featured-title">Tesla</h1>

                        <h3 className="featured-subtitle">Modelo 3</h3>

                        <img src={model3} alt="" className="featured-pic" />

                        <h3 className="price">$1000000</h3>

                        <button className="buy">
                        <FaShoppingCart />
                        </button>
                    </article>
                </div>

            </div>
    </section>
        
    <section className="overcar">
    <h2 className='title-oc'>Our stores</h2>
        
        <div className='map'>
            <img src={map} alt=""  />
            <button className='b1'><BiSolidStore /></button>
            <button className='b2'><BiSolidStore /></button>
            <button className='b3'><BiSolidStore /></button>
            <button className='b4'><BiSolidStore /></button>
            <button className='b5'><BiSolidStore /></button>
            <button className='b6'><BiSolidStore /></button>
            </div>
        
    </section>
        
        </>
  )
}
    
