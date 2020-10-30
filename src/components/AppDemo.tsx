import React, {Fragment} from 'react';

import Container from './Container';
export interface AppDemoProps {
    
}
 
const AppDemo: React.FunctionComponent<AppDemoProps> = () => {
    return (
        <>
                <div className="App">
            <header className="App-header">
                <p>TRIBE</p>
                <hr></hr>
            </header>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                <div className="col-5 border">
                    <Container />
                </div>
                </div>
                </div>
    </div>
        </>
    );
}
 
export default AppDemo;