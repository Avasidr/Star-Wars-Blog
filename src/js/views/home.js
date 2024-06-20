import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import Card from "../component/card";
import SingleCard from "./singleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	

	return (
		<div className="container-fluid card-group">
			<div className="card-characters">
				{store.characters.map(character => 
					(<Card name={character.name} uid={character.uid} type="characters" />))}
			</div>
			<div className="card-vehicles">
				{store.vehicles.map(vehicle => 
					(<Card name={vehicle.name} uid={vehicle.uid} type="vehicles" />))}
			</div>
			<div className="card-planets">
				{store.planets.map(planet => 
					(<Card name={planet.name} uid={planet.uid} type="planets" />))}
			</div>
		</div>
		
	);
};