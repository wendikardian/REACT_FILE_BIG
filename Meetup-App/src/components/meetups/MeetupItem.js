import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-content';

function MeetupItem (props){    

    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler (){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        }else{
            favoriteCtx.addFavorite({
                id : props.id,
                title : props.title,
                image : props.image,
                address : props.address,
                description : props.description
            });
        }
    }

    return (
        <li key= {props.id} className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3> {props.title} </h3>
                    <address>
                        {props.address}
                    </address>
                    <p>
                        {props.descripsion}
                    </p>
                </div>
                <div className={classes.actions}>
                    <button  onClick={toggleFavoriteStatusHandler}>
                        { itemIsFavorite ? 'Remove From Favorite' : ' Add To Favorite' }
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;