import React from "react";

function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <h2>{props.title}</h2>
            <img src={props.objectImg} alt={props.title} />
            <p>Painting by {props.artist}</p>
        </div>
    )
}

export default Gallery

