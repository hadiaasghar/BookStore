import React from "react";
import list from "../Compoments/List.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const filterData = list.filter((data) => data.catagery === "free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 container ">
      
        <div>
          <h1 className="text-2xl font-semibold">Free Offered Course</h1>
          <p>If you sign up, you get some books for free.</p>
          </div>
          
          <div className="slider-container my-11 ">
      <Slider {...settings} className="dark:bg-slate-900 top-0 dark:text-white" >


       {filterData.map((item,index)=>{
        return(
            <Card key={item.id} item={item}/>        )
       })}
      </Slider>
    </div>
      </div>
     
    </>
  );
};

export default FreeBook;
