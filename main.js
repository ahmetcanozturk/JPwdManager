/*
    description: entry file for the application
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
*/

const {app, BrowserWindow, Menu, dialog} = require('electron');
const path = require('path');
const url = require('url');

let window = null

app.once('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#6a6a6a",
    show: false
  })

  var mtemplate = [
    { label: "JPwdManager", submenu: [
        { type: 'normal', label: 'Quit', accelerator: 'Command+Q', click: () => { app.quit(); } }
      ] 
    },
    {
      label: 'Edit',
      submenu: [{role: 'undo'},{role: 'redo'},{type: 'separator'},{role: 'cut'},{role: 'copy'},{role: 'paste'},{role: 'pasteandmatchstyle'},{role: 'delete'},{role: 'selectall'}]
    },
    {
      label: 'View',
      submenu: [{role: 'reload'},{role: 'forcereload'},{role: 'toggledevtools'},{type: 'separator'},{role: 'resetzoom'},{role: 'zoomin'},{role: 'zoomout'},{type: 'separator'},{role: 'togglefullscreen'}]
    },
    {
      role: 'window',
      submenu: [{role: 'minimize'},{role: 'close'}]
    },
    {
      role: "Help", submenu: [{ label: "About", click: () => {
        dialog.showMessageBox(window, {title: "About", message: "written by Ahmetcan Ozturk\nhttps://github.com/ahmetcanozturk/"});
      } }]
    }
  ];

  const menu = Menu.buildFromTemplate(mtemplate);
  Menu.setApplicationMenu(menu);

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', () => {
      window.show()
  })
})
