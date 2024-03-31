var boxCard = document.querySelector('.box-card')
var boxCardList = document.querySelector('.box-card-list')
var exitIcon = document.querySelector('.exit-icon')
var inputTag =  document.querySelector('.box-card-input')
var removeTag = document.querySelector('.removetag')
var btnremoveTag = document.querySelector('.box-footer button')

var tags = ["NodeJs","Reacjs"];


function render(){
   boxCardList.innerHTML = '';
   for (let i = 0; i < tags.length; i++){
        const li = document.createElement('li');
        li.className = 'box-text'
        li.innerHTML = `${tags[i]} <i class="exit-icon fa-solid fa-x" onclick="removeTags(${i})"></i>`;
        boxCardList.appendChild(li);
   }
}
render()
function addTag(events){
    if (events.code =="Enter"){
        if (inputTag.value.trim() != ""){
            tags.push(inputTag.value)
            render()
            inputTag.value = ""
        }else{
            inputTag.value = ""
        }
    }
}
function removeTags(index){
    tags.splice(index,1)
    render()
}
inputTag.addEventListener('keydown', (e) => {
    addTag(e)
})

btnremoveTag.addEventListener('click', ()=>{
    tags = []
    render()
})
