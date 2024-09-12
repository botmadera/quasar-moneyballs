var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src-electron/electron-main.js
var electron_main_exports = {};
__export(electron_main_exports, {
  mainWindow: () => mainWindow
});
module.exports = __toCommonJS(electron_main_exports);
var import_electron2 = require("electron");
var import_path = __toESM(require("path"));
var import_os = __toESM(require("os"));

// src-electron/menu/menu.js
var import_electron = require("electron");
var isMac = process.platform === "darwin";
var menuTemplate = [
  ...isMac ? [{
    label: import_electron.app.name,
    submenu: [
      { role: "about" },
      {
        label: "Settings",
        accelerator: "Cmd+,",
        click: () => {
          mainWindow.webContents.send("show-settings");
        }
      },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideOthers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  }] : [],
  {
    label: "File",
    submenu: [
      isMac ? { role: "close" } : { role: "quit" }
    ]
  },
  {
    label: "Editame",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      ...isMac ? [
        { role: "pasteAndMatchStyle" },
        { role: "delete" },
        { role: "selectAll" },
        { type: "separator" },
        {
          label: "Speech",
          submenu: [
            { role: "startSpeaking" },
            { role: "stopSpeaking" }
          ]
        }
      ] : [
        { role: "delete" },
        { type: "separator" },
        { role: "selectAll" }
      ]
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "resetZoom" },
      { role: "zoomIn" },
      { role: "zoomOut" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...isMac ? [
        { type: "separator" },
        { role: "front" },
        { type: "separator" },
        { role: "window" }
      ] : [
        { role: "close" }
      ]
    ]
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://electronjs.org");
        }
      }
    ]
  }
];

