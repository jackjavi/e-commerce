import React, { useEffect } from "react";
import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Sign from './Sign'
import { useState } from "react";
import Product from "../../components/product/Product";
import Topdeals from "../../components/topdeals/Topdeals";
import ManIcon from "@mui/icons-material/Man";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import WomanIcon from "@mui/icons-material/Woman";
import DevicesIcon from "@mui/icons-material/Devices";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
// import Mens from "./Mens";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval="3000"
        emulateTouch={true}
      >
        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731916889/d1m4wxit75kpabnswwi3.webp" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731917484/wuhfjxrpkoer1hbnee7i.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731917641/r1gj5a4atkbdrzcphsx1.png" />
          <p className="legend">Legend 3</p>
        </div>

        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731916778/iykup2zvu6eoeq03opws.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731917378/jcpfvtfn91ipzyhyhbrd.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://res.cloudinary.com/popit/image/upload/v1731917737/e99ay47bltwnaa6j2hop.avif" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <br />
      <br />
      <br />

      <div className="collection">
        <div className="Mens-jacket col" onClick={() => navigate("/mens")}>
          <p>Mens</p>
        </div>
        <div className="Womens-saree col" onClick={() => navigate("/womens")}>
          <p>Womens</p>
        </div>
        <div
          className="Mens-shoes col"
          onClick={() => navigate("/electronics")}
        >
          <p>Electronics</p>
        </div>
      </div>

      <Topdeals category="womens-saaree" title="womens-saaree" />
      <Topdeals category="tops" title="Tops" />
      <Topdeals category="smart-tv" title="smart-tv" />
      <Topdeals category="laptops" title="laptops" />
      <Topdeals category="smartphones" title="smartphones" />
      <Topdeals category="mens-watches" title="Mens Watches" />

      <div className="cole"> </div>
    </>
  );
}
