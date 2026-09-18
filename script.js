const video=document.querySelector('.bg');
if(video){video.muted=true;video.playsInline=true;const p=video.play();if(p&&p.catch)p.catch(()=>{});}
