import React,{Component} from 'react';
import './style.css';
let posterurl="";
let title="";
let description="";
let image="";
function handleHover(){
     image=document.querySelector(".container .card .image-container >img")
     image.style["height"]="200px";
     image.style["width"]="160px";
     console.log(image)
}
function handleOut(){
  image=document.querySelector(".container .card .image-container >img")
     image.style["height"]="400px";
     image.style["width"]="360px";
     console.log(image)
}
function MovieContainer (props) {
  return (
    <div>
      <div className="container" data-toggle="modal" data-target="#myModal" onmouseover="handleHover()"
      onmouseout="handleOut()">
        <div className="card">
          <div className="image-container">
            <img
              src={props.posterurl}
              alt=""
              
            />
          </div>
          <div className="basic-info">
            <div className="title" >
              <h1>{props.title}</h1>
            </div>
            <div className="year">
              <h1>{props.year}</h1>
            </div>
          </div>
          
          <div className="description">
            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div>
      </div>
    
 
    
  );
}

export default MovieContainer;
