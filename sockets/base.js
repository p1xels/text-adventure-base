const readline = require('readline');
const stream = require('stream')
const net = require('net');
var tmp = require('tmp');
function setup(wss) { 
wss.on('connection', function connection(ws, req) {
var world= require('../world')

let server = net.createServer((c) => {
  c.pipe(c);
});
server.listen(heck=tmp.tmpNameSync({ template: '/tmp/tmp-XXXXXX.sock' }), () => {
  console.log('server bound: '+heck);
}); //  in  a few seconds you're gonna see some serious hax
ws.write = ws.send //ew hack
rl = readline.createInterface({
  input: hack=net.connect(heck), // whyyyy
  output: ws,
  terminal:true
});
world.onMessage = (msg) => {ws.write('\r\n'+msg+'\r\n')
rl.prompt()}
rl.on('close',()=>ws.close())
  ws.on('message', function incoming(message) {
    if(message=='\r'){message='\n'} // u What
    hack.write(message) // THIS IS THE WORST WAY TO GO ABOUT THIS
  });
ws.write('\033[2J')
rl.prompt()
rl.on('line', (line) => {
console.log(line)
ws.write(world.line(line)+'\r\n')
rl.prompt()
});
});
}
module.exports = setup

