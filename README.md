# dbz-character-picker
A simple project using JavaScript / HTML / CSS to build a website to see the information of your favorite DBZ characters. Utilizing objects and returning them to the user through a search feature, as well as having a button that ranomly grabs one of the characters and returns their information. After getting that initial functionality to successfully work, I'll also return an image of the character with their data in an organized fashion. 

11/1/25
Currently working around an issue with using an API call to fetch the character data. When I run it in live server I get a CORS error, but the API fetch is actually returning a 200 OK which validates that the API request is successful but due to security protocol it can't return the data.

To start, I'll run the API GET in Postman and grab all the data from there and put it all into a separate .js file to store all the objects and pull them in a different manner. I'll still utilize the button on the page with the Math.random() to grab a random 'Id' and return it. From there I'll build out another button and add search functionality 
