import React from 'react'
import Card from './Card';


import Cara_Hector from '../assets/pictures/Cara_Hector.jpeg'
import Fondo_Hector from '../assets/pictures/Fondo_Hector.jpeg'
import Cara_Jhonathan from '../assets/pictures/Cara_Jhonathan.jpg'
import Fondo_Jhonathan from '../assets/pictures/Fondo_Jhonathan.png'
import Cara_David from '../assets/pictures/Cara_David.jpeg'
import Fondo_David from '../assets/pictures/Fondo_David.jpeg'
import Fondo_Hugo from '../assets/pictures/Fondo_Hugo.jpeg'
import Cara_Hugo from '../assets/pictures/Cara_Hugo.jpeg'


export interface CardsProps {
    
}
 
const Cards: React.FunctionComponent<CardsProps> = () => {
    return (

        <div  className="container  d-flex flex-row" >
            <Card
                pondo= {Cara_Jhonathan}
                pfondo = {Fondo_Jhonathan}
                job={'FrontEnd'}
                linkeid={"https://www.linkedin.com/in/jhonathan-alejandro-2021331a2"}
                git={"https://github.com/JhonathanAlejandro01"}
                twitter={"https://twitter.com/Alejandro_Angar"}
            />


            <Card
                pondo= {Cara_Hector}
                pfondo = {Fondo_Hector}
                job={'Machine Learning'}
                linkeid={"https://www.linkedin.com/in/hector-lopez-258097137/"}
                git={"https://github.com/hectorlopezv"}
                twitter={"https://twitter.com/CurlyGalactic"}

            />


        <Card
                pondo= {Cara_David}
                pfondo = {Fondo_David}
                job={'QA engineer'}
                linkeid={"https://www.linkedin.com/in/david-alfredo-de-la-hoz-fernandez-570981162/"}
                git={"https://github.com/daviddlhz"}
                twitter={"https://twitter.com/DavidDlhz"}

            />

        <Card
                pondo= {Cara_Hugo}
                pfondo = {Fondo_Hugo}
                job={'FrontEnd'}
                linkeid={"https://www.linkedin.com/in/hugo-santiago-330b30145"}
                git={"https://github.com/hfsantiago"}
                twitter={"https://twitter.com/hsant1ago"}

            />
        </div>
      );
}
 
export default Cards;