import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <div className='row'>
    <header>
<div className="nav-container">
	<nav>
	<div className="logo">
		<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="75px" height="20px"></img>
	   <p>
	   	Explore
	   	<span className="plus">plus</span>
	   	<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" width="10px" height="10px"></img>
	   </p>
	</div>
	<div className="searchbar">
		<form className='hii'>
			<input type="text" placeholder="search for product brands and more" maxlength="200" ></input>
			<i class="fa fa-search" aria-hidden="true"></i>

		</form>
	</div>
	
		<button class="loginbtn" type="login">Login</button>
		<Link to="Section2">Become a seller</Link>
		<a href="#" class="link">More
		<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
		<a href="#" class="link">
		<i class="fa fa-shopping-cart" id='trues' aria-hidden="true"></i>
			Cart
		</a>
		
	
</nav>
	
</div>
</header>
    </div>
    </>
  )
}
