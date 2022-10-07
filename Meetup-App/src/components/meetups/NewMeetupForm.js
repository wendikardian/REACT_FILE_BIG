import { useRef } from 'react';
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm(props){
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };

        props.onAddMeetup(meetupData);

}

    return (
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title"> Title : </label>
                    <input type="text" placeholder="Meetup Title" required  id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image"> Image : </label>
                    <input type="url" placeholder="Using URL" required  id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address"> address : </label>
                    <input type="text" placeholder="Meetup Address" required  id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description"> description : </label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;