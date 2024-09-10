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
var import_electron = require("electron");
var import_path = __toESM(require("path"));
var import_os = __toESM(require("os"));
var platform = process.platform || import_os.default.platform();
var isMac = platform === "darwin";
var mainWindow;
var menuTemplate = [
  ...isMac ? [{
    label: import_electron.app.name,
    submenu: [
      { role: "about" },
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
var menu = import_electron.Menu.buildFromTemplate(menuTemplate);
import_electron.app.whenReady().then(() => {
  mainWindow = new import_electron.BrowserWindow({
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
  import_electron.Menu.setApplicationMenu(menu);
});
import_electron.app.on("window-all-closed", () => {
  import_electron.app.quit();
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mainWindow
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiAgIFRoaXMgZmlsZSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgRWxlY3Ryb24gcHJvY2Vzc1xuICpcbiAqL1xuXG4vKlxuICogSU1QT1JUU1xuICovXG5cbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgTWVudSB9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBvcyBmcm9tIFwib3NcIjtcblxuLypcbiAqIENvbnN0YW5zIGFuZCB2YXJpYWJsZXNcbiAqL1xuXG4vLyBuZWVkZWQgaW4gY2FzZSBwcm9jZXNzIGlzIHVuZGVmaW5lZCB1bmRlciBMaW51eFxuY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtIHx8IG9zLnBsYXRmb3JtKCk7XG5jb25zdCBpc01hYyA9IHBsYXRmb3JtID09PSBcImRhcndpblwiO1xuLy8gRXhwb3J0IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgaW4gb3RoZXIgZmlsZXNcbmV4cG9ydCBsZXQgbWFpbldpbmRvdztcblxuLy8gTWVudSB0ZW1wbGF0ZVxuY29uc3QgbWVudVRlbXBsYXRlID0gW1xuICAvLyB7IHJvbGU6ICdhcHBNZW51JyB9XG4gIC4uLihpc01hY1xuICAgID8gW3tcbiAgICAgICAgbGFiZWw6IGFwcC5uYW1lLFxuICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgeyByb2xlOiAnYWJvdXQnIH0sXG4gICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ3NlcnZpY2VzJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICB7IHJvbGU6ICdoaWRlJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ2hpZGVPdGhlcnMnIH0sXG4gICAgICAgICAgeyByb2xlOiAndW5oaWRlJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICB7IHJvbGU6ICdxdWl0JyB9XG4gICAgICAgIF1cbiAgICAgIH1dXG4gICAgOiBbXSksXG4gIC8vIHsgcm9sZTogJ2ZpbGVNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogJ0ZpbGUnLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIGlzTWFjID8geyByb2xlOiAnY2xvc2UnIH0gOiB7IHJvbGU6ICdxdWl0JyB9XG4gICAgXVxuICB9LFxuICAvLyB7IHJvbGU6ICdlZGl0TWVudScgfVxuICB7XG4gICAgbGFiZWw6ICdFZGl0YW1lJyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6ICd1bmRvJyB9LFxuICAgICAgeyByb2xlOiAncmVkbycgfSxcbiAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgIHsgcm9sZTogJ2N1dCcgfSxcbiAgICAgIHsgcm9sZTogJ2NvcHknIH0sXG4gICAgICB7IHJvbGU6ICdwYXN0ZScgfSxcbiAgICAgIC4uLihpc01hY1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIHsgcm9sZTogJ3Bhc3RlQW5kTWF0Y2hTdHlsZScgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ2RlbGV0ZScgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ3NlbGVjdEFsbCcgfSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdTcGVlY2gnLFxuICAgICAgICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnc3RhcnRTcGVha2luZycgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdzdG9wU3BlYWtpbmcnIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICB7IHJvbGU6ICdkZWxldGUnIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICB7IHJvbGU6ICdzZWxlY3RBbGwnIH1cbiAgICAgICAgICBdKVxuICAgIF1cbiAgfSxcbiAgLy8geyByb2xlOiAndmlld01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiAnVmlldycsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiAncmVsb2FkJyB9LFxuICAgICAgeyByb2xlOiAnZm9yY2VSZWxvYWQnIH0sXG4gICAgICB7IHJvbGU6ICd0b2dnbGVEZXZUb29scycgfSxcbiAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgIHsgcm9sZTogJ3Jlc2V0Wm9vbScgfSxcbiAgICAgIHsgcm9sZTogJ3pvb21JbicgfSxcbiAgICAgIHsgcm9sZTogJ3pvb21PdXQnIH0sXG4gICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICB7IHJvbGU6ICd0b2dnbGVmdWxsc2NyZWVuJyB9XG4gICAgXVxuICB9LFxuICAvLyB7IHJvbGU6ICd3aW5kb3dNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogJ1dpbmRvdycsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiAnbWluaW1pemUnIH0sXG4gICAgICB7IHJvbGU6ICd6b29tJyB9LFxuICAgICAgLi4uKGlzTWFjXG4gICAgICAgID8gW1xuICAgICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgeyByb2xlOiAnZnJvbnQnIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICB7IHJvbGU6ICd3aW5kb3cnIH1cbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgeyByb2xlOiAnY2xvc2UnIH1cbiAgICAgICAgICBdKVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHJvbGU6ICdoZWxwJyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgICAgIGNsaWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzaGVsbCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuICAgICAgICAgIGF3YWl0IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuY29uc3QgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUobWVudVRlbXBsYXRlKTtcblxuLypcbiAqIEFQUCBSZWFkeVxuICovXG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgLy9Jbml0aWFsIHdpbmRvdyBvcHRpb25zXG5cbiAgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICBpY29uOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImljb25zL2ljb24ucG5nXCIpLCAvLyB0cmF5IGljb25cbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBtaW5XaWR0aDogNzY4LFxuICAgIG1pbkhlaWdodDogNTEyLFxuICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgLy8gTW9yZSBpbmZvOiBodHRwczovL3YyLnF1YXNhci5kZXYvcXVhc2FyLWNsaS12aXRlL2RldmVsb3BpbmctZWxlY3Ryb24tYXBwcy9lbGVjdHJvbi1wcmVsb2FkLXNjcmlwdFxuICAgICAgcHJlbG9hZDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcHJvY2Vzcy5lbnYuUVVBU0FSX0VMRUNUUk9OX1BSRUxPQUQpLFxuICAgIH0sXG4gIH0pO1xuXG4gIG1haW5XaW5kb3cubG9hZFVSTChwcm9jZXNzLmVudi5BUFBfVVJMKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuREVCVUdHSU5HKSB7XG4gICAgLy8gaWYgb24gREVWIG9yIFByb2R1Y3Rpb24gd2l0aCBkZWJ1ZyBlbmFibGVkXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB3ZSdyZSBvbiBwcm9kdWN0aW9uOyBubyBhY2Nlc3MgdG8gZGV2dG9vbHMgcGxzXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vbihcImRldnRvb2xzLW9wZW5lZFwiLCAoKSA9PiB7XG4gICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLmNsb3NlRGV2VG9vbHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1haW5XaW5kb3cub24oXCJjbG9zZWRcIiwgKCkgPT4ge1xuICAgIG1haW5XaW5kb3cgPSBudWxsO1xuICB9KTtcblxuICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcbn0pO1xuXG4vKlxuICogRVZFTlRTIEhBTkRMRVJTXG4gKi9cblxuYXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xuICBhcHAucXVpdCgpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLHNCQUF5QztBQUN6QyxrQkFBaUI7QUFDakIsZ0JBQWU7QUFPZixJQUFNLFdBQVcsUUFBUSxZQUFZLFVBQUFBLFFBQUcsU0FBUztBQUNqRCxJQUFNLFFBQVEsYUFBYTtBQUVwQixJQUFJO0FBR1gsSUFBTSxlQUFlO0FBQUEsRUFFbkIsR0FBSSxRQUNBLENBQUM7QUFBQSxJQUNDLE9BQU8sb0JBQUk7QUFBQSxJQUNYLFNBQVM7QUFBQSxNQUNQLEVBQUUsTUFBTSxRQUFRO0FBQUEsTUFDaEIsRUFBRSxNQUFNLFlBQVk7QUFBQSxNQUNwQixFQUFFLE1BQU0sV0FBVztBQUFBLE1BQ25CLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNmLEVBQUUsTUFBTSxhQUFhO0FBQUEsTUFDckIsRUFBRSxNQUFNLFNBQVM7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
