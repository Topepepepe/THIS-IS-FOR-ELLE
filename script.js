// script.js

function selectOption(option) {
    if (option === 'yes') {
        displayCatHeart(); // Display the cat-heart.gif
        document.getElementById('question').style.display = 'none'; // Hide the question
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCarnation() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content
    var carnationImage = new Image(); // Changed variable name
    carnationImage.src = '/mnt/data/picmix.com_2133564.gif'; // Path to the uploaded GIF
    carnationImage.alt = 'Carnation';
    carnationImage.onload = function() {
        imageContainer.appendChild(carnationImage);
        document.getElementById('options').style.display = 'none';
    };
    carnationImage.onerror = function() {
        console.error('Error loading the GIF. Please check the file path.');
    };
}

// Set the background color to maroon and display the cat.gif initially
document.body.style.backgroundColor = '#800000'; // Maroon color
displayCat();
