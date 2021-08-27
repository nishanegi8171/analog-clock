'use strict';
setInterval(() => {
    var d = new Date();
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();
    var hrotate=30*htime + mtime/2;
    var mrotate=6*mtime;
    var srotate=6*stime;

hours.style.transform=`rotate(${hrotate}deg)`;
minutes.style.transform=`rotate(${mrotate}deg)`;
seconds.style.transform=`rotate(${srotate}deg)`;

}, 1000);
