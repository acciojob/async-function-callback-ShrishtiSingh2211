const url = "https://jsonplaceholder.typicode.com/posts/1";
async function fetchData(callback) {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Wait for the promise to resolve and parse the JSON response
    const data = await response.json();

    // Call the callback function with the result
    callback(data.title);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Callback function to display the title
function displayTitle(title) {
  // Find the output div
  const outputDiv = document.getElementById('output');

  // Set the innerText to the fetched title
  outputDiv.innerText = title;
}

// Set up event listener for the button
document.getElementById('btn').addEventListener('click', () => {
  fetchData(displayTitle);
});

//your JS code here. If required.
