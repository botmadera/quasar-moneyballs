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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiLCAiLi4vLi4vc3JjLWVsZWN0cm9uL21lbnUvbWVudS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51IH0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0IHsgbWVudVRlbXBsYXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XG5cbi8vIG5lZWRlZCBpbiBjYXNlIHByb2Nlc3MgaXMgdW5kZWZpbmVkIHVuZGVyIExpbnV4XG5cbmNvbnN0IG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKG1lbnVUZW1wbGF0ZSk7XG5cbmxldCBtYWluV2luZG93O1xuXG4vKlxuICBhcHAgcmVhZHlcbiovXG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgLyoqXG4gICAqIEluaXRpYWwgd2luZG93IG9wdGlvbnNcbiAgICovXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgaWNvbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpY29ucy9pY29uLnBuZ1wiKSwgLy8gdHJheSBpY29uXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgbWluV2lkdGg6IDc2OCxcbiAgICBtaW5IZWlnaHQ6IDUxMixcbiAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly92Mi5xdWFzYXIuZGV2L3F1YXNhci1jbGktdml0ZS9kZXZlbG9waW5nLWVsZWN0cm9uLWFwcHMvZWxlY3Ryb24tcHJlbG9hZC1zY3JpcHRcbiAgICAgIHByZWxvYWQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHByb2Nlc3MuZW52LlFVQVNBUl9FTEVDVFJPTl9QUkVMT0FEKSxcbiAgICB9LFxuICB9KTtcblxuICBtYWluV2luZG93LmxvYWRVUkwocHJvY2Vzcy5lbnYuQVBQX1VSTCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52LkRFQlVHR0lORykge1xuICAgIC8vIGlmIG9uIERFViBvciBQcm9kdWN0aW9uIHdpdGggZGVidWcgZW5hYmxlZFxuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gd2UncmUgb24gcHJvZHVjdGlvbjsgbm8gYWNjZXNzIHRvIGRldnRvb2xzIHBsc1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oXCJkZXZ0b29scy1vcGVuZWRcIiwgKCkgPT4ge1xuICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5jbG9zZURldlRvb2xzKCk7XG4gICAgfSk7XG4gIH1cblxuICBtYWluV2luZG93Lm9uKFwiY2xvc2VkXCIsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbDtcbiAgfSk7XG5cbiAgTWVudS5zZXRBcHBsaWNhdGlvbk1lbnUobWVudSk7XG59KTtcblxuLyogXG4gIEV2ZW50cyBcbiovXG5cbmFwcC5vbihcIndpbmRvdy1hbGwtY2xvc2VkXCIsICgpID0+IHtcbiAgYXBwLnF1aXQoKTtcbn0pO1xuXG5hcHAub24oXCJhY3RpdmF0ZVwiLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XG4gICAgY3JlYXRlV2luZG93KCk7XG4gIH1cbn0pO1xuIiwgImltcG9ydCB7IGFwcCB9IGZyb20gXCJlbGVjdHJvblwiO1xuXG5cbi8qIE1FTlUgKi9cbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpO1xuY29uc3QgaXNNYWMgPSBwbGF0Zm9ybSA9PT0gXCJkYXJ3aW5cIjtcblxuZXhwb3J0IGNvbnN0IG1lbnVUZW1wbGF0ZSA9IFtcbiAgLy8geyByb2xlOiAnYXBwTWVudScgfVxuICAuLi4oaXNNYWNcbiAgICA/IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBhcHAubmFtZSxcbiAgICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICB7IHJvbGU6IFwiYWJvdXRcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwic2VydmljZXNcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwiaGlkZVwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwiaGlkZU90aGVyc1wiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwidW5oaWRlXCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInF1aXRcIiB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgOiBbXSksXG4gIC8vIHsgcm9sZTogJ2ZpbGVNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogXCJGaWxlXCIsXG4gICAgc3VibWVudTogW2lzTWFjID8geyByb2xlOiBcImNsb3NlXCIgfSA6IHsgcm9sZTogXCJxdWl0XCIgfV0sXG4gIH0sXG4gIC8vIHsgcm9sZTogJ2VkaXRNZW51JyB9XG4gIHtcbiAgICBsYWJlbDogXCJFZGl0XCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcInVuZG9cIiB9LFxuICAgICAgeyByb2xlOiBcInJlZG9cIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwiY3V0XCIgfSxcbiAgICAgIHsgcm9sZTogXCJjb3B5XCIgfSxcbiAgICAgIHsgcm9sZTogXCJwYXN0ZVwiIH0sXG4gICAgICAuLi4oaXNNYWNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7IHJvbGU6IFwicGFzdGVBbmRNYXRjaFN0eWxlXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJkZWxldGVcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInNlbGVjdEFsbFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU3BlZWNoXCIsXG4gICAgICAgICAgICAgIHN1Ym1lbnU6IFt7IHJvbGU6IFwic3RhcnRTcGVha2luZ1wiIH0sIHsgcm9sZTogXCJzdG9wU3BlYWtpbmdcIiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICA6IFt7IHJvbGU6IFwiZGVsZXRlXCIgfSwgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sIHsgcm9sZTogXCJzZWxlY3RBbGxcIiB9XSksXG4gICAgXSxcbiAgfSxcbiAgLy8geyByb2xlOiAndmlld01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIlZpZXdcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6IFwicmVsb2FkXCIgfSxcbiAgICAgIHsgcm9sZTogXCJmb3JjZVJlbG9hZFwiIH0sXG4gICAgICB7IHJvbGU6IFwidG9nZ2xlRGV2VG9vbHNcIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwicmVzZXRab29tXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tSW5cIiB9LFxuICAgICAgeyByb2xlOiBcInpvb21PdXRcIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwidG9nZ2xlZnVsbHNjcmVlblwiIH0sXG4gICAgXSxcbiAgfSxcbiAgLy8geyByb2xlOiAnd2luZG93TWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiV2luZG93XCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcIm1pbmltaXplXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tXCIgfSxcbiAgICAgIC4uLihpc01hY1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImZyb250XCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcIndpbmRvd1wiIH0sXG4gICAgICAgICAgXVxuICAgICAgICA6IFt7IHJvbGU6IFwiY2xvc2VcIiB9XSksXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHJvbGU6IFwiaGVscFwiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiTGVhcm4gTW9yZVwiLFxuICAgICAgICBjbGljazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc2hlbGwgfSA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTtcbiAgICAgICAgICBhd2FpdCBzaGVsbC5vcGVuRXh0ZXJuYWwoXCJodHRwczovL2VsZWN0cm9uanMub3JnXCIpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQXlDO0FBQ3pDLGtCQUFpQjs7O0FDRGpCLHNCQUFvQjtBQUlwQixJQUFNLFdBQVcsUUFBUSxZQUFZLEdBQUcsU0FBUztBQUNqRCxJQUFNLFFBQVEsYUFBYTtBQUVwQixJQUFNLGVBQWU7QUFBQSxFQUUxQixHQUFJLFFBQ0E7QUFBQSxJQUNFO0FBQUEsTUFDRSxPQUFPLG9CQUFJO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxFQUFFLE1BQU0sUUFBUTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxZQUFZO0FBQUEsUUFDcEIsRUFBRSxNQUFNLFdBQVc7QUFBQSxRQUNuQixFQUFFLE1BQU0sWUFBWTtBQUFBLFFBQ3BCLEVBQUUsTUFBTSxPQUFPO0FBQUEsUUFDZixFQUFFLE1BQU0sYUFBYTtBQUFBLFFBQ3JCLEVBQUUsTUFBTSxTQUFTO0FBQUEsUUFDakIsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsSUFDQSxDQUFDO0FBQUEsRUFFTDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEQ7QUFBQSxFQUVBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUCxFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ2YsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNmLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLE1BQU07QUFBQSxNQUNkLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDZixFQUFFLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLEdBQUksUUFDQTtBQUFBLFFBQ0UsRUFBRSxNQUFNLHFCQUFxQjtBQUFBLFFBQzdCLEVBQUUsTUFBTSxTQUFTO0FBQUEsUUFDakIsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sWUFBWTtBQUFBLFFBQ3BCO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTLENBQUMsRUFBRSxNQUFNLGdCQUFnQixHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFBQSxRQUMvRDtBQUFBLE1BQ0YsSUFDQSxDQUFDLEVBQUUsTUFBTSxTQUFTLEdBQUcsRUFBRSxNQUFNLFlBQVksR0FBRyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQUEsSUFDdkU7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1AsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNqQixFQUFFLE1BQU0sY0FBYztBQUFBLE1BQ3RCLEVBQUUsTUFBTSxpQkFBaUI7QUFBQSxNQUN6QixFQUFFLE1BQU0sWUFBWTtBQUFBLE1BQ3BCLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNqQixFQUFFLE1BQU0sVUFBVTtBQUFBLE1BQ2xCLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLG1CQUFtQjtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLEVBQUUsTUFBTSxXQUFXO0FBQUEsTUFDbkIsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNmLEdBQUksUUFDQTtBQUFBLFFBQ0UsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sUUFBUTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxZQUFZO0FBQUEsUUFDcEIsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNuQixJQUNBLENBQUMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPLFlBQVk7QUFDakIsZ0JBQU0sRUFBRSxNQUFNLElBQUksUUFBUTtBQUMxQixnQkFBTSxNQUFNLGFBQWEsd0JBQXdCO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FENUZBLElBQU0sT0FBTyxzQkFBSyxrQkFBa0IsWUFBWTtBQUVoRCxJQUFJO0FBTUoscUJBQUksVUFBVSxFQUFFLEtBQUssTUFBTTtBQUl6QixlQUFhLElBQUksK0JBQWM7QUFBQSxJQUM3QixNQUFNLFlBQUFDLFFBQUssUUFBUSxXQUFXLGdCQUFnQjtBQUFBLElBQzlDLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFFbEIsU0FBUyxZQUFBQSxRQUFLLFFBQVEsV0FBVyx5RUFBbUM7QUFBQSxJQUN0RTtBQUFBLEVBQ0YsQ0FBQztBQUVELGFBQVcsUUFBUSx1QkFBbUI7QUFFdEMsTUFBSSxNQUF1QjtBQUV6QixlQUFXLFlBQVksYUFBYTtBQUFBLEVBQ3RDLE9BQU87QUFFTCxlQUFXLFlBQVksR0FBRyxtQkFBbUIsTUFBTTtBQUNqRCxpQkFBVyxZQUFZLGNBQWM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsRUFDSDtBQUVBLGFBQVcsR0FBRyxVQUFVLE1BQU07QUFDNUIsaUJBQWE7QUFBQSxFQUNmLENBQUM7QUFFRCx3QkFBSyxtQkFBbUIsSUFBSTtBQUM5QixDQUFDO0FBTUQscUJBQUksR0FBRyxxQkFBcUIsTUFBTTtBQUNoQyx1QkFBSSxLQUFLO0FBQ1gsQ0FBQztBQUVELHFCQUFJLEdBQUcsWUFBWSxNQUFNO0FBQ3ZCLE1BQUksZUFBZSxNQUFNO0FBQ3ZCLGlCQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9lbGVjdHJvbiIsICJwYXRoIl0KfQo=
