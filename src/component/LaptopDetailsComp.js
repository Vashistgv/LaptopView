import React from 'react';
import LaptopImgComp from './laptopImgComp';
import GridViewDetails from './GridViewDetails';
import {Row , Col} from 'antd';
import {connect} from 'react-redux'
import {laptops} from '../component/constants'
import './laptopview.css'



const mapStateToProps = state => {
    return {
      laptopId : state.onItemClick.id ,
      
    }
  }
  




class LaptopDetailsView extends React.Component{


    render(){
        const {laptopId} = this.props
        const filteredLaptop = laptops.filter(item => {
            return item.id === laptopId ;
          })
         
        return(
            <div className='container' >
                <Row gutter={16}>
                    <Col span={8}>
                    <LaptopImgComp filteredLaptop = {filteredLaptop }/>
                    </Col>
                    <Col span={16}>
                    <GridViewDetails filteredLaptop = {filteredLaptop } />
                    </Col>
         
         
          </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps , null)(LaptopDetailsView); 