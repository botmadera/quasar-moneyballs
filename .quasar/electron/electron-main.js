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
var platform2 = process.platform || import_os.default.platform();
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
  import_electron2.Menu.setApplicationMenu(menuTemplate);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiLCAiLi4vLi4vc3JjLWVsZWN0cm9uL21lbnUvbWVudS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51IH0gZnJvbSAnZWxlY3Ryb24nXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG9zIGZyb20gJ29zJ1xuaW1wb3J0IHsgbWVudVRlbXBsYXRlIH0gZnJvbSAnLi9tZW51L21lbnUuanMnXG5cbi8vIG5lZWRlZCBpbiBjYXNlIHByb2Nlc3MgaXMgdW5kZWZpbmVkIHVuZGVyIExpbnV4XG5jb25zdCBwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm0gfHwgb3MucGxhdGZvcm0oKVxuXG5leHBvcnQgbGV0IG1haW5XaW5kb3dcblxuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKT0+e1xuICAgLyoqXG4gICAqIEluaXRpYWwgd2luZG93IG9wdGlvbnNcbiAgICovXG4gICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGljb246IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpY29ucy9pY29uLnBuZycpLCAvLyB0cmF5IGljb25cbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBtaW5XaWR0aDogNzY4LFxuICAgIG1pbkhlaWdodDogNTEyLFxuICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgLy8gTW9yZSBpbmZvOiBodHRwczovL3YyLnF1YXNhci5kZXYvcXVhc2FyLWNsaS12aXRlL2RldmVsb3BpbmctZWxlY3Ryb24tYXBwcy9lbGVjdHJvbi1wcmVsb2FkLXNjcmlwdFxuICAgICAgcHJlbG9hZDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcHJvY2Vzcy5lbnYuUVVBU0FSX0VMRUNUUk9OX1BSRUxPQUQpXG4gICAgfVxuICB9KVxuXG4gIG1haW5XaW5kb3cubG9hZFVSTChwcm9jZXNzLmVudi5BUFBfVVJMKVxuXG4gIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAvLyBpZiBvbiBERVYgb3IgUHJvZHVjdGlvbiB3aXRoIGRlYnVnIGVuYWJsZWRcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2RldnRvb2xzLW9wZW5lZCcsICgpID0+IHtcbiAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuY2xvc2VEZXZUb29scygpXG4gICAgfSlcbiAgfVxuXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbFxuICB9KVxuXG4gIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnVUZW1wbGF0ZSlcbn0pXG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gICAgYXBwLnF1aXQoKVxuICBcbn0pXG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XG4gICAgY3JlYXRlV2luZG93KClcbiAgfVxufSlcbiIsICJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7IG1haW5XaW5kb3cgfSBmcm9tIFwiLi4vZWxlY3Ryb24tbWFpblwiO1xuXG4vKiBNRU5VICovXG5jb25zdCBwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm0gfHwgb3MucGxhdGZvcm0oKTtcbmNvbnN0IGlzTWFjID0gcGxhdGZvcm0gPT09IFwiZGFyd2luXCI7XG5cbmV4cG9ydCBjb25zdCBtZW51VGVtcGxhdGUgPSBbXG4gIC8vIHsgcm9sZTogJ2FwcE1lbnUnIH1cbiAgLi4uKGlzTWFjXG4gICAgPyBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogYXBwLm5hbWUsXG4gICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgeyByb2xlOiBcImFib3V0XCIgfSxcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5zZW5kKCdzaG93LXNldHRpbmdzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInNlcnZpY2VzXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImhpZGVcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImhpZGVPdGhlcnNcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInVuaGlkZVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJxdWl0XCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIDogW10pLFxuICAvLyB7IHJvbGU6ICdmaWxlTWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiRmlsZVwiLFxuICAgIHN1Ym1lbnU6IFtpc01hYyA/IHsgcm9sZTogXCJjbG9zZVwiIH0gOiB7IHJvbGU6IFwicXVpdFwiIH1dLFxuICB9LFxuICAvLyB7IHJvbGU6ICdlZGl0TWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiRWRpdFwiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgcm9sZTogXCJ1bmRvXCIgfSxcbiAgICAgIHsgcm9sZTogXCJyZWRvXCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcImN1dFwiIH0sXG4gICAgICB7IHJvbGU6IFwiY29weVwiIH0sXG4gICAgICB7IHJvbGU6IFwicGFzdGVcIiB9LFxuICAgICAgLi4uKGlzTWFjXG4gICAgICAgID8gW1xuICAgICAgICAgICAgeyByb2xlOiBcInBhc3RlQW5kTWF0Y2hTdHlsZVwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwiZGVsZXRlXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJzZWxlY3RBbGxcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVjaFwiLFxuICAgICAgICAgICAgICBzdWJtZW51OiBbeyByb2xlOiBcInN0YXJ0U3BlYWtpbmdcIiB9LCB7IHJvbGU6IFwic3RvcFNwZWFraW5nXCIgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbeyByb2xlOiBcImRlbGV0ZVwiIH0sIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LCB7IHJvbGU6IFwic2VsZWN0QWxsXCIgfV0pLFxuICAgIF0sXG4gIH0sXG4gIC8vIHsgcm9sZTogJ3ZpZXdNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogXCJWaWV3XCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcInJlbG9hZFwiIH0sXG4gICAgICB7IHJvbGU6IFwiZm9yY2VSZWxvYWRcIiB9LFxuICAgICAgeyByb2xlOiBcInRvZ2dsZURldlRvb2xzXCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcInJlc2V0Wm9vbVwiIH0sXG4gICAgICB7IHJvbGU6IFwiem9vbUluXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tT3V0XCIgfSxcbiAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgeyByb2xlOiBcInRvZ2dsZWZ1bGxzY3JlZW5cIiB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHsgcm9sZTogJ3dpbmRvd01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIldpbmRvd1wiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgcm9sZTogXCJtaW5pbWl6ZVwiIH0sXG4gICAgICB7IHJvbGU6IFwiem9vbVwiIH0sXG4gICAgICAuLi4oaXNNYWNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJmcm9udFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJ3aW5kb3dcIiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbeyByb2xlOiBcImNsb3NlXCIgfV0pLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICByb2xlOiBcImhlbHBcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkxlYXJuIE1vcmVcIixcbiAgICAgICAgY2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHNoZWxsIH0gPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG4gICAgICAgICAgYXdhaXQgc2hlbGwub3BlbkV4dGVybmFsKFwiaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUFBLG1CQUF5QztBQUN6QyxrQkFBaUI7QUFDakIsZ0JBQWU7OztBQ0ZmLHNCQUFvQjtBQUlwQixJQUFNLFdBQVcsUUFBUSxZQUFZLEdBQUcsU0FBUztBQUNqRCxJQUFNLFFBQVEsYUFBYTtBQUVwQixJQUFNLGVBQWU7QUFBQSxFQUUxQixH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
