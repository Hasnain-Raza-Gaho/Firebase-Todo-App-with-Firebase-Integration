function addTodo() {

    if(document.getElementById('inputTodo').value === ''){
        alert('Please Add Some Task !')    
    }

    else{

        var inputField = document.getElementById('inputTodo');
        
        
    var li = document.createElement('li')
    var textVal = document.createTextNode(inputField.value);

    li.appendChild(textVal);

    var ulList = document.getElementById('todoList');
    ulList.appendChild(li);


    inputField.value = '';

    var span = document.createElement('span')

    var edtBtn = document.createElement('button')
    var edtText = document.createTextNode('Edit')
    edtBtn.setAttribute('onclick','edtbtn(this)');
    edtBtn.appendChild(edtText);
    
    span.appendChild(edtBtn)
    
    
    var dltBtn = document.createElement('button')
    var dltText = document.createTextNode('Delete')
    dltBtn.setAttribute('onclick','dltbtn(this)');
    
    dltBtn.appendChild(dltText);
    span.appendChild(dltBtn)
    
    li.appendChild(span)
    
    
}
}


function dltAll() {
    document.getElementById('todoList').innerHTML = '';
    document.getElementById('inputTodo').value = '';

}

function edtbtn(e){
console.log(e.parentNode.parentNode.firstChild.nodeValue)
var text = prompt('Edit Task', e.parentNode.parentNode.firstChild.nodeValue);
e.parentNode.parentNode.firstChild.nodeValue = text;
}


function dltbtn(e){
    e.parentNode.parentNode.remove()
}