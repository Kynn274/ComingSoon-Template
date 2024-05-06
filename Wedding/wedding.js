var button1=document.getElementById('bt1');
var button2=document.getElementById('bt2');
var form=document.getElementById('form');
var RSVPbt=document.getElementById('RSVP-bt');
button1.addEventListener('click',function(){
    form.style.display='none';
});
RSVPbt.addEventListener('click',function(){
    form.style.display='block';
});
button2.addEventListener('click',function(){
    form.style.display='none';
});
