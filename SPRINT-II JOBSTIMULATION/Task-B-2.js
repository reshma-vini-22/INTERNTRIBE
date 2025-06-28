
// This function updates the digital clock every second using setInterval.
// It fetches the current time using the Date object, formats it to HH:MM:SS with leading zeros,
// and updates both the clock and a greeting message on the page.

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM/PM and 12-hour format
    const isPM = hours >= 12;
    const meridian = isPM ? 'PM' : 'AM';
    const greeting = document.getElementById('greeting');

    // Set greeting based on time
    if (hours >= 6 && hours < 12) {
        greeting.textContent = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = 'Good Afternoon';
    } else if (hours >= 18 && hours < 21) {
        greeting.textContent = 'Good Evening';
    } else {
        greeting.textContent = 'Good Night';
    }

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString =`${hours}:${minutes}:${seconds} ${meridian}`;

    document.getElementById('clock').textContent = timeString;
}

// Run immediately and every second
updateClock();
setInterval(updateClock, 1000);