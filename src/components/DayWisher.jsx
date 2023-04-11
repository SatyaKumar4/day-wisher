import '../Styles/DayWisher.css';


const DayWisher = () => {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;

    if (hours > 5 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours > 12 && hours <= 15) {
        timeOfDay = "afternoon"
    } else if (hours > 15 && hours <= 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    let secondWish;

    if (timeOfDay === "morning") {
        secondWish = "have a nice day!!!"
    } else if (timeOfDay === "afternoon") {
        secondWish = "how is your day going?"
    } else if (timeOfDay === "evening") {
        secondWish = "had tea yet ?"
    } else {
        secondWish = "sweet dreams"
    }

    return (
        <div>
            <div className="first-div">
                <h1>Good {timeOfDay}</h1>
            </div>
            <div className = "second-div">
                <h2>{secondWish}</h2>
            </div>
        </div>
    )
}

export default DayWisher