import React from 'react';

export default function Component3() {
  return (
    <div style={c3Style}>
        <h1 style={textAlign}>Other Interests</h1>
        <p style={textAlign}>I like riding a bicycle. It just propels me every time and provides me the positive energy when it's fine needed.
              </p>
    </div>
  )
}

const c3Style={
    background: 'slateblue',
    color:'white',
    padding:'1.5rem 1.5rem 5rem 1.5rem'
}

const textAlign={
    textAlign:'center',
}