import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-content';

function MainNavigation(){

    const FavoriteCtx = useContext(FavoritesContext)
    const totalFavorites = FavoriteCtx.totalFavorites;

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetup Apps</div>
            <nav>
                <ul>
                    <li><Link to="/"> All Meetups </Link></li>
                    <li><Link to="/new-meetup"> New Meetup </Link></li>
                    <li><Link to="/favorites"> Favorites Meetup 
                    <span className={classes.badge}>
                        {totalFavorites}
                    </span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation