const container = document.querySelector('.container')
function eval()
{
var task="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
fetch(task).then(res=>{
return res.json()
} )
.then(json=>{
console.log(json)
cards(json)
})
}
eval()
function cards(json)
{
json.forEach( (val)=>
{

const inner =document.createElement('div')
inner.classList.add('inner')
var image=document.createElement('img')
image.src=val.image

var title = document.createElement('h2')
title.innerHTML=val.name

var price = document.createElement('h3')
price.innerHTML='PRICE'+':'+' '+val.current_price

container.appendChild(inner)
inner.appendChild(image)
inner.appendChild(title)
inner.appendChild(price)

})
}