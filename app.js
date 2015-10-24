'use strict';

let app = require('app');
let BrowserWindow = require('browser-window');
let path = require('path');
let ipc = require('ipc');

var mainWindow = null;

require('crash-reporter').start();

app.on('ready', ()=> {

      var mainWindowOption = {
                width: 1400
                     ,height: 800
                          ,title: 'SkyWine'
                            };

                              mainWindow = new BrowserWindow(mainWindowOption);
                                mainWindow.loadUrl('file://'+__dirname+'/index.html');
                                  mainWindow.show();
                                    mainWindow.openDevTools();
                                      mainWindow.on('closed', () =>{
                                              mainWindow = null;
                                                });
                                        ///////////////////END///////////////////////////////////
                                        //
                                        //});
