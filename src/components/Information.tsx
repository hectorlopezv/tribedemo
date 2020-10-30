import React from 'react';
import Tribe_image from '../assets/pictures/Tribe_image.png';
import Tribe_logo from '../assets/pictures/Tribe_logo.png'

import { SiTensorflow, SiPython, SiJavascript } from "react-icons/si";
import { ImLab } from "react-icons/im";


export interface InformationProps {
    
}
 
const Information: React.FunctionComponent<InformationProps> = () => {
    return ( 

        <div className="container my-4">

        <img className="tribe_logo img-fluid rounded mx-auto d-block" src={Tribe_logo} alt= "lloralo"></img>
        <p className="p-tribe">
            Tribe as company has the Mission of making videoConferences 
            more humane and fun for the consumers. Kayman Labs as a organization was assigned
            with the task of Providing a library for the tribe team for the effects 
            shown above.
        </p>
        <div className="d-flex flex-row justify-content-center align-items-center">
            <a className=" ts d-block p-2  iconcito" href={'https://www.tensorflow.org/'} target="blank"><SiTensorflow/></a>
            <a className="py d-block p-2  iconcito " href={'https://www.python.org/'} target="blank"><SiPython/></a>
            <a className="js d-block p-2  iconcito" href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} target="blank"><SiJavascript/></a>
            <a className="lab d-block p-2  iconcito" href={'https://github.com/tensorflow/models/tree/master/research/deeplab'} target="blank"><ImLab/></a>
        </div>
        <img className="tribe_img rounded mx-auto d-block" src={Tribe_image} alt= "lloralo" ></img>
    </div>
     );
}
 
export default Information;