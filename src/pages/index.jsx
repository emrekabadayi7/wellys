import React, { useEffect, useState } from "react";
import axios from "axios";
import "../video.css";
import Video from "../Video";

export default function Index() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/daily")
      .then((response) => {
        const fetchedData = response.data;
        setFoodData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
      });
  }, []);

  return (
    <div className="">
      <div className="tracking-tighter mx-auto w-full h-4/6 gap-5 p-5 absolute mt-20 items-center content-center place-items-center place-content-center grid">
        <h1 className="2xl:text-6xl text-white z-10 font-bold 2xl:font-medium text-center tracking-tighter">
          Welcome to Welly's!
        </h1>
        <button className="2xl:text-xl relative bg-amber-200 mx-auto rounded-full z-10 px-5 font-bold 2xl:font-medium text-center tracking-tighter hover:bg-amber-400 active:bg-amber-500 duration-200">
          Order now
        </button>
      </div>

      <div className="overflow-x-hidden">
        <Video />
      </div>
      <h1 className="absolute mx-auto translate-y-10 text-6xl tracking-tighter font-sans w-full text-center">
        Today's menu
      </h1>
      <div className="bg-gradient-to-b 2xl:grid 2xl:grid-cols-2 gap-2 p-20 from-amber-200 to-amber-100">
        {foodData.length > 0 &&
          foodData[0].map((item, index) => (
            <div
              onClick={() =>
                window.open(
                  `https://wa.me/13453281568?text=Can%20I%20have%20${item.Message}%20please?`
                )
              }
              className="hover:bg-amber-100 duration-200 cursor-pointer mt-10 p-12 2xl:w-96 bg-white rounded-full shadow-2xl place-items-center mx-auto text-center place-self-center justify-items-center gap-10"
              key={index}
            >
              <img className="rounded-full" src={item.Img} alt="foodimage" />
              <p className="grid pb-5">
                Title:{" "}
                <b className="text-red-500 font-bold font-sans">
                  {item.Message}
                </b>
              </p>
              <div>
                <img className="w-40 mx-auto" src={item.url} />
              </div>
              <div>
                <p>Food Type: {item.Title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
