document.addEventListener('DOMContentLoaded', function() {
    const characterForm = document.getElementById('characterForm');
    const responseDiv = document.getElementById('response');

    characterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the input value
        const charactersInput = document.getElementById('characters');
        const characters = {"equation": charactersInput.value};

        // Define the API endpoint
        const url = 'https://356pw8h9nf.execute-api.us-east-1.amazonaws.com/Prod'; // Replace with your actual API endpoint

        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Configure the POST request (Post requst, url with CORS enabled, Synchronous)
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        // Handle the response from the server
        // Waits for request to be finished and response is ready
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                responseDiv.textContent = `Answer: ${response.body}`;
            } else {
                console.error('Request failed with status:', xhr.status);
                responseDiv.textContent = 'An error occurred while sending the request: ' + xhr.status;
            }
        };

        // Handle network errors
        xhr.onerror = function() {
            console.error('Network error occurred');
            responseDiv.textContent = 'A network error has occurred.';
        };

        // Send the POST request with the JSON data
        xhr.send(JSON.stringify(characters));
    });
});

