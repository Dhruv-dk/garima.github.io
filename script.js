function moveButton() {
    var noButton = document.getElementById('noButton');
    
    // Calculate a random position within the window dimensions
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    // Set the button's position
    noButton.style.position = 'absolute'; // Ensure the button's position is set
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function yes() {
    var yesParagraph = document.getElementById("yes");
    var goodGirlButton = document.getElementById("goodGirlButton");
    
    // Show the text and link
    yesParagraph.style.display = "block";

    // Show the "Good girl now go ahead" button
    goodGirlButton.style.display = "block";
}

function goodGirl() {
    // Handle what happens when the "Good girl now go ahead" button is clicked
    window.location.href = "puzzle2.html";
}

