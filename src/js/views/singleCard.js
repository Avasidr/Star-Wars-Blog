import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

import "../../styles/singleCard.css";

const SingleCard = () => {
    const params = useParams();
    const [ data, setData ] = useState({});
    const [ description, setDescription ] = useState({});

    let type = '';

    if(params.type === 'characters') {
        type = 'people'
    } else {
        type = params.type
    }


    useEffect( () => {
        fetch(`https://www.swapi.tech/api/${type}/${params.uid}`)
        .then(response => response.json())
        .then(response => {
            setData(response.result.properties);
            setDescription(response.result);
        });
    }, [])

    console.log('data', data)

  return (
    <div className="card mb-3 container singleCard" style={{"maxWidth": "800px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img 
                src={(params.type === 'planets' && params.uid === '1') 
                ?
                'https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg'
                :
                `https://starwars-visualguide.com/assets/img/${params.type}/${params.uid}.jpg`
                }
                className="card-img-top" 
                alt="..." />
            </div>
            <div className="col-md-8">
                <div className="singleCard-body">
                    <h5 className="card-title title">{data.name}</h5>
                    <p className="card-text description">
                        {description.description}
                    </p>
                </div>
                <div className='singleCard-description'>
                    <p className="card-text">Height: {data.height}</p>
                    <p className="card-text">Mass: {data.mass}</p>
                    <p className="card-text">Hair Color: {data.hair_color}</p>
                    <p className="card-text">Skin Color: {data.skin_color}</p>
                    <p className="card-text">Eye Color: {data.eye_color}</p>
                    <p className="card-text">Birth Year: {data.birth_year}</p>
                    <p className="card-text">Gender: {data.gender}</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default SingleCard
