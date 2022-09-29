const ul = document.querySelector("ul")
const input = document.querySelector("input")
let augusto = []

function add() { 
    augusto.push(input.value);
    input.value = ''
    render()
 }
 function render() {
    ul.innerHTML = null
    augusto.forEach(function(tarefa){
    const p = document.createElement('p')
    p.innerText = tarefa
    ul.appendChild(p)
    })
 }