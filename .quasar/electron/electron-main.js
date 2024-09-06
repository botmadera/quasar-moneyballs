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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgTWVudSB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcblxuLy8gbmVlZGVkIGluIGNhc2UgcHJvY2VzcyBpcyB1bmRlZmluZWQgdW5kZXIgTGludXhcbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpXG5cbmxldCBtYWluV2luZG93XG5jb25zdCBpc01hYyA9IHBsYXRmb3JtID09PSAnZGFyd2luJ1xuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3cgKCkge1xuICAvKipcbiAgICogSW5pdGlhbCB3aW5kb3cgb3B0aW9uc1xuICAgKi9cbiAgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICBpY29uOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnaWNvbnMvaWNvbi5wbmcnKSwgLy8gdHJheSBpY29uXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgbWluV2lkdGg6IDc2OCxcbiAgICBtaW5IZWlnaHQ6IDUxMixcbiAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly92Mi5xdWFzYXIuZGV2L3F1YXNhci1jbGktdml0ZS9kZXZlbG9waW5nLWVsZWN0cm9uLWFwcHMvZWxlY3Ryb24tcHJlbG9hZC1zY3JpcHRcbiAgICAgIHByZWxvYWQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHByb2Nlc3MuZW52LlFVQVNBUl9FTEVDVFJPTl9QUkVMT0FEKVxuICAgIH1cbiAgfSlcblxuICBtYWluV2luZG93LmxvYWRVUkwocHJvY2Vzcy5lbnYuQVBQX1VSTClcblxuICBpZiAocHJvY2Vzcy5lbnYuREVCVUdHSU5HKSB7XG4gICAgLy8gaWYgb24gREVWIG9yIFByb2R1Y3Rpb24gd2l0aCBkZWJ1ZyBlbmFibGVkXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKVxuICB9IGVsc2Uge1xuICAgIC8vIHdlJ3JlIG9uIHByb2R1Y3Rpb247IG5vIGFjY2VzcyB0byBkZXZ0b29scyBwbHNcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKCdkZXZ0b29scy1vcGVuZWQnLCAoKSA9PiB7XG4gICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLmNsb3NlRGV2VG9vbHMoKVxuICAgIH0pXG4gIH1cblxuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGxcbiAgfSlcblxuICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KVxufVxuXG5hcHAud2hlblJlYWR5KCkudGhlbihjcmVhdGVXaW5kb3cpXG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gICAgYXBwLnF1aXQoKVxuICBcbn0pXG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XG4gICAgY3JlYXRlV2luZG93KClcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXlDO0FBQ3pDLGtCQUFpQjtBQUNqQixnQkFBZTtBQUdmLElBQU0sV0FBVyxRQUFRLFlBQVksVUFBQUEsUUFBRyxTQUFTO0FBRWpELElBQUk7QUFHSixTQUFTLGVBQWdCO0FBSXZCLGVBQWEsSUFBSSw4QkFBYztBQUFBLElBQzdCLE1BQU0sWUFBQUMsUUFBSyxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsSUFDOUMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUVsQixTQUFTLFlBQUFBLFFBQUssUUFBUSxXQUFXLHlFQUFtQztBQUFBLElBQ3RFO0FBQUEsRUFDRixDQUFDO0FBRUQsYUFBVyxRQUFRLHVCQUFtQjtBQUV0QyxNQUFJLE1BQXVCO0FBRXpCLGVBQVcsWUFBWSxhQUFhO0FBQUEsRUFDdEMsT0FBTztBQUVMLGVBQVcsWUFBWSxHQUFHLG1CQUFtQixNQUFNO0FBQ2pELGlCQUFXLFlBQVksY0FBYztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBRUEsYUFBVyxHQUFHLFVBQVUsTUFBTTtBQUM1QixpQkFBYTtBQUFBLEVBQ2YsQ0FBQztBQUVELHVCQUFLLG1CQUFtQixJQUFJO0FBQzlCO0FBRUEsb0JBQUksVUFBVSxFQUFFLEtBQUssWUFBWTtBQUVqQyxvQkFBSSxHQUFHLHFCQUFxQixNQUFNO0FBQzlCLHNCQUFJLEtBQUs7QUFFYixDQUFDO0FBRUQsb0JBQUksR0FBRyxZQUFZLE1BQU07QUFDdkIsTUFBSSxlQUFlLE1BQU07QUFDdkIsaUJBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3MiLCAicGF0aCJdCn0K
