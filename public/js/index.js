Terminal.applyAddon(fit);  // Apply the `fit` addon
Terminal.applyAddon(attach);
var term = new Terminal();
term.open(document.getElementById('term-div'));
term.fit()
term.write('Connecting to \033[1;3;31mwebsock...\033[0m');
term.attach(ws=new WebSocket('ws://127.0.0.1:3000/'))
window.addEventListener('resize', ()=>term.fit())
ws.on('close',()=>term.write('Disconnected.'))
