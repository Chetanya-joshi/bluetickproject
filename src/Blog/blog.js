import React,{useState} from 'react';
import {Product} from './blogs';
import './blog.css'

export default function Blog() {
    const [data , setData] = ([Product]);
  return (
    <div className="mains">
        
        <div className="banner-img">
          <div className="conatiner-fluid Banner" style={{ height: "100%", maxWidth: '100%' }}></div>
        </div>
        <div className="container-fluid bg-white my-5 text-center">
            <h1 className="mb-5"> Explore and enjoy the blogs written by our passionate techies.
</h1>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'start' , textAlign:'left' }}>

          {data && data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="bg-white m-3" style={{ width: "100%" }}>
                      <div className="card mx-5" style={{ width: '23rem', height: "auto", borderRadius: '35px', boxShadow: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)' }}>
                        <img className="card-img-top" src={item.img} alt="Card image cap" style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }} />
                        <div className="card-body">
                          <h5 className="card-title">{item.heading}</h5>
                          <p className="card-text">{item.Description.slice(0, 385)}...</p>
                    <span><a href={item.Link}>Learn More</a></span>

                        </div>
                        
                      </div>
                    </div>
                  </div>
                );
             
            })}
          </div>
        </div>
      </div>
  )
}
