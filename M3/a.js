
//  fetch("https://api.example.com/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "John", age: 30 }),
// })
//   .then(handleResponse)
//   .catch(error => console.error("Error:", error));

//   function handleResponse(response) {
//     if (response.ok) {
//       response.json().then(data => {
//         console.log("Request was successful.");
//         console.log("Response data:", data);
//       });
//     } else {
//       console.log("Request was unsuccessful.");
//       console.log("Error status:", response.status);
//     }
//   }

const axios = require('axios');

const url = 'https://api.example.com/data';
const data = { name: 'John', age: 30 };

async function handleResponse() {
  try {
    const response = await axios.post(url, data);
    // Handle the response data here
    console.log('Response data:', response.data);
    // Additional logic...
  } catch (error) {
    console.error('Error:', error);
  }
}

handleResponse();