import React from 'react'


export interface NameTribeProps {
    
}
 
const NameTribe: React.FunctionComponent<NameTribeProps> = () => {
    return ( 
        <form>
        <label className="text-left">Your Name</label>
        <input type="text" className="form-control" placeholder="Enter Your Name" />
    </form>


     );
}
 
export default NameTribe;
