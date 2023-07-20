image=["car.jpg","car2.jpg","car3.jpg","car4.jpg"];

x=0;
window.onload=()=>{
    slide.style.backgroundImage="url(./image/"+image[x]+")";
    slider();
}

function slider(){
    box1.style.backgroundImage="url(./image/"+image[x]+")";
    box2.style.backgroundImage="url(./image/"+image[x+1]+")";
    box3.style.backgroundImage="url(./image/"+image[x+2]+")";
    box4.style.backgroundImage="url(./image/"+image[x+3]+")";
}


box1.onclick=()=>{
    slide.style.backgroundImage="url(./image/"+image[x]+")";
}
box2.onclick=()=>{
    slide.style.backgroundImage="url(./image/"+image[x+1]+")";
}
box3.onclick=()=>{
    slide.style.backgroundImage="url(./image/"+image[x+2]+")";
}
box4.onclick=()=>{
    slide.style.backgroundImage="url(./image/"+image[x+3]+")";
}