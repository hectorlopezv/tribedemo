import React from 'react'
import Cards from './Cards';
import Information from './Information';
import { VscGithub } from "react-icons/vsc";


export interface AboutProps {
    
}
 
const About: React.FunctionComponent<AboutProps> = () => {
    return ( 

            <div className="mt-5" id="about">
                <Information />
                <Cards />
                <div className="container">

                    <button type="button" className="btn btn-danger btn-lg btn-block my-4 btnr "><a className="d-block p-2  iconrepo mr-auto" href={"https://github.com/hectorlopezv/tribe_lib_package"} target="blank"><VscGithub/></a></button>

                </div>
            </div>
     );
}
 
export default About;