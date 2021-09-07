const div1 = document.getElementsByTagName('div')[0];
const categories1 = document.getElementById('categories');
const ulEl = document.getElementsByTagName('ul')
const inputEl = document.getElementById('product');


let a = function (){
    let narx = Math.floor(Math.random() * 100) + '$';
    return narx 
 } 
function categ(){
     const divEl = document.createElement('div')
     const imgEl = document.createElement('img');
     const textEl = document.createElement('p');
     const spanEl = document.createElement('span')
     console.log(inputEl.value)
     divEl.className = 'card'
     textEl.innerText = inputEl.value;
     inputEl.value = '';
     spanEl.innerText = a();
     imgEl.src = "https://i.pravatar.cc/300"
     div1.appendChild(divEl);
     divEl.appendChild(imgEl);
     divEl.appendChild(textEl);
     divEl.appendChild(spanEl)
}

function poisk(){
    if(ulEl[0].style.display == 'block'){
        ulEl[0].style.display = 'none' 
    }
    else {
        ulEl[0].style.display = 'block'
    }
}




