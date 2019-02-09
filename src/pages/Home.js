import React, { Component } from 'react'
import banner from '../Assets/images/Banner.jpg';
import Product from './Product';
import iPhoneXr from '../Assets/images/iphone1.png';
import iPhoneXs from '../Assets/images/iphone2.png';
import iPhone8 from '../Assets/images/iphone3.png';
import iPhone7 from '../Assets/images/iphone4.png'

import ipad1 from '../Assets/images/ipad1.png';
import ipad2 from '../Assets/images/ipad2.png';
import ipad3 from '../Assets/images/ipad3.png';
import ipad4 from '../Assets/images/ipad4.png';

import macbook1 from '../Assets/images/macbook1.png';
import macbook2 from '../Assets/images/macbook2.png';
import macbook3 from '../Assets/images/macbook3.png';
import macbook4 from '../Assets/images/macbook4.png';
import macbook5 from '../Assets/images/macbook5.png';
import macbook6 from '../Assets/images/macbook6.png';
import macbook7 from '../Assets/images/macbook7.png';


import ipod from '../Assets/images/ipod.png';
import tv1 from '../Assets/images/tv1.png';
import tv2 from '../Assets/images/tv2.png';
import tv3 from '../Assets/images/tv3.png';

import Footer from '../components/Footer'
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
      <div className="col-12 ProductItem"><h1>Mac</h1></div>
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook" Detail="From ฿47,900" Images={macbook1} linkpage="https://www.google.com"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook Air" Detail="From ฿35,900" Images={macbook2} linkpage="empty"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="MacBook Pro" Detail="From ฿47,900" Images={macbook3} linkpage="empty"/>
   </div>
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="iMac" Detail="From ฿40,900" Images={macbook4} linkpage="empty"/>
   </div> 
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="iMac Pro" Detail="From ฿172,900" Images={macbook5} linkpage="/"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="Mac Pro" Detail="From ฿114,900" Images={macbook6} linkpage="/"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem"  >
   <Product Title="Mac mini" Detail="From ฿27,900" Images={macbook7} linkpage="/"/>
   </div> 


    <div className="col-12 ProductItem"><h1>iPhone</h1></div> 
    <div className="col-12 col-sm-6 col-md-4 ProductItem">
   <Product Title="iPhone XS" Detail="From ฿39,900" Images={iPhoneXs} linkpage="/"/>
   </div>      
    <div className="col-12 col-sm-6 col-md-4 ProductItem">
   <Product Title="iPhone XR" Detail="From ฿29,900" Images={iPhoneXr} linkpage="/"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem">
   <Product Title="iPhone 8" Detail="From ฿23,900" Images={iPhone8} linkpage="/"/>
   </div>  
   <div className="col-12 col-sm-6 col-md-4 ProductItem">
   <Product Title="iPhone 7" Detail="From ฿17,500" Images={iPhone7} linkpage="/"/>
   </div>    

   
<div className="col-12 ProductItem"><h1>iPad</h1></div> 
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="iPad Pro" Detail="From ฿28,900" Images={ipad1} linkpage="/"/>
</div>      
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="iPad Pro 10.5-inch" Detail="From ฿23,900" Images={ipad2} linkpage="/"/>
</div>  
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="iPad" Detail="From ฿11,500" Images={ipad3} linkpage="/"/>
</div>  
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="ipad Mimi 4" Detail="From ฿14,900" Images={ipad4} linkpage="/"/>
</div>    


<div className="col-12 ProductItem"><h1>iPod and Apple TV</h1></div> 
   
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="ipad Mimi 4" Detail="From ฿14,900" Images={ipod} linkpage="/"/>
</div> 
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="ipad Mimi 4" Detail="From ฿14,900" Images={tv1} linkpage="/"/>
</div> 
<div className="col-12 col-sm-6 col-md-4 ProductItem">
<Product Title="ipad Mimi 4" Detail="From ฿14,900" Images={tv2} linkpage="/"/>
</div>
<div className="jumbotron ProductItem w-100">
<img src={tv3} className="img-responsive w-100 " />    
<div  style={{paddingTop:'-40%'}}>
  
  <p className="display-4 text-right d-block">Accessories
</p>
  <p style={{fontSize:'15px'}} className="text-right d-block lead">Carefully selected to help you get the <br/>most from your Apple products.
</p>
  </div> 
</div>

</div>
</div>
<Footer />
</div >


    );
  }
}
