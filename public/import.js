// List of JS files to be imported
const jsFiles = [
    "./screens/home/logo.js",
    "./screens/startscreen/startscreen.js",
    "./data/gamedata.js",
    "./screens/home/gamelist.js",
    "./screens/home/popularmeme.js",
    "./screens/home/buttons.js",
    "./screens/home/homescreen.js",
    "./screens/memepage/memepage.js",
    "./screens/memepage/gamememe.js",
    "./screens/memepage/selectedgame.js",
    "./screens/editmeme/selectedmeme.js",
    "./screens/editmeme/editpage.js",
    "./screens/editmeme/downloadmeme.js",
    "./screens/editmeme/backflow.js",
    "./screens/editmeme/textarea.js",
    "./screens/editmeme/gameasset.js",
    "./screens/editmeme/loadasset.js",
    "./screens/editmeme/gameassetpage.js",
    "./screens/editmeme/custombutton.js",
    "./screens/editmeme/buttonme.js",
    "./screens/component/buttonme/buttonme.js",
    "./screens/component/buttonme/buttonmusic.js",
    "./screens/component/buttonme/wavebutton.js",
    "./screens/component/buttonme/controlbutton.js",
    "./screens/component/buttonme/edittoolsbutton.js",
    "./screens/component/buttonme/normalbutton.js",
    "./screens/component/tagcontainer/tagcontainer.js",
    "./screens/component/tagcontainer/tempo.js",
    "./screens/editmeme/startEditingpage.js",
    "./screens/editmeme/buttonme.js",
    "./screens/gameselection/gameselect.js",
    "./screens/gameselection/gameformeme.js",
    "./screens/component/twobuttons/twobutton.js",
    "./screens/addmusic/addmusicpage.js",
    "./screens/component/dialogBox/dialogBox.js",
    "./screens/component/dialogBox/createtags.js",
    "./screens/component/backflow/backflow.js",
    "./screens/backscreen/backscreen.js",
    "./screens/musicselection/musicselection.js",
    "./screens/editmeme/buttons.js",
   
    "constant.js",
    "ui.js",
  ];
  
  var cssFiles = [
   "ui.css",
   "./screens/home/index.css",
   "./screens/editmeme/index.css",
   "./screens/memepage/index.css",
   "./screens/gameselection/index.css",
   "./screens/startscreen/index.css",
   "./screens/component/twobuttons/index.css",
   "./screens/component/dialogBox/index.css",
   "./screens/component/backflow/index.css",
   "./screens/component/buttonme/index.css",
   "./screens/component/tagcontainer/index.css",
   "./screens/addmusic/index.css",
   "./screens/backscreen/index.css",
   "./screens/musicselection/index.css",
  

    
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
  