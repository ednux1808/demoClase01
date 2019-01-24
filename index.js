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
  

  

  
  






	ventana.on('closed',() =>{
		ventana = null;
		app.quit();
	});

	ventana.loadURL(`file://${__dirname}/App/index.html`);
});


