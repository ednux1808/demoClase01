/* global __dirname */

'use strict';

// instanciando los objectos app , BrowserWindow
const {app, BrowserWindow } = require('electron');


console.dir(app);

app.on('before-quit', () => {
	console.log("saliedo...");
});



app.on('ready', () =>{
	let ventana = new BrowserWindow({
		width: 1200,
		height: 610,
		title: 'Ednux App',
		center: true,
		maximizable: false,
		show: false,
                backgroundColor:'#052352',
                hasShadow:true,
                opacity:0.98,
                titleBarStyle:'hidden',
                icon:__dirname+'/App/FrontEnd/IMG/favicon.ico'
                
                
                
	});
const { app, Menu } = require('electron');
  
  const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      click () { console.log('New Window'),ventana.show() }
    }, {
      label: 'New Window with Settings',
      submenu: [
        { label: 'Basic' },
        { label: 'Pro' }
      ]
    },
    { label: 'New Command...' }
  ]);
  

  
  
  app.dock.setMenu(dockMenu);

	ventana.once('ready-to-show', () => {

                
		ventana.show();
                
	});



	ventana.on('move', () => {
		const posicion = ventana.getPosition();
		console.log(`la posicion es ${ posicion }`);
	});

	ventana.on('closed',() =>{
		ventana = null;
		app.quit();
	});

	ventana.loadURL(`file://${__dirname}/App/index.html`);
});


