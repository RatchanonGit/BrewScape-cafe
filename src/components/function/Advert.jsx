import React from 'react';
import image3 from '../../image/image3.png'
import image4 from '../../image/image4.png'


const Advert = () => {
    return (
        <div style={{display : "flex" , justifyContent: "center", margin : "50px 0"}}>
            <img src={image3} alt="advert1" style={{marginRight: "50px"}}/>
            <img src={image4} alt="advert2"/>
        </div>
    );
}

export default Advert;
