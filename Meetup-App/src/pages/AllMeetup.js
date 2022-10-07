import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetup, setLoadedMeetup ] = useState([]);

    useEffect(() => {
        fetch("https://react-getting-stated-e4b6e-default-rtdb.firebaseio.com/meetups.json").then((response) => {
                return response.json();
            }).then((data) => {
                const meetups = [];
                for (const key in data){
                    const meetup = {
                        id : key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetup(meetups);
            })
    }, []);

    
    if(isLoading){
        return (
            <section>
                <p> Loading .. </p>
            </section>
        );
    }
    return (
        <section>
            <h1> All Meetup Page </h1>
            <MeetupList meetups={loadedMeetup} />
        </section>
    );
}

export default AllMeetupPage;