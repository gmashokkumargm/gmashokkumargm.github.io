var dt = new Date();

document.getElementById("datetime").innerHTML = (("0"+(dt.getDate())).slice(-2)) +"-"+ (("0"+dt.getMonth()+2).slice(-2)) +"-"+ (dt.getFullYear());
