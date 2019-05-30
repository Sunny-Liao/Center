const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors({
    //address of client heroku
    //origin: "https://centering.herokuapp.com/"
}));
require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log('App running on port PORT ' + PORT);
});
