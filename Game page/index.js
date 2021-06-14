let image1 = document.getElementsByClassName("img_1");
let image2 = document.getElementsByClassName("img_2");



let storedNum = [];
for(let i=0; i<image1.length;i++){
    image1[i].addEventListener('click',(event)=>{
        image1[i].style.zIndex = '-1';
        storedNum.push(i);
        if(storedNum.length == 2){
            if(image2[storedNum[0]].getAttribute("class") != image2[storedNum[1]].getAttribute("class")){
                image1[storedNum[0]].style.zIndex = '1';
                image1[storedNum[1]].style.zIndex = '1';
            }
            storedNum=[];
        }
    })
}


for(let i=0; i<image1.length;i++){
    image1[i].addEventListener('mouseover',(event)=>{
        if(image1[i].style.zIndex == '-1'){
            image1[i].style.transform = '';
        }
        else{
            image1[i].style.transform = 'scale(1.1) rotate(2deg)'; 
        }
    })
}

for(let i=0; i<image1.length;i++){
    image1[i].addEventListener('mouseleave',(event)=>{
        image1[i].style.transform = ''; 
    })
}