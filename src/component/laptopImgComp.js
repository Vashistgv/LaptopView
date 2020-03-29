import React from 'react';
import './laptopview.css'
class LaptopImgComp extends React.Component {
    render(){
        const {filteredLaptop} = this.props
        return(
            <div className='image-view'>
                <img 
                className='laptop-img'
                src = { filteredLaptop ?  
                    'https://rukminim1.flixcart.com/image/612/612/jzhb24w0/computer/d/x/y/hp-na-original-imafjhu7gtgxpcn7.jpeg?q=70'
                    : filteredLaptop[0].productImages 
                
                }
                />
            </div>
       
        )
    }

}

export default LaptopImgComp