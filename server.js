//requires ewxpress as a module
const express = require("express");
//creates express server
let app = express();
//sets up a initial port for our listener
var PORT = process.env.PORT || 9001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// The listener below pretty much gets the code to start on the backend.

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
}); 