import React, { Component } from 'react';
class Square extends Component {
    


    render() { 
       
    
        return ( 


            <button onClick={()=>this.props.handleClick(this.props.square)}  className=" col-4" style={{minHeight:100,color:'blue'}}>
              <h1>

   
              
                {this.props.square.value}
￼
￼
￼
￼
￼


              </h1>  

            </button>
        
        




         );
    }
}
 
export default Square;