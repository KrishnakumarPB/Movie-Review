import React,{Component} from "react"
const allmovies=[]
// class Fetch extends Component(){
  // constructor(){
  //   super()
  //   this.state={
  //     none:"none"
  //   }
  // }
// componentWillMount(){
fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
.then(response =>response.json())
.then(response => {
  for (let i=0;i<=response.results.length-1;i++)
  {
    allmovies.push(response.results[i]);
  }
  console.log({allmovies});
})
// }
// render()
// {
//   return(
//     <div>
//       N
//     </div>
//   )
// }
// }
export default allmovies