// src-electron/electron-main.js
var platform = process.platform || import_os.default.platform();
var menu = import_electron2.Menu.buildFromTemplate(menuTemplate);
var mainWindow;
import_electron2.app.whenReady().then(() => {
  mainWindow = new import_electron2.BrowserWindow({
    icon: import_path.default.resolve(__dirname, "icons/icon.png"),
    width: 1e3,
    height: 600,
    minWidth: 768,
    minHeight: 512,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      preload: import_path.default.resolve(__dirname, "/Users/marce/Dev/quasar-moneyballs/.quasar/electron/electron-preload.js")
    }
  });
  mainWindow.loadURL("http://localhost:9300");
  if (true) {
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  import_electron2.Menu.setApplicationMenu(menu);
});
import_electron2.app.on("window-all-closed", () => {
  import_electron2.app.quit();
});
import_electron2.ipcMain.on(
  "quit-app",
  () => {
    import_electron2.app.quit();
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mainWindow
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiLCAiLi4vLi4vc3JjLWVsZWN0cm9uL21lbnUvbWVudS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLypcbiAqICAgVGhpcyBmaWxlIGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciBFbGVjdHJvbiBwcm9jZXNzXG4gKlxuICovXG5cbi8qXG4gKiBJTVBPUlRTXG4gKi9cblxuaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51LCBpcGNNYWluIH0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgbWVudVRlbXBsYXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XG5cbi8qXG4gKiBDb25zdGFucyBhbmQgdmFyaWFibGVzXG4gKi9cblxuLy8gbmVlZGVkIGluIGNhc2UgcHJvY2VzcyBpcyB1bmRlZmluZWQgdW5kZXIgTGludXhcbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpO1xuY29uc3QgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUobWVudVRlbXBsYXRlKTtcbi8vIEV4cG9ydCBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGluIG90aGVyIGZpbGVzXG5leHBvcnQgbGV0IG1haW5XaW5kb3c7XG5cbi8qXG4gKiBBUFAgUmVhZHlcbiAqL1xuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gIC8vSW5pdGlhbCB3aW5kb3cgb3B0aW9uc1xuXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgaWNvbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpY29ucy9pY29uLnBuZ1wiKSwgLy8gdHJheSBpY29uXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgbWluV2lkdGg6IDc2OCxcbiAgICBtaW5IZWlnaHQ6IDUxMixcbiAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly92Mi5xdWFzYXIuZGV2L3F1YXNhci1jbGktdml0ZS9kZXZlbG9waW5nLWVsZWN0cm9uLWFwcHMvZWxlY3Ryb24tcHJlbG9hZC1zY3JpcHRcbiAgICAgIHByZWxvYWQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHByb2Nlc3MuZW52LlFVQVNBUl9FTEVDVFJPTl9QUkVMT0FEKSxcbiAgICB9LFxuICB9KTtcblxuICBtYWluV2luZG93LmxvYWRVUkwocHJvY2Vzcy5lbnYuQVBQX1VSTCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHR0lORykge1xuICAgIC8vIGlmIG9uIERFViBvciBQcm9kdWN0aW9uIHdpdGggZGVidWcgZW5hYmxlZFxuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oXCJkZXZ0b29scy1vcGVuZWRcIiwgKCkgPT4ge1xuICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5jbG9zZURldlRvb2xzKCk7XG4gICAgfSk7XG4gIH1cblxuICBtYWluV2luZG93Lm9uKFwiY2xvc2VkXCIsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbDtcbiAgfSk7XG5cbiAgTWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWVudSk7XG59KTtcblxuLypcbiAqIEVWRU5UUyBIQU5ETEVSU1xuICovXG5cbmFwcC5vbihcIndpbmRvdy1hbGwtY2xvc2VkXCIsICgpID0+IHtcbiAgYXBwLnF1aXQoKTtcbn0pO1xuXG4vKlxuICogaXBjTWFpblxuICovXG5pcGNNYWluLm9uKFwicXVpdC1hcHBcIiwgKCkgPT4ge1xuICBhcHAucXVpdCgpO1xufVxuKTsiLCAiXG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7IG1haW5XaW5kb3cgfSBmcm9tIFwiLi4vZWxlY3Ryb24tbWFpbi5qc1wiO1xuLy8gZWRpdFxuY29uc3QgaXNNYWMgPSBwcm9jZXNzLnBsYXRmb3JtID09PSBcImRhcndpblwiO1xuXG5cbi8vIE1lbnUgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBtZW51VGVtcGxhdGUgPSBbXG4gIC8vIHsgcm9sZTogJ2FwcE1lbnUnIH1cbiAgLi4uKGlzTWFjXG4gICAgPyBbe1xuICAgICAgICBsYWJlbDogYXBwLm5hbWUsXG4gICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICB7IHJvbGU6ICdhYm91dCcgfSxcbiAgICAgICAgICB7IFxuICAgICAgICAgICAgbGFiZWw6ICdTZXR0aW5ncycsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NtZCssJyxcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuc2VuZCgnc2hvdy1zZXR0aW5ncycpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgeyByb2xlOiAnc2VydmljZXMnIH0sXG4gICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ2hpZGUnIH0sXG4gICAgICAgICAgeyByb2xlOiAnaGlkZU90aGVycycgfSxcbiAgICAgICAgICB7IHJvbGU6ICd1bmhpZGUnIH0sXG4gICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ3F1aXQnIH1cbiAgICAgICAgXVxuICAgICAgfV1cbiAgICA6IFtdKSxcbiAgLy8geyByb2xlOiAnZmlsZU1lbnUnIH1cbiAge1xuICAgIGxhYmVsOiAnRmlsZScsXG4gICAgc3VibWVudTogW1xuICAgICAgaXNNYWMgPyB7IHJvbGU6ICdjbG9zZScgfSA6IHsgcm9sZTogJ3F1aXQnIH1cbiAgICBdXG4gIH0sXG4gIC8vIHsgcm9sZTogJ2VkaXRNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogJ0VkaXRhbWUnLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgcm9sZTogJ3VuZG8nIH0sXG4gICAgICB7IHJvbGU6ICdyZWRvJyB9LFxuICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgeyByb2xlOiAnY3V0JyB9LFxuICAgICAgeyByb2xlOiAnY29weScgfSxcbiAgICAgIHsgcm9sZTogJ3Bhc3RlJyB9LFxuICAgICAgLi4uKGlzTWFjXG4gICAgICAgID8gW1xuICAgICAgICAgICAgeyByb2xlOiAncGFzdGVBbmRNYXRjaFN0eWxlJyB9LFxuICAgICAgICAgICAgeyByb2xlOiAnZGVsZXRlJyB9LFxuICAgICAgICAgICAgeyByb2xlOiAnc2VsZWN0QWxsJyB9LFxuICAgICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ1NwZWVjaCcsXG4gICAgICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdzdGFydFNwZWFraW5nJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3N0b3BTcGVha2luZycgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIHsgcm9sZTogJ2RlbGV0ZScgfSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ3NlbGVjdEFsbCcgfVxuICAgICAgICAgIF0pXG4gICAgXVxuICB9LFxuICAvLyB7IHJvbGU6ICd2aWV3TWVudScgfVxuICB7XG4gICAgbGFiZWw6ICdWaWV3JyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6ICdyZWxvYWQnIH0sXG4gICAgICB7IHJvbGU6ICdmb3JjZVJlbG9hZCcgfSxcbiAgICAgIHsgcm9sZTogJ3RvZ2dsZURldlRvb2xzJyB9LFxuICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgeyByb2xlOiAncmVzZXRab29tJyB9LFxuICAgICAgeyByb2xlOiAnem9vbUluJyB9LFxuICAgICAgeyByb2xlOiAnem9vbU91dCcgfSxcbiAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgIHsgcm9sZTogJ3RvZ2dsZWZ1bGxzY3JlZW4nIH1cbiAgICBdXG4gIH0sXG4gIC8vIHsgcm9sZTogJ3dpbmRvd01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiAnV2luZG93JyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6ICdtaW5pbWl6ZScgfSxcbiAgICAgIHsgcm9sZTogJ3pvb20nIH0sXG4gICAgICAuLi4oaXNNYWNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICB7IHJvbGU6ICdmcm9udCcgfSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ3dpbmRvdycgfVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICB7IHJvbGU6ICdjbG9zZScgfVxuICAgICAgICAgIF0pXG4gICAgXVxuICB9LFxuICB7XG4gICAgcm9sZTogJ2hlbHAnLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdMZWFybiBNb3JlJyxcbiAgICAgICAgY2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHNoZWxsIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXG4gICAgICAgICAgYXdhaXQgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2Vs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LFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sU0FBUztBQUFBLE1BQ25CLElBQ0E7QUFBQSxRQUNFLEVBQUUsTUFBTSxRQUFRO0FBQUEsTUFDbEI7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPLFlBQVk7QUFDakIsZ0JBQU0sRUFBRSxNQUFNLElBQUksUUFBUTtBQUMxQixnQkFBTSxNQUFNLGFBQWEsd0JBQXdCO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FEakdBLElBQU0sV0FBVyxRQUFRLFlBQVksVUFBQUMsUUFBRyxTQUFTO0FBQ2pELElBQU0sT0FBTyxzQkFBSyxrQkFBa0IsWUFBWTtBQUV6QyxJQUFJO0FBTVgscUJBQUksVUFBVSxFQUFFLEtBQUssTUFBTTtBQUd6QixlQUFhLElBQUksK0JBQWM7QUFBQSxJQUM3QixNQUFNLFlBQUFDLFFBQUssUUFBUSxXQUFXLGdCQUFnQjtBQUFBLElBQzlDLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFFbEIsU0FBUyxZQUFBQSxRQUFLLFFBQVEsV0FBVyx5RUFBbUM7QUFBQSxJQUN0RTtBQUFBLEVBQ0YsQ0FBQztBQUVELGFBQVcsUUFBUSx1QkFBbUI7QUFFdEMsTUFBSSxNQUF1QjtBQUV6QixlQUFXLFlBQVksYUFBYTtBQUFBLEVBQ3RDLE9BQU87QUFFTCxlQUFXLFlBQVksR0FBRyxtQkFBbUIsTUFBTTtBQUNqRCxpQkFBVyxZQUFZLGNBQWM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsRUFDSDtBQUVBLGFBQVcsR0FBRyxVQUFVLE1BQU07QUFDNUIsaUJBQWE7QUFBQSxFQUNmLENBQUM7QUFFRCx3QkFBSyxtQkFBbUIsSUFBSTtBQUM5QixDQUFDO0FBTUQscUJBQUksR0FBRyxxQkFBcUIsTUFBTTtBQUNoQyx1QkFBSSxLQUFLO0FBQ1gsQ0FBQztBQUtELHlCQUFRO0FBQUEsRUFBRztBQUFBLEVBQVksTUFBTTtBQUMzQix5QkFBSSxLQUFLO0FBQUEsRUFDWDtBQUNBOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZWxlY3Ryb24iLCAib3MiLCAicGF0aCJdCn0K
