// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Load the content of the default page (index.html)
    loadPage('index.html');

    // Add event listeners to navigation links
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var page = this.getAttribute('href'); // Get the href attribute of the clicked link
            loadPage(page); // Load the content of the selected page
        });
    });
});

// Function to load page content dynamically
function loadPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText; // Set the innerHTML of #content with the loaded content
            } else {
                console.error('Error loading page: ' + page);
            }
        }
    };
    xhr.open('GET', page, true); // Load the page content using GET request
    xhr.send();
}
