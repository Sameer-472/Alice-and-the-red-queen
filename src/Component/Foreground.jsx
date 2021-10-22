import React from 'react'
import "../App.css";
import useWebAnimations from '@wellyshen/use-web-animations';
export const Foreground = (prop) => {
    const {ref , playState , getAnimation} = useWebAnimations({
        keyframes: {
            transform: "translateX(-70%)" ,
            transform: "translateX(-280%)" 

        },
        playbackRate: 1 ,
        animationOptions:{
            duration: 10000,
            playbackRate: prop.playback ,
            iterations: Infinity,
            easing: "linear"
        }
    })

    var animation = getAnimation()
try {
    animation.updatePlaybackRate(animation.playbackRate + prop.playback);
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
        <div className="scenery" id="foreground2" ref={ref}>    
            <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"  alt=" "/>
            <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" alt=" "/>
        </div>
        </div>
    )
}
