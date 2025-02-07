// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash maroon color
        flashMaroonColor(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the new cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash maroon color and then execute a callback function
function flashMaroonColor(callback) {
    var interval = setInterval(function() {
        document.body.style.backgroundColor = '#800000'; // Maroon color
    }, 200); // Change to maroon every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash maroon color for 2 seconds
}

// Function to display the first image (red flower)
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = '/mnt/data/picmix.com_2133564.gif'; // New red flower image
    catImage.alt = 'Red Flower';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the second image (black cat)
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = '/mnt/data/cat.gif'; // New black cat image
    catHeartImage.alt = 'Black Cat';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide the options
    };
}

// Display the first image initially
displayCat();
Changes Made:
Replaced Rainbow Colors with Maroon Flash:

The function flashRainbowColors is now flashMaroonColor.
It changes the background color to maroon (#800000) and holds it for 2 seconds.
Image Updates:

The first image (picmix.com_2133564.gif) displays as the red flower.
The second image (cat.gif) displays as the black cat.
Let me know if you need any further adjustments! 😊







You said:
remove the comment
ChatGPT said:
Here's your updated code without the comments:

javascript
Copy
Edit
// script.js

function selectOption(option) {
    if (option === 'yes') {
        flashMaroonColor(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashMaroonColor(callback) {
    var interval = setInterval(function() {
        document.body.style.backgroundColor = '#800000';
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = '/mnt/data/picmix.com_2133564.gif';
    catImage.alt = 'Red Flower';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = '/mnt/data/cat.gif';
    catHeartImage.alt = 'Black Cat';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();
