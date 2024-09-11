/*
 *   This file is the main entry point for Electron process
 *
 */

/*
 * IMPORTS
 */

import { app, BrowserWindow, Menu, ipcMain } from "electron";
import path from "path";
import os from "os";
import { menuTemplate } from "./menu/menu";

/*
 * Constans and variables
 */

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();
const menu = Menu.buildFromTemplate(menuTemplate);
// Export so that it can be used in other files
export let mainWindow;

/*
 * APP Ready
 */

app.whenReady().then(() => {
  //Initial window options

  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, "icons/icon.png"), // tray icon
    width: 1000,
    height: 600,
    minWidth: 768,
    minHeight: 512,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  mainWindow.loadURL(process.env.APP_URL);

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  Menu.setApplicationMenu(menu);
});

/*
 * EVENTS HANDLERS
 */

app.on("window-all-closed", () => {
  app.quit();
});

/*
 * ipcMain
 */
ipcMain.on("quit-app", () => {
  console.log("Quit app");
}
);