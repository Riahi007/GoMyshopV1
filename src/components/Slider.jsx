import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"


function Slider() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st5.depositphotos.com/2760050/71962/i/450/depositphotos_719625148-stock-photo-ceo-formalwear-isolated-grey-background.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.made-in-china.com/2f0j00HiMRnfWGOpqD/Women-Clothes-Cabinet-Shop-Interior-Design-Retail-Store-Garment-Display-Furniture.webp"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1404603483/fr/photo/v%C3%AAtements-dautomne-f%C3%A9minins-sur-cintres-dans-une-chambre-blanche.jpg?s=612x612&w=0&k=20&c=2TyemPfPA9CGUolcYTuyA_v6tr6MEJuKcYPclIcdxqk="
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
