import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'
import os from 'os'
import { menuTemplate } from './menu/menu.js'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

export let mainWindow


app.whenReady().then(()=>{
   /**
   * Initial window options
   */
   mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    minWidth: 768,
    minHeight: 512,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(menuTemplate)
})

app.on('window-all-closed', () => {
    app.quit()
  
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
