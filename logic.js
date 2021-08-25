'use strict';
let clock =setInterval(() => {
 let d = new Date();
 let htime = d.getHours();
 let mtime = d.getMinutes();
 let stime = d.getSeconds();
 let hrotate=30*htime + mtime/2;
 let mrotate=6*mtime;
 let srotate=6*stime;

hours.style.transform=`rotate(${hrotate}deg)`;
minutes.style.transform=`rotate(${mrotate}deg)`;
seconds.style.transform=`rotate(${srotate}deg)`;

}, 1000);
