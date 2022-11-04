# Install instructions 
The Food Tracker/Your Pantry app is a full stack appliication using React on the front and Rails on the back-end. This ReadMe serves for the React Front End, the Ruby ReadMe contains more instructions for that section. 
This project was created with [Create React App](https://github.com/facebook/create-react-app).
To install this React portion run 'npm install --prefix client'. Then 'npm start --prefix client'.

## Code Credits
While the vast majority of this app was written by Joe Spizzandre, I did utilize a few additional resources. First and most powerfully was [React Bootstrap]("https://react-bootstrap.github.io/") which took over styling for the majority of the app. For the alerts I found [Sweet Alert]("https://github.com/t4t5/sweetalert"), which was easy to use and looks far better than .alert().


## Program functionality

From a front end persepctive a User can create a new username/password combination. Once logged in they will see the welcome page. If they have already added foods to their pantry then their inventory will be loaded for review. On the inventory overview page any foods that are getting close to expiring are automatically displayed. 

The All Foods page can be used to add items to your pantry, adding multiple times will tick up the quanitity. 

On the recipe page a user can review all recipes created, can add a recipe, and will have any ingredients that are currently in a user's inventory will be highlighted green. 



