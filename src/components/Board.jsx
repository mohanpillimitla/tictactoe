import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {
    state = {
        
        squares:[

                {id:1,value:''},
                {id:2,value:''},
                {id:3,value:''},
                {id:4,value:''},
                {id:5,value:''},
                {id:6,value:''},
                {id:7,value:''},
                {id:8,value:''},
                {id:9,value:''}

        ],
        xIsNext:true
     }

    handleClick=(square)=>{

     
        if (square.value!=='')
        {
            alert('alreadyfilled')
            return ;
            
        }
        if (this.calculateWinner(this.state.squares))
        {
            return

        }
        
        
        
        const squares=[...this.state.squares]
        const index=square.id-1
    
        squares[index]={...square}



    
    
        squares[index].value=this.state.xIsNext? 'x' :'o'
    
        this.setState({squares,
            
            xIsNext: !this.state.xIsNext,
        
        
        })
    

    
       
        





    }



    render() { 
        const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


        return ( 

                    <div ClassName='container'>
                  
                      <div className="row" >
                      {this.state.squares.map(square=>

                      <Square key={square.id} 

                      handleClick={this.handleClick}

                      
                      
                      
                      square={square}/>
                        
                        
                        
                        )}
                
                   </div>

                      <div  >{status}</div>

                   </div>



         );
    }


    calculateWinner(squares) {
        
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
            return squares[a].value;
          }
        }
        return null;
      }
}
 
export default Board;