function displayNotification() {
    const mood = document.getElementById("moodSelect").value;
    const notification = document.getElementById("notification");

    let message;
    switch (mood) {
        case "happy":
            message = "That's awesome! Keep smiling!";
            break;
        case "sad":
            message = "It's okay to feel sad. Remember, this too shall pass.";
            break;
        case "stressed":
            message = "Take a deep breath. You got this!";
            break;
        case "excited":
            message = "Wow! Keep up that energy!";
            break;
        default:
            message = "";
    }

    notification.textContent = message;
}