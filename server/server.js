module.exports = function(init_callback){
  var express = require('express');
  var app = express();

  var _ = require('lodash');
  var fs = require('fs');
  var path = require('path');
  var jsonfile = require('jsonfile');

  app.use(express.static(path.join(__dirname, '../ui')));

  app.get('/', function (req, res) {
    res.send('{"status":"ok"}');
  });

  app.get('/projects', function (req, res) {
    var projects = [];

    var files = fs.readdirSync(path.join(__dirname, 'projects'));
    _.each(files, function(file){
      if (/\.json$/.test(file)){
        var project_json = jsonfile.readFileSync(path.join(__dirname, 'projects', file));
        projects.push(project_json);
      }
    });

    res.send(JSON.stringify(projects));
  });

  app.listen(3615, function () {
    console.log('Example app listening on port 3615!');
    if (init_callback) init_callback();
  });
}