import React, { Component } from 'react'
import banner from '../Assets/images/Banner.jpg';
export default class Home extends Component {
  render() {
    return (
      <div >
      <img className=" banner" alt="BANNER"  src={banner}/>

<p className="text-white " style={{
    marginTop:'-25%',
    fontSize: '40px',
    lineHeight: 1.04167,
    fontWeight: 500,
    textAlign:"center",
    letterSpacing: '0.006em'}}>Shop for your favorite Apple&nbsp;products.</p>

</div >
    )
  }
}
