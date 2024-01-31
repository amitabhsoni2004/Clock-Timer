let timeArray = [12, 55, 45]; // [hours, minutes, seconds]
let timerInterval = setInterval(updateTime, 1000); // Start the timer with an interval of 1000 milliseconds

function updateTime() {
    // Increment seconds
    timeArray[2]++;
  
    if (timeArray[2] >= 60) {
        // Reset seconds to 0 and increment minutes
        timeArray[2] = 0;
        timeArray[1]++;
    }

    if (timeArray[1] >= 60) {
        // Reset minutes to 0 and increment hours
        timeArray[1] = 0;
        timeArray[0]++;
        
        // Reset hours to 1 if it goes beyond 24
        if (timeArray[0] >= 24) {
            timeArray[0] = 0;
        }
    }

    // Update HTML elements
    document.querySelector(".hrs").textContent = timeArray[0].toString().padStart(2, '0');
    document.querySelector(".min").textContent = timeArray[1].toString().padStart(2, '0');
    document.querySelector(".secd").textContent = timeArray[2].toString().padStart(2, '0');
}

let heading = document.querySelector(".head");
let head1 = document.querySelector(".head1");
let head2 = document.querySelector(".head2");

head1.addEventListener("click", () => {
    clearInterval(timerInterval); // Clear the existing interval
    timerInterval = setInterval(updateTime, 0); // Set a new interval

    head1.style.display = "none";
    head2.style.display = "block";
     timeArray = [0, 0, 0];
});
head2.addEventListener("click", () => {
    clearInterval(timerInterval); // Clear the existing interval
    timerInterval = setInterval(updateTime, 1000); // Set a new interval

    head1.style.display = "block";
    head2.style.display = "none";
     timeArray = [12, 55, 45];
});
