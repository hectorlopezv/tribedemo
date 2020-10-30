import React from 'react'
import { Link } from 'react-router-dom';



export interface HomeProps {
    grupo: string;
}
 
const Home: React.FunctionComponent<HomeProps> = (props) => {
    const {grupo} = props;
    return ( 

        <div className="container-fluid intro" id="home">
        <div className="row  align-items-center justify-content-around">
            <div className="col-6 justify-content-center">
                <h1 className="titulo display-3">Effect Virtual Background</h1>
                <Link to="/app" className="btn btn-danger shadow ml-5 mt-5 p-3">Lest's Go!</Link>
            </div>
            <div className="col-6">
                <img src={grupo} alt="Group" className="img-thumbnail"></img>
            </div>
        </div>
    </div>
     );
}
 
export default Home;