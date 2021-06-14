let image1 = document.getElementsByClassName("img_1");
let image2 = document.getElementsByClassName("img_2");


let storedNum = [];
for(let i=0; i<image1.length;i++){
    image1[i].addEventListener('click',(event)=>{
        image1[i].style.zIndex = '-1';
        storedNum.push(i);
        console.log(storedNum);
        if(storedNum.length > 1){
            if( image2[storedNum[0]].getAttribute("class") != image2[storedNum[1]].getAttribute("class") ){
                storedNum.forEach( (value, index) => {
                    setTimeout( function() {
                        image1[value].style.zIndex = '1';
                    },2000);
                });
            }
            setTimeout(function(){storedNum = []},2100);
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


