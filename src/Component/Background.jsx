import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'
import "../App.css";
export const Background = (prop) => {
    const {ref , playState , getAnimation} = useWebAnimations({
        keyframes: {
            transform: "translateX(-50%)" ,
            transform: "translateX(100%)" 
        },
        playbackRate: 1 , 
        animationOptions:{
            duration: 8000,
            iterations: Infinity,
            direction: "reverse"
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
        <>
            <div className="container" >
            <div className="scenery" id="background1" >
                    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"  alt=" "/>
                    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"  alt=" "/>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt="" />
                    
            </div>
            <div className="scenery" id="background2" ref={ref} >
                    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" alt=" "/>

                    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"  alt=" "/>
                    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"  alt=" "/>
            </div>
            </div>
        </>
    )
}

