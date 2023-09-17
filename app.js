let inputBox=document.querySelector('#input-box')
let btn=document.querySelector('button')
let listContainer=document.querySelector('ul')

btn.addEventListener('click',()=>{
    if(inputBox.value===''){
        alert('You must enter some value')
    }else{
        let li=document.createElement('li')
        let text=document.createTextNode(inputBox.value)
        li.append(text)
        console.log(li);
        let span=document.createElement('span')
        span.innerHTML='X'
        li.append(span)
        listContainer.appendChild(li)
    }
    
    inputBox.value=''
    saveData()
})


listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem('data',listContainer.textContent)
}



let list =document.querySelectorAll