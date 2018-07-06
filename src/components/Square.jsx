import React from 'react';



const style = ({ size, position, color, image }) => {
  console.log(image);
    const dim = size + 'px';
    return {
        background: image,
        backgroundImage: `url(${image})`,
        width: dim,
        height: dim,
        backgroundColor: color,
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        transition: 'all 0.1s ease'
    };
};


export default (props) => <div style={style(props)}/>
