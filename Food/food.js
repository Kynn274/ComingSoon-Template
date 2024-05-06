var Open=document.getElementById('open');
var Close=document.getElementById('close');
var Close1=document.getElementById('close1');
var Close2=document.getElementById('close2');
var item=document.getElementById('sidebar');
Open.addEventListener('click',function(){
    item.style.display='block';
});
Close.addEventListener('click',function(){
    item.style.display='none'
});
Close1.addEventListener('click',function(){
    item.style.display='none'
});
Close2.addEventListener('click',function(){
    item.style.display='none'
});
