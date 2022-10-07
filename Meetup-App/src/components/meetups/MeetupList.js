import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props){
    return (
        <ul className={classes.item}>
            {props.meetups.map((meetup) =>{
                return <MeetupItem key={meetup.id} 
                id = {meetup.id}
                image = {meetup.image}
                title  = {meetup.title}
                address = {meetup.address}
                descripsion = {meetup.descripsion}
                meetup = {meetup}
                />
            })}
        </ul>
    );
}

export default MeetupList;