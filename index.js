// var cont=document.getElementsByClassName(".shareProfile");
let cont=document.getElementById("shareProfile");
let nam=document.getElementById("name");
let skill=document.getElementById('pos');
function share(){
     if (cont.style.display === 'none' && nam.style.visibility==='visible' && skill.style.visibility==='visible') {
          cont.style.display = 'block';
          nam.style.visibility='hidden';
          skill.style.visibility='hidden';
     } else {
          cont.style.display = 'none';
          nam.style.visibility='visible';
          skill.style.visibility='visible';
     }
}
console.log("chal rhi h");
console.log(cont);
console.log(nam);