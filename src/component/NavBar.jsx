import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./NavBar.css";


const NavBar = () => {
  return (
		<div className="main-container">
			<div className="logo">
				<img className={"FlipKartIcon"} src="assets/logo-white.png" />
				{/* <div className={"ExplorePlusText"}>
					Explore{" "}
					<span style={{ color: "#ffe500", fontWeight: "bold" }}>Plus</span>
					<img
						className={"PlusIcon"}
						src="assets/plusImage.png"
						alt="plusicon"
					/>
				</div> */}
			</div>
			<div className={"FlipkartInfoDetail"}>Become a Seller</div>
			<div className={"FlipkartInfoDetail DetailInfo"}>
				<div>More</div>
				<MdKeyboardArrowDown></MdKeyboardArrowDown>
			</div>
			<div className={"FlipkartInfoDetail DetailInfo"}>
				{" "}
				<span id="CartIcon">
					<FaShoppingCart></FaShoppingCart>
				</span>
				Cart
			</div>
			<div className="input-tag">
				<input type="text" placeholder="Search for products, brands and more" />
				<FaSearch className={"SearchIcon"} />
			</div>
			<button className="LoginBtn">Login</button>
		</div>
	);
};

export default NavBar;
