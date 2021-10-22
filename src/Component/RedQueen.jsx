import React from "react";
import { useRef , useState  } from "react";
import "../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

export const RedQueen =  (prop) => {
  console.log(prop.playback);
  const {playback} = prop;
  console.log(playback);
  const {ref , playState , getAnimation} =  useWebAnimations({
    keyframes: {
      transform: "translateY(0%)" , 
     transform: "translateY(-100%)"
    } , 
    playbackRate: 1, 
   animationOptions: {
     direction: "reverse" ,
    duration: 600,
    easing: 'steps(7 , end)' ,
    iterations: Infinity ,
  } 
})
var animation = getAnimation()
try {
    animation.updatePlaybackRate(animation.playbackRate + playback);
  // }

  try{
    console.log(animation.playbackRate);
    setInterval(() => {
      if(animation.playbackRate > 1 ){
          animation.playbackRate -= 0.5;
        }
        else{
          animation.playbackRate = 0.9;
        }
      }, 4000);
    }
    finally{
    }
    
  } catch (error) {
  }
 
  return (
    <div>
      <div id="red-queen_and_alice">
        <img ref={ref} 
          id="red-queen_and_alice_sprite" 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
          alt="Alice and the Red Queen running to stay in place."
          />
      </div>
    </div>
  );
};

 
