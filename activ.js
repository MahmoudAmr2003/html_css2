let images=document.querySelectorAll('.postimg img');
let cover=document.getElementById('showImage');
let theImage=document.getElementById('theImage');

console.log(images);
images.forEach((img)=>{
    img.addEventListener('click',function(e){
console.log(e.target);
let src=e.target.src;
cover.style.display='block';
theImage.src=src;

    })
})

function hideImage()
{
    
    cover.style.display='none'
}