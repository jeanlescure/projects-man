var server = require('./server/server');

server(function(){
  nw.Window.open('http://localhost:3615/index.html', {
    position: 'center',
    width: 1280,
    height: 720
  }, function(win) {
    console.log('Window open!');
  });
});