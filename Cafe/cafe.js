var eatButton=document.getElementById('eat-button');
var drinkButton=document.getElementById('drink-button');
var eatMenu=document.getElementById('eat-menu');
var drinkMenu=document.getElementById('drink-menu');
var eatTitle=document.getElementById('eat-title');
var drinkTitle=document.getElementById('drink-title');

eatButton.addEventListener('click',()=>{
    eatMenu.style.display='inline-block';      
    eatTitle.style.backgroundColor='#616161';
    eatTitle.style.color='#fff';
    drinkMenu.style.display='none';
    drinkTitle.style.backgroundColor='#fdf5e6';
    drinkTitle.style.color='#000';
});
drinkButton.addEventListener('click',()=>{
    drinkMenu.style.display='inline-block';   
    drinkTitle.style.backgroundColor='#616161';
    drinkTitle.style.color='#fff';
    eatMenu.style.display='none';
    eatTitle.style.backgroundColor='#fdf5e6';
    eatTitle.style.color='#000';
});
