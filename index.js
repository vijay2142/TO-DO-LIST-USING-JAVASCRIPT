document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + todoInput));
    document.getElementById('todoList').appendChild(li);
    document.getElementById('todoInput').value = '';
    }
    });
    document.getElementById('removeButton').addEventListener('click', function() {
    var todoList = document.getElementById('todoList');
    var items = todoList.getElementsByTagName('li');
    for (var i = items.length - 1; i >= 0; i--) {
    if (items[i].getElementsByTagName('input')[0].checked) {
        todoList.removeChild(items[i]);
    }
    }
    });