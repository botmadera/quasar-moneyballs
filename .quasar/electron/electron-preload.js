// src-electron/electron-preload.js
var import_electron = require("electron");
import_electron.contextBridge.exposeInMainWorld(
  "ipcRenderer",
  {
    on: (message, func) => {
      return import_electron.ipcRenderer.on(message, () => {
        func();
      });
    },
    send: (message, data) => {
      import_electron.ipcRenderer.send(message, data);
    }
  }
);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLXByZWxvYWQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogVGhpcyBmaWxlIGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciBzZWN1cml0eSByZWFzb25zLlxuICogSGVyZSB5b3UgY2FuIGFjY2VzcyBOb2RlanMgc3R1ZmYgYW5kIGluamVjdCBmdW5jdGlvbmFsaXR5IGludG9cbiAqIHRoZSByZW5kZXJlciB0aHJlYWQgKGFjY2Vzc2libGUgdGhlcmUgdGhyb3VnaCB0aGUgXCJ3aW5kb3dcIiBvYmplY3QpXG4gKlxuICogV0FSTklORyFcbiAqIElmIHlvdSBpbXBvcnQgYW55dGhpbmcgZnJvbSBub2RlX21vZHVsZXMsIHRoZW4gbWFrZSBzdXJlIHRoYXQgdGhlIHBhY2thZ2UgaXMgc3BlY2lmaWVkXG4gKiBpbiBwYWNrYWdlLmpzb24gPiBkZXBlbmRlbmNpZXMgYW5kIE5PVCBpbiBkZXZEZXBlbmRlbmNpZXNcbiAqXG4gKiBFeGFtcGxlIChpbmplY3RzIHdpbmRvdy5teUFQSS5kb0FUaGluZygpIGludG8gcmVuZGVyZXIgdGhyZWFkKTpcbiAqXG4gKiAgIGltcG9ydCB7IGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbidcbiAqXG4gKiAgIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ215QVBJJywge1xuICogICAgIGRvQVRoaW5nOiAoKSA9PiB7fVxuICogICB9KVxuICpcbiAqIFdBUk5JTkchXG4gKiBJZiBhY2Nlc3NpbmcgTm9kZSBmdW5jdGlvbmFsaXR5IChsaWtlIGltcG9ydGluZyBAZWxlY3Ryb24vcmVtb3RlKSB0aGVuIGluIHlvdXJcbiAqIGVsZWN0cm9uLW1haW4uanMgeW91IHdpbGwgbmVlZCB0byBzZXQgdGhlIGZvbGxvd2luZyB3aGVuIHlvdSBpbnN0YW50aWF0ZSBCcm93c2VyV2luZG93OlxuICpcbiAqIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gKiAgIC8vIC4uLlxuICogICB3ZWJQcmVmZXJlbmNlczoge1xuICogICAgIC8vIC4uLlxuICogICAgIHNhbmRib3g6IGZhbHNlIC8vIDwtLSB0byBiZSBhYmxlIHRvIGltcG9ydCBAZWxlY3Ryb24vcmVtb3RlIGluIHByZWxvYWQgc2NyaXB0XG4gKiAgIH1cbiAqIH1cbiAqL1xuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZChcImlwY1JlbmRlcmVyXCIsIHsgXG4gICAgICAgIG9uOiAobWVzc2FnZSwgZnVuYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlwY1JlbmRlcmVyLm9uKG1lc3NhZ2UsICgpPT57XG4gICAgICAgICAgICAgICAgZnVuYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbmQ6IChtZXNzYWdlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpcGNSZW5kZXJlci5zZW5kKG1lc3NhZ2UsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUE2QkEsc0JBQTJDO0FBRTNDLDhCQUFjO0FBQUEsRUFBa0I7QUFBQSxFQUFlO0FBQUEsSUFDdkMsSUFBSSxDQUFDLFNBQVMsU0FBUztBQUNuQixhQUFPLDRCQUFZLEdBQUcsU0FBUyxNQUFJO0FBQy9CLGFBQUs7QUFBQSxNQUNULENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxNQUFNLENBQUMsU0FBUyxTQUFTO0FBQ3JCLGtDQUFZLEtBQUssU0FBUyxJQUFJO0FBQUEsSUFDbEM7QUFBQSxFQUNKO0FBQ0o7IiwKICAibmFtZXMiOiBbXQp9Cg==
