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

// src-electron/menu/menu.js
var import_electron = require("electron");
var platform = process.platform || os.platform();
var isMac = platform === "darwin";
var menuTemplate = [
  ...isMac ? [
    {
      label: import_electron.app.name,
      submenu: [
        { role: "about" },
        {
          label: "Settings",
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
    }
  ] : [],
  {
    label: "File",
    submenu: [isMac ? { role: "close" } : { role: "quit" }]
  },
  {
    label: "Edit",
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
          submenu: [{ role: "startSpeaking" }, { role: "stopSpeaking" }]
        }
      ] : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]
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
      ] : [{ role: "close" }]
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
import_electron2.app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mainWindow
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiLCAiLi4vLi4vc3JjLWVsZWN0cm9uL21lbnUvbWVudS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51IH0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgbWVudVRlbXBsYXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XG5cbi8vIG5lZWRlZCBpbiBjYXNlIHByb2Nlc3MgaXMgdW5kZWZpbmVkIHVuZGVyIExpbnV4XG5cbmNvbnN0IG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKG1lbnVUZW1wbGF0ZSk7XG5cbmV4cG9ydCBsZXQgbWFpbldpbmRvdztcblxuLypcbiAgYXBwIHJlYWR5XG4qL1xuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gIC8qKlxuICAgKiBJbml0aWFsIHdpbmRvdyBvcHRpb25zXG4gICAqL1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGljb246IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaWNvbnMvaWNvbi5wbmdcIiksIC8vIHRyYXkgaWNvblxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIG1pbldpZHRoOiA3NjgsXG4gICAgbWluSGVpZ2h0OiA1MTIsXG4gICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXG4gICAgICAvLyBNb3JlIGluZm86IGh0dHBzOi8vdjIucXVhc2FyLmRldi9xdWFzYXItY2xpLXZpdGUvZGV2ZWxvcGluZy1lbGVjdHJvbi1hcHBzL2VsZWN0cm9uLXByZWxvYWQtc2NyaXB0XG4gICAgICBwcmVsb2FkOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBwcm9jZXNzLmVudi5RVUFTQVJfRUxFQ1RST05fUFJFTE9BRCksXG4gICAgfSxcbiAgfSk7XG5cbiAgbWFpbldpbmRvdy5sb2FkVVJMKHByb2Nlc3MuZW52LkFQUF9VUkwpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAvLyBpZiBvbiBERVYgb3IgUHJvZHVjdGlvbiB3aXRoIGRlYnVnIGVuYWJsZWRcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHdlJ3JlIG9uIHByb2R1Y3Rpb247IG5vIGFjY2VzcyB0byBkZXZ0b29scyBwbHNcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKFwiZGV2dG9vbHMtb3BlbmVkXCIsICgpID0+IHtcbiAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuY2xvc2VEZXZUb29scygpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFpbldpbmRvdy5vbihcImNsb3NlZFwiLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xuXG4gIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xufSk7XG5cbi8qIFxuICBFdmVudHMgXG4qL1xuXG5hcHAub24oXCJ3aW5kb3ctYWxsLWNsb3NlZFwiLCAoKSA9PiB7XG4gIGFwcC5xdWl0KCk7XG59KTtcblxuYXBwLm9uKFwiYWN0aXZhdGVcIiwgKCkgPT4ge1xuICBpZiAobWFpbldpbmRvdyA9PT0gbnVsbCkge1xuICAgIGNyZWF0ZVdpbmRvdygpO1xuICB9XG59KTtcbiIsICJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7IG1haW5XaW5kb3cgfSBmcm9tIFwiLi4vZWxlY3Ryb24tbWFpblwiO1xuXG4vKiBNRU5VICovXG5jb25zdCBwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm0gfHwgb3MucGxhdGZvcm0oKTtcbmNvbnN0IGlzTWFjID0gcGxhdGZvcm0gPT09IFwiZGFyd2luXCI7XG5cbmV4cG9ydCBjb25zdCBtZW51VGVtcGxhdGUgPSBbXG4gIC8vIHsgcm9sZTogJ2FwcE1lbnUnIH1cbiAgLi4uKGlzTWFjXG4gICAgPyBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogYXBwLm5hbWUsXG4gICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgeyByb2xlOiBcImFib3V0XCIgfSxcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5zZW5kKCdzaG93LXNldHRpbmdzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInNlcnZpY2VzXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImhpZGVcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImhpZGVPdGhlcnNcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInVuaGlkZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJxdWl0XCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIDogW10pLFxuICAvLyB7IHJvbGU6ICdmaWxlTWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiRmlsZVwiLFxuICAgIHN1Ym1lbnU6IFtpc01hYyA/IHsgcm9sZTogXCJjbG9zZVwiIH0gOiB7IHJvbGU6IFwicXVpdFwiIH1dLFxuICB9LFxuICAvLyB7IHJvbGU6ICdlZGl0TWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiRWRpdFwiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgcm9sZTogXCJ1bmRvXCIgfSxcbiAgICAgIHsgcm9sZTogXCJyZWRvXCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcImN1dFwiIH0sXG4gICAgICB7IHJvbGU6IFwiY29weVwiIH0sXG4gICAgICB7IHJvbGU6IFwicGFzdGVcIiB9LFxuICAgICAgLi4uKGlzTWFjXG4gICAgICAgID8gW1xuICAgICAgICAgICAgeyByb2xlOiBcInBhc3RlQW5kTWF0Y2hTdHlsZVwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwiZGVsZXRlXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJzZWxlY3RBbGxcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVjaFwiLFxuICAgICAgICAgICAgICBzdWJtZW51OiBbeyByb2xlOiBcInN0YXJ0U3BlYWtpbmdcIiB9LCB7IHJvbGU6IFwic3RvcFNwZWFraW5nXCIgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbeyByb2xlOiBcImRlbGV0ZVwiIH0sIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LCB7IHJvbGU6IFwic2VsZWN0QWxsXCIgfV0pLFxuICAgIF0sXG4gIH0sXG4gIC8vIHsgcm9sZTogJ3ZpZXdNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogXCJWaWV3XCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcInJlbG9hZFwiIH0sXG4gICAgICB7IHJvbGU6IFwiZm9yY2VSZWxvYWRcIiB9LFxuICAgICAgeyByb2xlOiBcInRvZ2dsZURldlRvb2xzXCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcInJlc2V0Wm9vbVwiIH0sXG4gICAgICB7IHJvbGU6IFwiem9vbUluXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tT3V0XCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcInRvZ2dsZWZ1bGxzY3JlZW5cIiB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHsgcm9sZTogJ3dpbmRvd01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIldpbmRvd1wiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgcm9sZTogXCJtaW5pbWl6ZVwiIH0sXG4gICAgICB7IHJvbGU6IFwiem9vbVwiIH0sXG4gICAgICAuLi4oaXNNYWNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJmcm9udFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJ3aW5kb3dcIiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbeyByb2xlOiBcImNsb3NlXCIgfV0pLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICByb2xlOiBcImhlbHBcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkxlYXJuIE1vcmVcIixcbiAgICAgICAgY2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHNoZWxsIH0gPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG4gICAgICAgICAgYXdhaXQgc2hlbGwub3BlbkV4dGVybmFsKFwiaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUFBLG1CQUF5QztBQUN6QyxrQkFBaUI7OztBQ0RqQixzQkFBb0I7QUFJcEIsSUFBTSxXQUFXLFFBQVEsWUFBWSxHQUFH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
