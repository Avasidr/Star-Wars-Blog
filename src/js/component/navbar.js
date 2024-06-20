import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/navbar.css"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const deleteFavorite = (item) => {
		actions.deleteFavorites(item)
	}

	return (
		<nav className="navbar navbar-dark mb-3 d-flex justify-content-between">
			<Link to="/">
				<img src="https://toysstore.es/wp-content/uploads/2023/10/STAR-WARS-1.png" 
				alt="Starwars logo"
				className="navbar-brand logo" />
			</Link>
			<div className="dropdown favorites">
  				<button className="btn btn-lg button dropdown-toggle" 
				type="button" 
				id="dropdownMenuButton1" 
				data-bs-toggle="dropdown" 
				aria-expanded="false">
    				Favorites
  				</button>
  				<ul className="dropdown-menu favorites-menu" aria-labelledby="dropdownMenuButton1" style={{display: !store.favorites.length > 0 && 'none'}}>
					{store.favorites.map((favorite, index) => (
						<li className="d-flex justify-content-between align-items-center" key={index}>
							<a className="dropdown-item" href="#">
								{favorite}
							</a>
							<i onClick={() => deleteFavorite(favorite)} 
								className="far fa-trash-alt me-3">
							</i>
						</li>
					))}

  				</ul>
			</div>
		</nav>
	);
};
