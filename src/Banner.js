
import React, {useState, useEffect} from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() =>{
       async function fetchData() {
           const request = await axios.get(requests.fetchNetflixOriginals)

       setMovie(                 //it will act as console.log
           request.data.results[       
             Math.floor(Math.random() * (request.data.results.length -1)) 
             /* 
             indexed to last element in the array 
             ex: let arr = [1,2,3]
             arr.length = 3
             arr[2] == [arr.length-1]
              */
           ]
        );
        return requests;
        }
        fetchData();
    }, []);
    
    console.log(movie);
     // when more words in description it will show dots...
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
              backgroundPosition: "center center",
             
        }}

        >  
           <div className="banner__contents"> 
             
             <h1 className="banner-title">
                 {movie?.title || movie?.name || movie?.original_name}
             </h1>
             <div className="banner__buttons">         
                 <button className="banner__button">Play</button>   
                 <button className="banner__button">My List</button>
             </div>  
              <h1 className="banner__description"> git 
              {truncate(movie?.overview, 150)}
              </h1>     
           </div>
            
            <div className="banner--fadeBottom"></div>
        </header>   //div.banner__buttons>button.banner__buttons*2
    );
}

export default Banner;
