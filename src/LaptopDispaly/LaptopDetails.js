import React from "react";
// import Card from "../component/card";
import LaptopDetailsView from '../component/LaptopDetailsComp';


class LaptopDetails extends React.Component{
    render(){
        return(
            <LaptopDetailsView />
        )
    }
}



// const LaptopDetails = ({onCardClick}) => {
//   return (
//     <div>
//       <Card  
//        title={'title'}
//        imgsrc={'productImages'}
//         price={'price'} 
//         exchangeOffer={'exchangeOffer'}     
//         id ={'id'}
//         onCardClick={onCardClick}
//       />
//     </div>
//   );
// };

export default LaptopDetails ;