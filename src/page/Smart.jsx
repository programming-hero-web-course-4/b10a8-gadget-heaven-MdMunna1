import React from "react";
import { Helmet } from "react-helmet";

const Smart = () => {
  return (
    <>
    <Helmet>
      <title>SMART GZ</title>
    </Helmet>
      <div>
        <div className="w-full h-32 text-center pt-8">
          <h1 className="font-bold sm:text-4xl">Smart Product Section</h1>

        </div>




        <div className="collapse collapse-arrow text-white bg-[#9538E2]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open Smartphone Galaxy Z Details.
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              <span className="font-semibold">Description: </span> A powerful
              smartphone with a high-resolution display, 5G connectivity, and an
              advanced camera system for capturing stunning photos. .
            </p>
            <p>
              <span className="font-semibold"> Features:</span> 6.5-inch OLED
              display, 128GB storage, 48MP camera, 5G-ready
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow text-white bg-[#9538E2]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open Wireless Earbuds SoundMate Details.
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              <span className="font-semibold">Description: </span> Compact
              wireless earbuds with noise cancellation, long battery life, and
              superior sound quality for music lovers on the go.
            </p>
            <p>
              <span className="font-semibold"> Features:</span> Wireless Earbuds
              SoundMate
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow text-white bg-[#9538E2]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open Smartphone Galaxy Z Details.
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              <span className="font-semibold">Description: </span> A central hub
              to control all your smart home devices with voice commands and
              automation features.
            </p>
            <p>
              <span className="font-semibold"> Features:</span> Voice control,
              connects with Alexa and Google Assistant, home automation
              routines.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow text-white bg-[#9538E2]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open Smartwatch Pulse Pro Details.
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              <span className="font-semibold">Description: </span>A sleek
              smartwatch with health-tracking features, GPS, and multiple
              workout modes to keep you fit and connected.
            </p>
            <p>
              <span className="font-semibold"> Features:</span> Heart rate
              monitor, GPS, sleep tracking, 1.4-inch AMOLED display.
            </p>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Smart;
