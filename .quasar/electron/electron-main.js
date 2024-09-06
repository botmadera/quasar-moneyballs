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
    label: "EditK",
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
import_electron.app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgTWVudSB9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBvcyBmcm9tIFwib3NcIjtcblxuLy8gbmVlZGVkIGluIGNhc2UgcHJvY2VzcyBpcyB1bmRlZmluZWQgdW5kZXIgTGludXhcbmNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybSB8fCBvcy5wbGF0Zm9ybSgpO1xuXG5sZXQgbWFpbldpbmRvdztcblxuLyogTUVOVSAqL1xuY29uc3QgaXNNYWMgPSBwbGF0Zm9ybSA9PT0gXCJkYXJ3aW5cIjtcblxuY29uc3QgbWVudVRlbXBsYXRlID0gW1xuICAvLyB7IHJvbGU6ICdhcHBNZW51JyB9XG4gIC4uLihpc01hY1xuICAgID8gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGFwcC5uYW1lLFxuICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgIHsgcm9sZTogXCJhYm91dFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJzZXJ2aWNlc1wiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJoaWRlXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJoaWRlT3RoZXJzXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJ1bmhpZGVcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICAgICAgICB7IHJvbGU6IFwicXVpdFwiIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICA6IFtdKSxcbiAgLy8geyByb2xlOiAnZmlsZU1lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIkZpbGVcIixcbiAgICBzdWJtZW51OiBbaXNNYWMgPyB7IHJvbGU6IFwiY2xvc2VcIiB9IDogeyByb2xlOiBcInF1aXRcIiB9XSxcbiAgfSxcbiAgLy8geyByb2xlOiAnZWRpdE1lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIkVkaXRLXCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcInVuZG9cIiB9LFxuICAgICAgeyByb2xlOiBcInJlZG9cIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwiY3V0XCIgfSxcbiAgICAgIHsgcm9sZTogXCJjb3B5XCIgfSxcbiAgICAgIHsgcm9sZTogXCJwYXN0ZVwiIH0sXG4gICAgICAuLi4oaXNNYWNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7IHJvbGU6IFwicGFzdGVBbmRNYXRjaFN0eWxlXCIgfSxcbiAgICAgICAgICAgIHsgcm9sZTogXCJkZWxldGVcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcInNlbGVjdEFsbFwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU3BlZWNoXCIsXG4gICAgICAgICAgICAgIHN1Ym1lbnU6IFt7IHJvbGU6IFwic3RhcnRTcGVha2luZ1wiIH0sIHsgcm9sZTogXCJzdG9wU3BlYWtpbmdcIiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICA6IFt7IHJvbGU6IFwiZGVsZXRlXCIgfSwgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sIHsgcm9sZTogXCJzZWxlY3RBbGxcIiB9XSksXG4gICAgXSxcbiAgfSxcbiAgLy8geyByb2xlOiAndmlld01lbnUnIH1cbiAge1xuICAgIGxhYmVsOiBcIlZpZXdcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHJvbGU6IFwicmVsb2FkXCIgfSxcbiAgICAgIHsgcm9sZTogXCJmb3JjZVJlbG9hZFwiIH0sXG4gICAgICB7IHJvbGU6IFwidG9nZ2xlRGV2VG9vbHNcIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwicmVzZXRab29tXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tSW5cIiB9LFxuICAgICAgeyByb2xlOiBcInpvb21PdXRcIiB9LFxuICAgICAgeyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG4gICAgICB7IHJvbGU6IFwidG9nZ2xlZnVsbHNjcmVlblwiIH0sXG4gICAgXSxcbiAgfSxcbiAgLy8geyByb2xlOiAnd2luZG93TWVudScgfVxuICB7XG4gICAgbGFiZWw6IFwiV2luZG93XCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyByb2xlOiBcIm1pbmltaXplXCIgfSxcbiAgICAgIHsgcm9sZTogXCJ6b29tXCIgfSxcbiAgICAgIC4uLihpc01hY1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcImZyb250XCIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogXCJzZXBhcmF0b3JcIiB9LFxuICAgICAgICAgICAgeyByb2xlOiBcIndpbmRvd1wiIH0sXG4gICAgICAgICAgXVxuICAgICAgICA6IFt7IHJvbGU6IFwiY2xvc2VcIiB9XSksXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHJvbGU6IFwiaGVscFwiLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiTGVhcm4gTW9yZVwiLFxuICAgICAgICBjbGljazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc2hlbGwgfSA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTtcbiAgICAgICAgICBhd2FpdCBzaGVsbC5vcGVuRXh0ZXJuYWwoXCJodHRwczovL2VsZWN0cm9uanMub3JnXCIpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuY29uc3QgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUobWVudVRlbXBsYXRlKTtcblxuLypcbiAgYXBwIHJlYWR5XG4qL1xuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gIC8qKlxuICAgKiBJbml0aWFsIHdpbmRvdyBvcHRpb25zXG4gICAqL1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGljb246IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaWNvbnMvaWNvbi5wbmdcIiksIC8vIHRyYXkgaWNvblxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIG1pbldpZHRoOiA3NjgsXG4gICAgbWluSGVpZ2h0OiA1MTIsXG4gICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXG4gICAgICAvLyBNb3JlIGluZm86IGh0dHBzOi8vdjIucXVhc2FyLmRldi9xdWFzYXItY2xpLXZpdGUvZGV2ZWxvcGluZy1lbGVjdHJvbi1hcHBzL2VsZWN0cm9uLXByZWxvYWQtc2NyaXB0XG4gICAgICBwcmVsb2FkOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBwcm9jZXNzLmVudi5RVUFTQVJfRUxFQ1RST05fUFJFTE9BRCksXG4gICAgfSxcbiAgfSk7XG5cbiAgbWFpbldpbmRvdy5sb2FkVVJMKHByb2Nlc3MuZW52LkFQUF9VUkwpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAvLyBpZiBvbiBERVYgb3IgUHJvZHVjdGlvbiB3aXRoIGRlYnVnIGVuYWJsZWRcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHdlJ3JlIG9uIHByb2R1Y3Rpb247IG5vIGFjY2VzcyB0byBkZXZ0b29scyBwbHNcbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKFwiZGV2dG9vbHMtb3BlbmVkXCIsICgpID0+IHtcbiAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuY2xvc2VEZXZUb29scygpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFpbldpbmRvdy5vbihcImNsb3NlZFwiLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xuXG4gIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xufSk7XG5cbi8qIFxuICBFdmVudHMgXG4qL1xuXG5hcHAub24oXCJ3aW5kb3ctYWxsLWNsb3NlZFwiLCAoKSA9PiB7XG4gIGFwcC5xdWl0KCk7XG59KTtcblxuYXBwLm9uKFwiYWN0aXZhdGVcIiwgKCkgPT4ge1xuICBpZiAobWFpbldpbmRvdyA9PT0gbnVsbCkge1xuICAgIGNyZWF0ZVdpbmRvdygpO1xuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXlDO0FBQ3pDLGtCQUFpQjtBQUNqQixnQkFBZTtBQUdmLElBQU0sV0FBVyxRQUFRLFlBQVksVUFBQUEsUUFBRyxTQUFTO0FBRWpELElBQUk7QUFHSixJQUFNLFFBQVEsYUFBYTtBQUUzQixJQUFNLGVBQWU7QUFBQSxFQUVuQixHQUFJLFFBQ0E7QUFBQSxJQUNFO0FBQUEsTUFDRSxPQUFPLG9CQUFJO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxFQUFFLE1BQU0sUUFBUTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxZQUFZO0FBQUEsUUFDcEIsRUFBRSxNQUFNLFdBQVc7QUFBQSxRQUNuQixFQUFFLE1BQU0sWUFBWTtBQUFBLFFBQ3BCLEVBQUUsTUFBTSxPQUFPO0FBQUEsUUFDZixFQUFFLE1BQU0sYUFBYTtBQUFBLFFBQ3JCLEVBQUUsTUFBTSxTQUFTO0FBQUEsUUFDakIsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsSUFDQSxDQUFDO0FBQUEsRUFFTDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEQ7QUFBQSxFQUVBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUCxFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ2YsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNmLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLE1BQU07QUFBQSxNQUNkLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDZixFQUFFLE1BQU0sUUFBUTtBQUFBLE1BQ2hCLEdBQUksUUFDQTtBQUFBLFFBQ0UsRUFBRSxNQUFNLHFCQUFxQjtBQUFBLFFBQzdCLEVBQUUsTUFBTSxTQUFTO0FBQUEsUUFDakIsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sWUFBWTtBQUFBLFFBQ3BCO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxTQUFTLENBQUMsRUFBRSxNQUFNLGdCQUFnQixHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFBQSxRQUMvRDtBQUFBLE1BQ0YsSUFDQSxDQUFDLEVBQUUsTUFBTSxTQUFTLEdBQUcsRUFBRSxNQUFNLFlBQVksR0FBRyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQUEsSUFDdkU7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1AsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNqQixFQUFFLE1BQU0sY0FBYztBQUFBLE1BQ3RCLEVBQUUsTUFBTSxpQkFBaUI7QUFBQSxNQUN6QixFQUFFLE1BQU0sWUFBWTtBQUFBLE1BQ3BCLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNqQixFQUFFLE1BQU0sVUFBVTtBQUFBLE1BQ2xCLEVBQUUsTUFBTSxZQUFZO0FBQUEsTUFDcEIsRUFBRSxNQUFNLG1CQUFtQjtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLEVBQUUsTUFBTSxXQUFXO0FBQUEsTUFDbkIsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNmLEdBQUksUUFDQTtBQUFBLFFBQ0UsRUFBRSxNQUFNLFlBQVk7QUFBQSxRQUNwQixFQUFFLE1BQU0sUUFBUTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxZQUFZO0FBQUEsUUFDcEIsRUFBRSxNQUFNLFNBQVM7QUFBQSxNQUNuQixJQUNBLENBQUMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxPQUFPLFlBQVk7QUFDakIsZ0JBQU0sRUFBRSxNQUFNLElBQUksUUFBUTtBQUMxQixnQkFBTSxNQUFNLGFBQWEsd0JBQXdCO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU0sT0FBTyxxQkFBSyxrQkFBa0IsWUFBWTtBQU1oRCxvQkFBSSxVQUFVLEVBQUUsS0FBSyxNQUFNO0FBSXpCLGVBQWEsSUFBSSw4QkFBYztBQUFBLElBQzdCLE1BQU0sWUFBQUMsUUFBSyxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsSUFDOUMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUVsQixTQUFTLFlBQUFBLFFBQUssUUFBUSxXQUFXLHlFQUFtQztBQUFBLElBQ3RFO0FBQUEsRUFDRixDQUFDO0FBRUQsYUFBVyxRQUFRLHVCQUFtQjtBQUV0QyxNQUFJLE1BQXVCO0FBRXpCLGVBQVcsWUFBWSxhQUFhO0FBQUEsRUFDdEMsT0FBTztBQUVMLGVBQVcsWUFBWSxHQUFHLG1CQUFtQixNQUFNO0FBQ2pELGlCQUFXLFlBQVksY0FBYztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBRUEsYUFBVyxHQUFHLFVBQVUsTUFBTTtBQUM1QixpQkFBYTtBQUFBLEVBQ2YsQ0FBQztBQUVELHVCQUFLLG1CQUFtQixJQUFJO0FBQzlCLENBQUM7QUFNRCxvQkFBSSxHQUFHLHFCQUFxQixNQUFNO0FBQ2hDLHNCQUFJLEtBQUs7QUFDWCxDQUFDO0FBRUQsb0JBQUksR0FBRyxZQUFZLE1BQU07QUFDdkIsTUFBSSxlQUFlLE1BQU07QUFDdkIsaUJBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3MiLCAicGF0aCJdCn0K
