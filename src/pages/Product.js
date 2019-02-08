import React, { Component } from 'react'
import {Card , CardImg, CardText,CardBody,CardTitle} from 'reactstrap';
export default class Product extends Component {
  render() {
    let {Title , Detail, Images} = this.props;
    return (
      <div >
         <Card  style={{ backgroundColor:'#e3e3e3', height:'30%',width:'100%'}}>
        <CardImg style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}   src={Images} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{paddingTop:'20%'}}>{Title}</CardTitle>
          <CardText></CardText>
          <CardText>
            <medium className="text-muted">
            {Detail}
            </medium>
          </CardText>
        </CardBody>
      </Card>
      
   
      </div>
    )
  }
}
