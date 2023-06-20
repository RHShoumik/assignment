// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
let newWindow =  (url, width, height) =>{
    let myWindow = window.open(url, "", `width=${width}, height=${height}`);
    return myWindow;
  }

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

newWindow("https://www.example.com", 800, 800);