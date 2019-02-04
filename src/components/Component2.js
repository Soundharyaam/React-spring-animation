import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component2 extends Component {

  render() {
    return (
        <Spring 
        from ={{opacity:0, marginTop:-500}} to={{opacity:1, marginTop:0}}
            config={{delay:1000, duration:1000}}>
           { props=> (
               <div style={props}>
                    <div style={c2Style}>
                        <h1 sty>About</h1>
                        <p>I love travel photography and writing the non-fiction, fiction, self-help articles. </p>
                        <button style={btn} onClick={this.props.toggle}>Know More!</button>
                    </div>
               </div>
           ) } 
        </Spring>
    )
  }
}

const c2Style={
    background: 'white',
    color:'black',
    padding:'1.5rem'
}

const btn={
    background:'#333',
    color:'#fff',
    padding:'1rem 2rem',
    border:'none',
    textTransform:'uppercase',
    margin:'15px 0'
   
};

export default Component2;
