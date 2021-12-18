const express = require('express');const path = require('path');const app = express();app.use(express.static(__dirname + '/dist/<brdrywall>'));app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/<brdrywall>/index.html'));});app.listen(process.env.PORT || 8080);

// now we need to add a node and npm engine that Heroku will use to run 