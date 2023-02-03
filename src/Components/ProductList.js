import React from 'react';
import './ProductList.css';
import img1 from '../image/img1.jpg'

function ProductList(props) {

// this keyword can simply be understood as a reference to a particular component and it only refers inside render() or return() function or some functions provided by React API 
// to use this keyord outside render or return we have to bind this through a constructor() function
// binding can be done like this
// binding is required in class based components function based component don't need binding
// constructor(props){
//   super(props);
//   this.someFunction = this.someFunction.bind(this);
// }

  const handleVotes = () => {
    props.onVote(props.id)
  }
  return (
    <div className='container'>
        <div className="images">
            <img src={props.productImage} alt='my_image' className='image'/>
        </div> 
        <div className="data">
            <p className='heading'> 
              <i className='fas fa-angle-up' style={{fontSize:'25px'}} onClick = {handleVotes} /> &nbsp;&nbsp;
              {props.vote}  <br />
              {props.title} &nbsp; {props.id}
            </p>
            <p className='describe'>
              {props.description} &nbsp; {props.prodKey}
            </p>
            <div className ="subavtr">
              <p className ='submited'>Submitted By: </p>
              <img src= {img1} alt="Avatar_image" className='avatar'/>
            </div>
        </div> 
    </div>
  )
}
export default ProductList;
