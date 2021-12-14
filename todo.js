const btn = document.getElementById("btn")
const input = document.getElementById("input")
const ul = document.getElementById("ul")

function addList(){
    let inputText = document.getElementById("input").value
    var list = document.createElement("li");
    list.innerHTML = inputText
    ul.appendChild(list)
    init();
}

function init(){
    input.value = '';
}

function addBtnOp(){
    btn.addEventListener("click", addList)
}

function addInputOp(){
    input.addEventListener("keydown", function(t){
        if (t.key == "Enter"){
            addList();
        }
    })
}

function main(){
    addBtnOp();
    addInputOp();
}

main();