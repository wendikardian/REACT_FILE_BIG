import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    
    const history = useHistory();

    function AddMeetupHandler(meetupData){
        fetch('https://react-getting-stated-e4b6e-default-rtdb.firebaseio.com/meetups.json', 
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type' : 'application/JSON'
                }
            }
        ).then(() => {
            history.replace('/');
        })

    }
    
    return (
        <div>
            <h1> Add New Meet Up</h1>
            <NewMeetupForm onAddMeetup = {AddMeetupHandler} />
        </div>
    );
}

export default NewMeetupPage