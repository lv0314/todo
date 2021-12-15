const btn = document.getElementById("btn")
const input = document.getElementById("input")
const listspace = document.getElementById("listspace")
const ul = document.getElementById("ul")

function init(){
    input.value = '';
}

function addList(){
    let inputText = document.getElementById("input").value
    if (inputText != ""){
        let list = document.createElement("div");
        list.setAttribute("id", "content")
        list.innerHTML = inputText
        init();
        return list;
    }
}

function addCheckBtn(){
    let checkBtn = document.createElement("button")
    checkBtn.setAttribute("id", "check")
    checkBtn.addEventListener("click", checkFunc)
    return checkBtn;
}

function addDelBtn(){
    let delBtn = document.createElement("button")
    delBtn.innerHTML = "del";
    delBtn.setAttribute("id", "del")
    delBtn.addEventListener("click", delFunc)
    return delBtn;
}

function combi(){
    let combiSpace = document.createElement("div")
    combiSpace.setAttribute("id", "combi")

    combiSpace.appendChild(addList())
    combiSpace.appendChild(addCheckBtn())
    combiSpace.appendChild(addDelBtn())
    listspace.appendChild(combiSpace)
}

function addBtnOp(){
    btn.addEventListener("click", combi)
}

function addInputOp(){
    input.addEventListener("keydown", function(t){
        if (t.key == "Enter"){
            combi();
        }
    })
}

let check = 1;
function checkFunc(){
    if(check % 2 == 1){
        this.style.backgroundColor = "#a3d390"
        check++;
        this.previousSibling.style.textDecoration = "line-through";
    } else if (check % 2 == 0) {
        this.style.backgroundColor = "lightgray"
        check--;
        this.previousSibling.style.textDecoration = "none"
    }
}

function delFunc(){
    this.parentNode.remove();
}

function main(){
    addBtnOp();
    addInputOp();
}

main();

