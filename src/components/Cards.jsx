import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bimg1 from "../imgs/avatar-ali.png";
import bimg2 from "../imgs/avatar-shanai.png";
import bimg3 from "../imgs/avatar-richard.png";

const Cards = () => {
  const array = [
    {
      img: bimg1,
      name: "Anisha Li",
      para: "Manage has supercharged our team's workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.Manage is best!",
    },
    {
      img: bimg2,
      name: "Ali Brave",
      para: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      img: bimg3,
      name: "Richard Watts",
      para: "Manage allows us to provide structure and progress. Manage keeps us organised and focused. I can't stop recommending them to everyone I talk to!",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex-col bg-white ">
      <div className="flex w-full justify-center text-3xl text-black font-bold p-8">
        <p>What they've said</p>
      </div>
      <div className="overflow-hidden p-6">
        <Slider className="sm:hidden " {...settings}>

          {array.map((item, index) => (
            <div
              className="card card-side bg-slate-200 shadow-xl flex-col justify-center items-center p-4"
              key={index}
            >
              <div className="flex w-full justify-center">
                <img className="" src={item.img} alt="people" />
              </div>
              <div className="card-body flex-col justify-center items-center ">
                <h2 className="card-title text-black font-bold">{item.name}</h2>
                <p className="text-black ">{item.para}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="hidden sm:block">
          <div className="flex gap-2 p-4 ">
            {array.map((item, index) => (
              <div
                className="card card-side bg-slate-200 shadow-xl flex-col justify-center items-center p-4"
                key={index}
              >
                <div className="">
                  <img className="" src={item.img} alt="people" />
                </div>
                <div className="card-body flex-col justify-center items-center ">
                  <h2 className="card-title text-black font-bold">{item.name}</h2>
                  <p className="text-black">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center p-10">
        <button className="btn btn-lg rounded-full bg-orange-600 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cards;
