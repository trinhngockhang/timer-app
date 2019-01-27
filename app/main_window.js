const electron = require('electron');
const { BrowserWindow } = electron;

class mainWindow extends BrowserWindow{
  constructor(path){
    super({
    height:500,
    width:300,
    frame: false,
    resizable:false,
    show:false,
    webPreferences: {backgroundThrottling: false}
    });
    this.loadURL(path);
    this.on('blur',() => {
      this.hide();
    })
  }
}

module.exports = mainWindow;
