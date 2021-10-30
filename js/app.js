

    firebase.database().ref('/todo').on('child_added',function(element){
        // console.log(element.val())
        var data = element.val();
       console.log(data)
            
        var li = document.createElement('li')
    var textVal = document.createTextNode(data.todo);

    li.appendChild(textVal);

    var ulList = document.getElementById('todoList');
    ulList.appendChild(li);


    
    var span = document.createElement('span')

    var edtBtn = document.createElement('button')
    var edtText = document.createTextNode('Edit')
    edtBtn.setAttribute('onclick','edtbtn(this)');
    edtBtn.setAttribute('id',data.key_item)
    edtBtn.appendChild(edtText);
    
    span.appendChild(edtBtn)
    
    
    var dltBtn = document.createElement('button')
    var dltText = document.createTextNode('Delete')
    dltBtn.setAttribute('onclick','dltbtn(this)');
    dltBtn.setAttribute('id',data.key_item)

    
    dltBtn.appendChild(dltText);
    span.appendChild(dltBtn)
    // var val = inputField.value;
    li.appendChild(span)

    })


function addTodo() {

    if(document.getElementById('inputTodo').value === ''){
        alert('Please Add Some Task !')    
    }

    else{

        var inputField = document.getElementById('inputTodo');
        
    
    var key = firebase.database().ref('/todo').push().getKey();
    var obj = {
        key_item : key,
        todo : inputField.value
    }
    firebase.database().ref('/todo/'+key).set(obj)




    inputField.value = '';
}
}


function dltAll() {
    document.getElementById('todoList').innerHTML = '';
    document.getElementById('inputTodo').value = '';
    firebase.database().ref('/todo').remove()

}

function edtbtn(e){
var text = prompt('Edit Task', e.parentNode.parentNode.firstChild.nodeValue);
e.parentNode.parentNode.firstChild.nodeValue = text;
obj = {
    key : e.id,
    todo : text
}
firebase.database().ref('/todo/'+ e.id).set(obj);
}


function dltbtn(e){
    e.parentNode.parentNode.remove()
    
    firebase.database().ref('/todo/'+ e.id).remove();
    console.log(e)
}