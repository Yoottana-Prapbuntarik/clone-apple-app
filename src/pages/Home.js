import React, { Component } from 'react'
import banner from '../Assets/images/Banner.jpg';
import Product from './Product';
import iPhoneXr from '../Assets/images/iphone-xr-segment.png';
import macbook1 from '../Assets/images/macbook1.png';
import macbook2 from '../Assets/images/macbook2.png';
import macbook3 from '../Assets/images/macbook3.png';
import macbook4 from '../Assets/images/macbook4.png';
import macbook5 from '../Assets/images/macbook5.png';




export default class Home extends Component {
  render() {
    return (
      <div >
      <img className=" banner" alt="BANNER"  src={banner}/>

    <p className="text-white paragraph" style={{
    lineHeight: 1.04167,
    fontWeight: 500,
    textAlign:"center",
    letterSpacing: '0.006em'}}>Shop for your favorite Apple&nbsp;products.
    </p>
    <a className="AppleTH"href="https://www.apple.com/th/" >ไปที่เว็บไซต์ภาษาไทย &rang;	</a>
    
 

    <div className="container">
    
   <div className="row">

   {/* <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="iPhone X&reg;" Detail="From ฿29,900" Images={iPhoneXr}/>
   </div>   */}
   
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook" Detail="From ฿47,900" Images={macbook1}/>
   </div>  
  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook Air" Detail="From ฿35,900" Images={macbook2}/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook Pro" Detail="From ฿47,900" Images={macbook3}/>
   </div>
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="iMac" Detail="From ฿40,900" Images={macbook4}/>
   </div> 
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="iMac Pro" Detail="From ฿172,900" Images={macbook5}/>
   </div>    
</div>
   
   </div>



</div >
    )
  }
}
