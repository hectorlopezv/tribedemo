import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export interface CardProps {
    pondo: string;
    pfondo: string;
    job: string;
    linkeid: string;
    twitter: string
    git: string;
}
 
const Card: React.FunctionComponent<CardProps> = (props) => {

    const { pondo, pfondo, job, linkeid, twitter, git} = props;
    return (  


        <div className=" container p-2 cardsita">
        <img className="card-img-top img-fluid fotito2" src={pfondo} alt="Cover page"></img>
        <div className="text-center">
            <img src={pondo} alt="Miniature Jhonathan" className="img-fluid  rounded-circle fotito" ></img>
        </div>
        <div className="card-block">
            <h4 className="card-title text-center">{job}</h4>
        </div>
        <div className="card-footer text-center p-0 d-flex flex-row justify-content-center align-items-center">
            <a className="linkeid d-block p-2  iconcito ml-auto" href={linkeid} target="blank"><FaLinkedin/></a>
            <a className="git d-block p-2  iconcito " href={git} target="blank"><VscGithub/></a>
            <a className="twitter d-block p-2  iconcito mr-auto" href={twitter} target="blank"><AiFillTwitterCircle/></a>
        </div>
    </div>
    );
}
 
export default Card;