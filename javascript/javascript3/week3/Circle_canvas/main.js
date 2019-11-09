const canvas = document.getElementById("myCanvas");
const getCtx = canvas.getContext("2d");
getCtx.beginPath();

const radius = 70;
getCtx.arc(200, 200, radius, 0, 2 * Math.PI);

getCtx.fillStyle = "red";
getCtx.fill();