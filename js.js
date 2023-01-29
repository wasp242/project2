const form = document.querySelector('.user-form');
const input = document.querySelector('input');
let deleteBtn = document.querySelector('.delete')
let div = document.querySelector('.to-do-list')
let sortDown = document.querySelector('.sort-down')
let sortUp = document.querySelector('.sort-up')
let value = document.querySelector('.value')
let field = document.querySelector('.field')


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    addString(input.value);
    input.value = '';
    event.target.removeEventListener('submit', event)
})

function addString(param){
    let newP = document.createElement('p');
    let newInput = document.createElement('input')
    let newDeleteBtn = document.createElement('button')
    field.appendChild(newP)
    field.insertBefore(newP, value)
    newP.appendChild(newInput)
    newP.appendChild(newDeleteBtn)
    newP.classList.add('newP');
    newP.setAttribute('draggable', 'true')
    newP.setAttribute('id','newP1')
    newInput.value = param;  
    newDeleteBtn.textContent = 'x'
    newInput.classList.add('input')
    newDeleteBtn.classList.add('delete-value')
    newDeleteBtn.type = 'button'
    newDeleteBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        newP.remove()
        newDeleteBtn.removeEventListener('click',(event)=>{})
    })
}

sortDown.addEventListener('click',()=>{
    sortDown.classList.add('inactive')
    sortUp.classList.remove('inactive')
    sortUpFunction()
})

sortUp.addEventListener('click',()=>{
    sortUp.classList.add('inactive')
    sortDown.classList.remove('inactive')
    sortDownFunction();
})

function sortUpFunction(){
    let arr = [...form.getElementsByTagName('input')]
    let sorted = [];
    for (let i=0;i<arr.length-1;i++){
        sorted.push(arr[i].value)
    }
    sorted.sort((a,b)=>{
        if (a<b){
            return -1;
        }
        if (a>b){
            return 1;
        }
        return 0;
    })
    let elems = field.querySelectorAll('.newP')
    for (let i=0;i<elems.length;i++){
        field.removeChild(elems[i])
    }
    sorted.forEach(element => {
        addString(element)
    });
    input.value = '';
}

function sortDownFunction(){
    let arr = [...form.getElementsByTagName('input')]
    let sorted = [];
    for (let i=0;i<arr.length-1;i++){
        sorted.push(arr[i].value)
    }
    sorted.sort((a,b)=>{
        if (a>b){
            return -1;
        }
        if (a<b){
            return 1;
        }
        return 0;
    })
    let elems = field.querySelectorAll('.newP')
    for (let i=0;i<elems.length;i++){
        field.removeChild(elems[i])
    }
    sorted.forEach(element => {
        addString(element)
    });
    input.value = '';
}

const dragAndDrop = () => {
    log(input.value)
    
    
}
dragAndDrop()