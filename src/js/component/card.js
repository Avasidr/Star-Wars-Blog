import React, {useContext} from 'react'
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const Card = (props) => {
    const { store, actions } = useContext(Context);


  return (
    <div class="flip-card">
        <div class="flip-card-inner">
            <div className="card flip-card-front" key={props.uid}>
                <img 
                src={(props.type === 'planets' && props.uid === '1') 
                ?
                'https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg'
                :
                `https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`
                }
                className="card-img-top flip-card-img"
                alt="..." />
            </div>
            <div className="card-body flip-card-back">
                <h5 className="card-title name-card">{props.name}</h5>
                <Link to={`/${props.type}/${props.uid}`}>
				          <span className="btn btn-lg button" href="#" role="button">
					          Read More
				          </span>
			          </Link>
                <button 
                className='icon-favorites' 
                onClick={() => {
                    actions.setFavorites(props.name)
                    }
                }
                >
                    <i className="far fa-heart"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Card
