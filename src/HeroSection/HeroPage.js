import React,{useState} from 'react'
import Image from 'react-bootstrap/Image';
import blue from '../images/bluetick-consultants.png';
import AI from '../images/AI.png';
import './HeroPage.css';
// import {Link} from 'react-router-dom'
export default function HeroPage() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div className="container-fluid p-3">


                {/* This div for our nav bar */}

                <div className="nav_bar d-flex justify-content-between  align-items-center w-100">

                    <div className="left_menu w-25 "><Image src={blue} className="w-50 imagesection" /></div>

                    <div className="main_section w-50">
                        <ul className={`d-flex ${showMenu ? 'show' : ''}`} >

                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>

                        </ul>
                        <div className="menu-icon" onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                            </svg>
                        </div>
                    </div>

                    <div className="right_menu w-25 text-center">
                        <div className="Search w-100">
                            <input type="search" placeholder="Search" className="w-75" />
                        </div>
                    </div>

                </div>


                {/* Next div for the banner of our hero section */}

                <section className="d-flex align-items-center">
                    <div className="left_section px-5">

                        <div className="text mb-5">
                            <span>
                                <span style={{color:'blue' , fontWeight:'500'}}>Transforming Enterprises</span><br />
                                with cutting-edge, scalable, privacy-focused Generative AI Solutions
                            </span>
                        </div>

                        <div className="text2">
                            <span>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
                                significant impact in the Indian and US startup ecosystems.
                            </span>
                        </div>

                        <div className="button mt-4">
                        <button className="btn btn-primary"><a href="https://www.bluetickconsultants.com/generative-ai.html
" target="_blank" style={{textDecoration:'none' , color:'white'}}>To know more about us</a></button>
                    </div>

                    </div>
                    <div className="right_section">
                        <img src={AI} width="100%"/>
                    </div>

                    
                </section>

            </div>
        </>
    )
}
