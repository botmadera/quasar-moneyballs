var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src-electron/electron-main.js
var import_electron = require("electron");
var import_path = __toESM(require("path"));
var import_os = __toESM(require("os"));
var platform = process.platform || import_os.default.platform();
var mainWindow;
function createWindow() {
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
  mainWindow.loadURL("http://localhost:9301");
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
}
import_electron.app.whenReady().then(createWindow);
import_electron.app.on("window-all-closed", () => {
  import_electron.app.quit();
});
import_electron.app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcblxuLy8gbmVlZGVkIGluIGNhc2UgcHJvY2VzcyBpcyB1bmRlZmluZWQgdW5kZXIgTGludXhcbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpXG5cbmxldCBtYWluV2luZG93XG5cbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdyAoKSB7XG4gIC8qKlxuICAgKiBJbml0aWFsIHdpbmRvdyBvcHRpb25zXG4gICAqL1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGljb246IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpY29ucy9pY29uLnBuZycpLCAvLyB0cmF5IGljb25cbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBtaW5XaWR0aDogNzY4LFxuICAgIG1pbkhlaWdodDogNTEyLFxuICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgLy8gTW9yZSBpbmZvOiBodHRwczovL3YyLnF1YXNhci5kZXYvcXVhc2FyLWNsaS12aXRlL2RldmVsb3BpbmctZWxlY3Ryb24tYXBwcy9lbGVjdHJvbi1wcmVsb2FkLXNjcmlwdFxuICAgICAgcHJlbG9hZDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgcHJvY2Vzcy5lbnYuUVVBU0FSX0VMRUNUUk9OX1BSRUxPQUQpXG4gICAgfVxuICB9KVxuXG4gIG1haW5XaW5kb3cubG9hZFVSTChwcm9jZXNzLmVudi5BUFBfVVJMKVxuXG4gIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAvLyBpZiBvbiBERVYgb3IgUHJvZHVjdGlvbiB3aXRoIGRlYnVnIGVuYWJsZWRcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2RldnRvb2xzLW9wZW5lZCcsICgpID0+IHtcbiAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuY2xvc2VEZXZUb29scygpXG4gICAgfSlcbiAgfVxuXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbFxuICB9KVxufVxuXG5hcHAud2hlblJlYWR5KCkudGhlbihjcmVhdGVXaW5kb3cpXG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gICAgYXBwLnF1aXQoKVxuICBcbn0pXG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XG4gICAgY3JlYXRlV2luZG93KClcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQW1DO0FBQ25DLGtCQUFpQjtBQUNqQixnQkFBZTtBQUdmLElBQU0sV0FBVyxRQUFRLFlBQVksVUFBQUEsUUFBRyxTQUFTO0FBRWpELElBQUk7QUFFSixTQUFTLGVBQWdCO0FBSXZCLGVBQWEsSUFBSSw4QkFBYztBQUFBLElBQzdCLE1BQU0sWUFBQUMsUUFBSyxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsSUFDOUMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUVsQixTQUFTLFlBQUFBLFFBQUssUUFBUSxXQUFXLHlFQUFtQztBQUFBLElBQ3RFO0FBQUEsRUFDRixDQUFDO0FBRUQsYUFBVyxRQUFRLHVCQUFtQjtBQUV0QyxNQUFJLE1BQXVCO0FBRXpCLGVBQVcsWUFBWSxhQUFhO0FBQUEsRUFDdEMsT0FBTztBQUVMLGVBQVcsWUFBWSxHQUFHLG1CQUFtQixNQUFNO0FBQ2pELGlCQUFXLFlBQVksY0FBYztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBRUEsYUFBVyxHQUFHLFVBQVUsTUFBTTtBQUM1QixpQkFBYTtBQUFBLEVBQ2YsQ0FBQztBQUNIO0FBRUEsb0JBQUksVUFBVSxFQUFFLEtBQUssWUFBWTtBQUVqQyxvQkFBSSxHQUFHLHFCQUFxQixNQUFNO0FBQzlCLHNCQUFJLEtBQUs7QUFFYixDQUFDO0FBRUQsb0JBQUksR0FBRyxZQUFZLE1BQU07QUFDdkIsTUFBSSxlQUFlLE1BQU07QUFDdkIsaUJBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3MiLCAicGF0aCJdCn0K
