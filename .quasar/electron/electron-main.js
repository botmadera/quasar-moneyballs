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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mainWindow
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiLCAiLi4vLi4vc3JjLWVsZWN0cm9uL21lbnUvbWVudS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLypcbiAqICAgVGhpcyBmaWxlIGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciBFbGVjdHJvbiBwcm9jZXNzXG4gKlxuICovXG5cbi8qXG4gKiBJTVBPUlRTXG4gKi9cblxuaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51IH0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgbWVudVRlbXBsYXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XG5cbi8qXG4gKiBDb25zdGFucyBhbmQgdmFyaWFibGVzXG4gKi9cblxuLy8gbmVlZGVkIGluIGNhc2UgcHJvY2VzcyBpcyB1bmRlZmluZWQgdW5kZXIgTGludXhcbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpO1xuY29uc3QgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUobWVudVRlbXBsYXRlKTtcbi8vIEV4cG9ydCBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGluIG90aGVyIGZpbGVzXG5leHBvcnQgbGV0IG1haW5XaW5kb3c7XG5cbi8qXG4gKiBBUFAgUmVhZHlcbiAqL1xuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gIC8vSW5pdGlhbCB3aW5kb3cgb3B0aW9uc1xuXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgaWNvbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpY29ucy9pY29uLnBuZ1wiKSwgLy8gdHJheSBpY29uXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgbWluV2lkdGg6IDc2OCxcbiAgICBtaW5IZWlnaHQ6IDUxMixcbiAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly92Mi5xdWFzYXIuZGV2L3F1YXNhci1jbGktdml0ZS9kZXZlbG9waW5nLWVsZWN0cm9uLWFwcHMvZWxlY3Ryb24tcHJlbG9hZC1zY3JpcHRcbiAgICAgIHByZWxvYWQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHByb2Nlc3MuZW52LlFVQVNBUl9FTEVDVFJPTl9QUkVMT0FEKSxcbiAgICB9LFxuICB9KTtcblxuICBtYWluV2luZG93LmxvYWRVUkwocHJvY2Vzcy5lbnYuQVBQX1VSTCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHR0lORykge1xuICAgIC8vIGlmIG9uIERFViBvciBQcm9kdWN0aW9uIHdpdGggZGVidWcgZW5hYmxlZFxuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oXCJkZXZ0b29scy1vcGVuZWRcIiwgKCkgPT4ge1xuICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5jbG9zZURldlRvb2xzKCk7XG4gICAgfSk7XG4gIH1cblxuICBtYWluV2luZG93Lm9uKFwiY2xvc2VkXCIsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbDtcbiAgfSk7XG5cbiAgTWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWVudSk7XG59KTtcblxuLypcbiAqIEVWRU5UUyBIQU5ETEVSU1xuICovXG5cbmFwcC5vbihcIndpbmRvdy1hbGwtY2xvc2VkXCIsICgpID0+IHtcbiAgYXBwLnF1aXQoKTtcbn0pO1xuIiwgIlxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmNvbnN0IGlzTWFjID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gXCJkYXJ3aW5cIjtcblxuXG4vLyBNZW51IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgbWVudVRlbXBsYXRlID0gW1xuICAvLyB7IHJvbGU6ICdhcHBNZW51JyB9XG4gIC4uLihpc01hY1xuICAgID8gW3tcbiAgICAgICAgbGFiZWw6IGFwcC5uYW1lLFxuICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgeyByb2xlOiAnYWJvdXQnIH0sXG4gICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ3NlcnZpY2VzJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICB7IHJvbGU6ICdoaWRlJyB9LFxuICAgICAgICAgIHsgcm9sZTogJ2hpZGVPdGhlcnMnIH0sXG4gICAgICAgICAgeyByb2xlOiAndW5oaWRlJyB9LFxuICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICB7IHJvbGU6ICdxdWl0JyB9XG4gICAgICAgIF1cbiAgICAgIH1dXG4gICAgOiBbXSksXG4gIC8vIHsgcm9sZTogJ2ZpbGVNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogJ0ZpbGUnLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIGlzTWFjID8geyByb2xlOiAnY2xvc2UnIH0gOiB7IHJvbGU6ICdxdWl0JyB9XG4gICAgXVxuICB9LFxuICAvLyB7IHJvbGU6ICdlZGl0TWVudScgfVxuICB7XG4gICAgbGFiZWw6ICdFZGl0YW1lJyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6ICd1bmRvJyB9LFxuICAgICAgeyByb2xlOiAncmVkbycgfSxcbiAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgIHsgcm9sZTogJ2N1dCcgfSxcbiAgICAgIHsgcm9sZTogJ2NvcHknIH0sXG4gICAgICB7IHJvbGU6ICdwYXN0ZScgfSxcbiAgICAgIC4uLihpc01hY1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIHsgcm9sZTogJ3Bhc3RlQW5kTWF0Y2hTdHlsZScgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ2RlbGV0ZScgfSxcbiAgICAgICAgICAgIHsgcm9sZTogJ3NlbGVjdEFsbCcgfSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdTcGVlY2gnLFxuICAgICAgICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnc3RhcnRTcGVha2luZycgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdzdG9wU3BlYWtpbmcnIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICB7IHJvbGU6ICdkZWxldGUnIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICB7IHJvbGU6ICdzZWxlY3RBbGwnIH1cbiAgICAgICAgICBdKVxuICAgIF1cbiAgfSxcbiAgLy8geyByb2xlOiAndmlld01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiAnVmlldycsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiAncmVsb2FkJyB9LFxuICAgICAgeyByb2xlOiAnZm9yY2VSZWxvYWQnIH0sXG4gICAgICB7IHJvbGU6ICd0b2dnbGVEZXZUb29scycgfSxcbiAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgIHsgcm9sZTogJ3Jlc2V0Wm9vbScgfSxcbiAgICAgIHsgcm9sZTogJ3pvb21JbicgfSxcbiAgICAgIHsgcm9sZTogJ3pvb21PdXQnIH0sXG4gICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICB7IHJvbGU6ICd0b2dnbGVmdWxsc2NyZWVuJyB9XG4gICAgXVxuICB9LFxuICAvLyB7IHJvbGU6ICd3aW5kb3dNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogJ1dpbmRvdycsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiAnbWluaW1pemUnIH0sXG4gICAgICB7IHJvbGU6ICd6b29tJyB9LFxuICAgICAgLi4uKGlzTWFjXG4gICAgICAgID8gW1xuICAgICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgeyByb2xlOiAnZnJvbnQnIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICB7IHJvbGU6ICd3aW5kb3cnIH1cbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgeyByb2xlOiAnY2xvc2UnIH1cbiAgICAgICAgICBdKVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHJvbGU6ICdoZWxwJyxcbiAgICBzdWJtZW51OiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgICAgIGNsaWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzaGVsbCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuICAgICAgICAgIGF3YWl0IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLElBQUFBLG1CQUF5QztBQUN6QyxrQkFBaUI7QUFDakIsZ0JBQWU7OztBQ1ZmLHNCQUFvQjtBQUVwQixJQUFNLFFBQVEsUUFBUSxhQUFhO0FBSTVCLElBQU0sZUFBZTtBQUFBLEVBRTFCLEdBQUksUUFDQSxDQUFDO0FBQUEsSUFDQyxPQUFPLG9CQUFJO0FBQUEsSUFDWCxTQUFTO0FBQUEsTUFDUCxFQUFFLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxN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WUFBQUMsUUFBSyxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsSUFDOUMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUVsQixTQUFTLFlBQUFBLFFBQUssUUFBUSxXQUFXLHlFQUFtQztBQUFBLElBQ3RFO0FBQUEsRUFDRixDQUFDO0FBRUQsYUFBVyxRQUFRLHVCQUFtQjtBQUV0QyxNQUFJLE1BQXVCO0FBRXpCLGVBQVcsWUFBWSxhQUFhO0FBQUEsRUFDdEMsT0FBTztBQUVMLGVBQVcsWUFBWSxHQUFHLG1CQUFtQixNQUFNO0FBQ2pELGlCQUFXLFlBQVksY0FBYztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBRUEsYUFBVyxHQUFHLFVBQVUsTUFBTTtBQUM1QixpQkFBYTtBQUFBLEVBQ2YsQ0FBQztBQUVELHdCQUFLLG1CQUFtQixJQUFJO0FBQzlCLENBQUM7QUFNRCxxQkFBSSxHQUFHLHFCQUFxQixNQUFNO0FBQ2hDLHVCQUFJLEtBQUs7QUFDWCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZWxlY3Ryb24iLCAib3MiLCAicGF0aCJdCn0K
