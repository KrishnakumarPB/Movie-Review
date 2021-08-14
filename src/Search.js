import React,{Component} from 'react'
import "./headerstyle.css"
class Search extends Component{
render(){
  return(
    <div className="searchbar"> 
        <input type="Text" placeholder="Search"/>
    </div>
  )
}
}
export default Search