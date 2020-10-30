import React, { useState } from 'react';

import JoinSpace from './JoinSpace'
import ButtonJoin from './ButtonJoin'
import NameTribe from './NameTribe'
import Video from './Video'




export interface ContainerProps {
    
}
 
const Container: React.FunctionComponent<ContainerProps> = () => {

    const [blur, setblur] = useState(false);
    const [grayscale, setgrayscale] = useState(false);
    const [blurBodyPart,setblurBodyPart ] = useState(false);
    const [vbackground, setvbackground] = useState(false);

    return (  
        <div className="container">
    <div className="col">
        <JoinSpace />
        <NameTribe />
        <Video
            blur={blur}
            grayscale={grayscale}
            blurBodyPart={blurBodyPart}
            vbackground={vbackground}
            fblur={setblur}
            fgrayscale={setgrayscale}
            fblurBodyPart={setblurBodyPart}
            fvbackground={setvbackground}
        />
        <ButtonJoin 
            blur_state={[blur, setblur]}
            grayscale_state = {[grayscale, setgrayscale]}
            blurBodyPart = {[blurBodyPart, setblurBodyPart]}
            vbackground={[vbackground, setvbackground]}
        />
    </div>
</div>
        


    );
}
 
export default Container;


