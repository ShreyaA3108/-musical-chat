import React, { Component, useState, useEffect } from "react";
import "../../Styles/Main.css";

import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();
const Main = () => {
    return (
        <div className="Main">
          <div className="mainContainer">
              <div className="row login">
                <div id="loginTitle">
                  <p>
                    Login With Your <span>Spotify</span> Account
                  </p>
                  <p>And Enjoy Meeting People Who </p>
                  <p>Have The Same Musical Taste As</p>
                  <p>YOU.</p>
                </div>
    
                  <button>Login With Spotify</button>
              </div>
    
          </div>
        </div>
      );
    };
    
    export default Main;