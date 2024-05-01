let imgs_a=document.querySelectorAll(".img_a");

let imgId=1;

imgs_a.forEach((img)=>{

    img.addEventListener("click",(e)=>{
     
        e.preventDefault();
        imgId=img.dataset.id;
       
        moveimg();

    });
});

function  moveimg(){


  let firstimg=document.querySelector(".main_img img:first-child").clientWidth;
     
    let width=(imgId-1)*firstimg;
   
    document.querySelector(".main_img").style.transform=`translateX(${-width}px)`;

}