import React, { useState } from 'react'
import { Background } from './Component/Background';
import { Foreground } from './Component/Foreground';
import { RedQueen } from './Component/RedQueen';
import { Sky } from './Component/Sky';
import useWebAnimations from '@wellyshen/use-web-animations';


function App() {
    const [playback, setplayback] = useState(1);
    const Updateplayback = () => {
        setplayback(playback + 1);
    }

    return ( <
        div className = "wrapper"
        onClick = { Updateplayback } >
        <
        Sky / >
        <
        Background playback = { playback }
        / > <
        Foreground playback = { playback }
        / > <
        RedQueen playback = { playback }
        />   < /
        div >
    );
}

export default App;