// List of JS files to be imported
const jsFiles = [
    "./data/gamedata.js",
    "./screens/home/logo.js",
    "./screens/startscreen/startscreen.js",
    "./screens/home/gamelist.js",
    "./screens/home/popularmeme.js",
    "./screens/home/buttons.js",
    "./screens/home/homescreen.js",
    "./screens/memepage/memepage.js",
    "./screens/memepage/gamememe.js",
    "./screens/memepage/selectedgame.js",
    "./screens/editmeme/selectedmeme.js",
    "./screens/editmeme/editpage.js",
    "./screens/editmeme/addtext.js",
    "./screens/editmeme/downloadmeme.js",
    "./screens/editmeme/backflow.js",
    "./screens/editmeme/textarea.js",
    "./screens/editmeme/gameasset.js",
    "./screens/editmeme/loadasset.js",
    "./screens/editmeme/gameassetpage.js",
    "./screens/editmeme/startEditingpage.js",
    "./screens/editmeme/buttons.js",
    "./screens/gameselection/gameselect.js",
    "./screens/gameselection/gameformeme.js",
   
    "constant.js",
    "ui.js",
  ];
  
  var cssFiles = [
   "ui.css",
   "./screens/home/index.css",
   "./screens/editmeme/index.css",
   "./screens/memepage/index.css",
   "./screens/gameselection/index.css",
   "./screens/startscreen/index.css"
    // Add more files as needed
  ];
  
  function loadJSFiles(callback) {
    var loadedCount = 0;
    for (var i = 0; i < jsFiles.length; i++) {
      var script = document.createElement("script");
      script.src = jsFiles[i];
      script.onload = function () {
        loadedCount++;
        if (loadedCount === jsFiles.length) {
          // All scripts are loaded, execute the callback
          callback();
        }
      };
      document.body.appendChild(script);
    }
  }
  
  function loadCSSFiles() {
    for (var i = 0; i < cssFiles.length; i++) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = cssFiles[i];
      document.head.appendChild(link);
    }
  }
  
  function scriptsLoaded() {
    console.log("ALL SCRIPTS LOADED");
    loadUi();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Call the function to load JS files and pass the callback
    loadJSFiles(scriptsLoaded);
    loadCSSFiles();
  });
  