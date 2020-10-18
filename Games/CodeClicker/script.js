let data

if (getCookie("GameData") != "" && getCookie("GameData") != null) {
  data = JSON.parse(atob(getCookie("GameData")))
  refreshHTML()
} else {
  data = {}
  data.score = 0;
  data.clickLevel = 1;
  data.upgradeCost = 50;
  data.coderCost = 1000;
  data.superUpgradeCost = 750;
  data.coders = 0;
  data.coderLevel = 1;
  data.coderUpgradeCost = 1250;
  data.rebirths = 1;
  data.rebirthCost = 1000000;
}

//Totally not stolen code from the internet for cookies :)
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/Games/CodeClicker/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addScore() {
  data.score = data.score + data.clickLevel * data.rebirths;
  refreshHTML()
}

function upgradeClick() {
  if (data.score >= data.upgradeCost) {
    data.clickLevel++
    data.score = data.score - data.upgradeCost
    data.upgradeCost = data.upgradeCost +10;
    refreshHTML()
  }
}

function superUpgrade() {
  if (data.score >= data.superUpgradeCost) {
    data.clickLevel = data.clickLevel +10;
    data.score = data.score - data.superUpgradeCost
    data.superUpgradeCost = data.superUpgradeCost +250;
    refreshHTML()
  }
}

function buyClicker() {
  if (data.score >= data.coderCost) {
    data.coders++
    data.score = data.score - data.coderCost
    data.coderCost = data.coderCost +200;
    refreshHTML()
    gameLoop()
  }
}

function upgradeCoder() {
  if (data.score >= data.coderUpgradeCost) {
    data.coderLevel++
    data.score = data.score - data.coderUpgradeCost
    data.coderUpgradeCost = data.coderUpgradeCost +300;
    refreshHTML()
  }
}

function rebirth() {
  if (data.score >= data.rebirthCost) {
    data.rebirths++
    data.rebirthCost = 100000000;
    data.score = 0;
    data.clickLevel = 1;
    data.upgradeCost = 50;
    data.coderCost = 1000;
    data.superUpgradeCost = 750;
    data.coders = 0;
    data.coderLevel = 1;
    data.coderUpgradeCost = 1250;
    refreshHTML()
  }
}

function refreshHTML() {
  document.getElementById("linescoded").innerHTML = 
  "Lines Coded:" + data.score; 
  document.getElementById("level").innerHTML = 
  "Level:" + data.clickLevel;
  document.getElementById("coderCost").innerHTML = 
  "Cost to Buy Coders:" + data.coderCost;
  document.getElementById("coders").innerHTML = 
  "Coders:" + data.coders;
  document.getElementById("coderLevel").innerHTML = 
  "Coder Level:" + data.coderLevel;
  document.getElementById("coderUpgradeCost").innerHTML = "Cost to Upgrade Coders:" + data.coderUpgradeCost;
  document.getElementById("upgradeCost").innerHTML = 
  "Cost to Upgrade:" + data.upgradeCost;
  document.getElementById("superUpgradeCost").innerHTML = "Cost to Super Upgrade:" + data.superUpgradeCost;
  document.getElementById("rebirthLevel").innerHTML =  "Rebirths:" + data.rebirths;
  document.getElementById("rebirthCost").innerHTML = "Rebirth Cost:" + data.rebirthCost;
  setCookie("GameData", btoa(JSON.stringify(data)), 3650)
}

function gameLoop() {
  data.score = data.score + data.coders * data.coderLevel * data.rebirths;
  refreshHTML()
  setTimeout(gameLoop, 1000)
}