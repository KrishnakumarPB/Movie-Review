import React,{Component} from "react";
import "./style.css";
import MovieContainer from "./MovieContainer"
import Header from "./Header"
import MovieData from "./MovieData"
const imgpath="https://image.tmdb.org/t/p/w1280/"
const allmovies=[];
let Movies=[]
class App extends Component{
  constructor(props){
  super(props)
  this.state={
    statemovies:[]
  }
}
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
    .then(response =>response.json())
    .then(response => {

      for (let i=0;i<=response.results.length-1;i++)
      {
        allmovies.push(response.results[i]);
      }
      this.setState({
        statemovies:allmovies
      })
    })
  }
render() {
  return(
    <div >
    <Header/>
    <div className="container-body">
    {this.state.statemovies.map((movie)=>(<MovieContainer title={movie.original_title} posterurl={imgpath+movie.poster_path} description={movie.overview} year={movie.release_date}/>))}
    </div>
  </div>
  )
}
}
export default App;
