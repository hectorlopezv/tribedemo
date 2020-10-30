import React from 'react';



export interface ButtonJoinProps {
    
    blur_state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    grayscale_state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    blurBodyPart: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    vbackground: [boolean, React.Dispatch<React.SetStateAction<boolean>>]

}
 
const ButtonJoin: React.FunctionComponent<ButtonJoinProps> = (props) => {
    const testing = () => {
        blur_set(!blur);
    }
    const testing_2 = () => {
        gray_set(!gray);
    }

    const testing_3 = () => {
        setblurBodyPart(!blurbody);
    }


    const testing_4 = () => {
        sertvirtual(!virtual);
    }


         /*props*/
         const {blur_state} = props;
         const [blur, blur_set] = blur_state;
         
         const {grayscale_state} = props;
         const [gray, gray_set] = grayscale_state;
     
         const {blurBodyPart} = props;
         const [blurbody, setblurBodyPart] = blurBodyPart;
     
     
         const {vbackground} = props;
         const [virtual, sertvirtual] = vbackground;
    return (

        <div className="d-flex justify-content-center">
        
        <button

            onClick={() => {testing()}} id="btnBlur" type="button" className="btn mx-2 buttonjoin">Blur</button>
        <button
            onClick={() => {testing_2()}}
            id="btnVirtualBackground" type="button" className="btn mx-2 buttonjoin">Grey</button>

        <button
                    onClick={() => {testing_3()}}
                    id="btnVirtualBackground" type="button" className="btn mx-2 buttonjoin">BlurBody</button>

        <button
                    onClick={() => {testing_4()}}
                    id="btnVirtualBackground" type="button" className="btn mx-2 buttonjoin">Virtual</button>
    </div>

      );
}
 
export default ButtonJoin;


