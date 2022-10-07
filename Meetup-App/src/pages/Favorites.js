import { useContext } from 'react';
import FavoritesContext from '../store/favorites-content';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){

    const favoriteCtx = useContext(FavoritesContext)
    const meetupFavorite = favoriteCtx.favorites;

    let content ;
    if(favoriteCtx.totalFavorites === 0){
        content = <p> Please add some new meetup</p>
    }else{
        content = <MeetupList meetups={meetupFavorite} />
    }

    return(
        <section>
            <h1> Favorite Meetup</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;