const form = document.querySelector('.form')
const imgUrl = document.querySelector('.imgUrl')
const topText = document.querySelector('.topText')
const btmText = document.querySelector('.bottomText')
const memeBox = document.querySelector('#memeBox')
const warning = document.getElementsByClassName('warning');

let meme = document.createElement('div');

if(form){
  noWarning();
}

console.log(warning);
form.addEventListener('submit', function(event){
  event.preventDefault();
  
  //validate images
let imgVal = imgUrl.value;

validImg(imgVal);

  function validImg(str) {
    let arr =["jpg", "jpeg", "png", 'gif'];

        for(i of arr){
          if(str.includes(i) > 0){
            noWarning();
            
              //create span 
              let meme = document.createElement('div')
              meme.className = 'meme';

              //inserting image
              let img = document.createElement('img');
              img.className = 'img';
              img.src = imgUrl.value;
              meme.append(img)

              //insert top/bottom text
              let text1 = document.createElement('div');
              let text2 = document.createElement('div');

              text1.className = 'top';
              text2.className ='btm';

              text1.innerText = topText.value;
              meme.append(text1)

              text2.innerText = btmText.value;
              meme.append(text2)
              
              memeBox.append(meme)

              form.reset();
              return;
          }
        }
        warning[0].style.display = 'initial';
        warning[1].style.display = 'initial';
        
        }
        return;
  });

memeBox.addEventListener('dblclick',function(e){
  console.log(e)
  if(e.target.className === 'img' || 'top' || 'btm'){
    e.target.parentElement.remove();
  }
})


function noWarning() {
  warning[0].style.display = 'none';
  warning[1].style.display = 'none';
}


// //matching pic format
// let str = 'https://dodo.ac/np/images/thumb/b/b8/Winnie_NH.png/150px-Winnie_NH.png'
// function word(str) {
//   let arr =["jpg", "jpeg", "png", 'gif'];

//       for(i of arr){
//        if(str.includes(i) > 0){
//          console.log('there is a match');
//          return;
//        }
//        else {
//          console.log('there is no match');
         
//        }
//        }
