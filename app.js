
function openInvitation(){
 document.getElementById('envelope-screen').style.display='none';
 document.getElementById('invitation').classList.remove('hidden');
}

const target = new Date('2026-06-28T16:00:00').getTime();

function updateCountdown(){
 const now = Date.now();
 const diff = target-now;
 const el = document.getElementById('countdown');
 if(!el) return;

 if(diff<=0){
   el.innerHTML='¡Hoy es el gran día!';
   return;
 }
 const d=Math.floor(diff/86400000);
 const h=Math.floor((diff%86400000)/3600000);
 const m=Math.floor((diff%3600000)/60000);
 const s=Math.floor((diff%60000)/1000);
 el.innerHTML=`${d} días ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown,1000);
