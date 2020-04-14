videoArr = [
            {id: 1, username: 'Cartoon Penguin', userimg: 'assets/media/image-1.png', videourl: 'assets/media/clip-1.mp4', gamename: 'FireFly', parlorname: 'KopanVR', descone:'Had a blast yesterday at KopanVR and scores 87', desctwo: 'Can you beat it? hahaha Follow for more...'},
            {id: 2, username: 'Little Penguin', userimg: 'assets/media/image-2.png', videourl: 'assets/media/clip-2.mp4', gamename: 'Pavlov', parlorname: 'VivianVR', descone:'Had so much fun at the arcade', desctwo: 'Checkout game on steam. '},
            {id: 3, username: 'Yellow-Eyed Penguin', userimg: 'assets/media/image-3.png', videourl: 'assets/media/clip-3.mp4', gamename: 'Shadow-Legend', parlorname: 'Arena-Space', descone:'Had so much fun playing Shadow Legend', desctwo: 'Checkout game on steam. '},
            {id: 4, username: 'Snares Penguin', userimg: 'assets/media/image-4.png', videourl: 'assets/media/clip-4.mp4', gamename: 'Boneworks', parlorname: 'MK2 VR', descone:'Had so much fun playing Shadow Legend at MK2 VR', desctwo: 'Checkout game on steam. '},
            {id: 5, username: 'Emperor Penguin', userimg: 'assets/media/image-5.png', videourl: 'assets/media/clip-5.mp4', gamename: 'Counter-Fight', parlorname: 'VivianVR', descone:'Had so much fun playing at VivianVR', desctwo: 'Checkout game on steam. '}
            ];
//https://codepen.io/butlerx/details/xgGaWr

let sliderIndex = 0;
let preIn = videoArr.length-1;
let postIn = 1;
console.log(videoArr);  
let rightElem = document.querySelector('.right-arrow');
let leftElem = document.querySelector('.left-arrow');
let introElem = document.querySelector('.intro-content');
let descElem = document.querySelector('.desc-content');
let videoElem = document.querySelector('.video-bg');
let prevVidElem = document.querySelector('.video-prev');
let nextVidElem = document.querySelector('.video-next');
let mql = window.matchMedia('(max-width: 800px)');

rightElem.addEventListener('click', next);
leftElem.addEventListener('click', previous);
mql.addListener(handleWidthChange);
function handleWidthChange(event) {
    if(event.matches){
        prevVidElem.visibility = 'visible';
        nextVidElem.visibility = 'hidden';
        console.log('Yes');
    }
    else
    {
        console.log('No');
    }
}
function next(event){
    //event.preventDefault();
    console.log('dsdas');
    preIn = sliderIndex;
    sliderIndex++;
    if(sliderIndex == videoArr.length)
        sliderIndex = 0;
    
    console.log(sliderIndex);
    
    postIn = sliderIndex + 1;
    if(postIn == videoArr.length)
        postIn = 0;
    loadNewSliders(sliderIndex);
}
function previous(event){
    //event.preventDefault();
    console.log('dsdas');
    postIn = sliderIndex;
    if(sliderIndex == 0)
        sliderIndex = videoArr.length-1;
    else
        sliderIndex--;
    console.log(sliderIndex);
    postIn = sliderIndex - 1;
    if(postIn == -1)
        postIn = videoArr.length-1;
    loadNewSliders(sliderIndex);
}
function loadNewSliders(sliderIndex){
    introElem.innerHTML = 
    `<div class='user-img-div'>
        <div class='img-circle'>
        <img class='user-img' src=${videoArr[sliderIndex].userimg}>
        </div>
        </div>
        <div class='user-info-one'>
            <h3 class='user-name'>${videoArr[sliderIndex].username}</h3>
            <input class='follow-btn' type='button' value='follow'>
        </div>
        <div class='user-info-two'>
            <p class='game-info'> 
                Playing
                <span class='game-span'>
                    <a class='game-link'>${videoArr[sliderIndex].gamename}</a>
                </span> 
                at 
                <span class='game-span'>
                    <a class='arcade-link'>${videoArr[sliderIndex].parlorname}</a>
                </span>
            </p>
    </div>`
    descElem.innerHTML = 
   `<p>${videoArr[sliderIndex].descone}</p>
    <p>${videoArr[sliderIndex].desctwo}</p>  `;
    videoElem.setAttribute('src', videoArr[sliderIndex].videourl);
    
    console.log(preIn, postIn);
    prevVidElem.setAttribute('src', videoArr[preIn].videourl );
    nextVidElem.setAttribute('src', videoArr[postIn].videourl );
}