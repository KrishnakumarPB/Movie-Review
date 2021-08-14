import React from 'react'
import "./headerstyle.css"
import Search from "./Search"
function Header(){
  return(
    <div class="header">
      <div className="title">
        <h1>Box Office Corner</h1>
      </div>
      <Search/>
    </div>
  )
}
export default Header