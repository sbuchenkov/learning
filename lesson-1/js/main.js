(function() {
  'use strict';

  var todoForm = document.querySelector('.js-todo-form'),
      subTodoForm = document.querySelector('.js-todo-form-two'),
      todoList = document.querySelector('.js-todo-list');

  function formEvents(form) {

    function formSubmitEvent() {
      form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event.target.querySelector('input[type=text]').value);
      })
    }

    function _deleteToDoFromList() {
      var listItems = document.querySelectorAll('.js-item');
          //numArray = [1, 2, 3, 4];

          // numArray.forEach(function(arrayItem) {
            // console.log(arrayItem);
          // });

      for(var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function() {
          this.remove();
        })
      }
    }

    function editTodo() {
      var listItems = document.querySelectorAll('.js-item');
      for(var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function(){
          var that = this;
          this.innerHTML = '<input type="text" placeholder"'+ this.innerText +'" class="js-edit" >';
          document.querySelector('.js-edit').onchange = function() {
            that.removeEventListener('click');
            this.parentNode.innerText = this.value;
          }
        });
      }
    }

    function addTodoToList() {

      form.addEventListener('submit', function(event){
        event.preventDefault();
        var listItem = document.createElement('li'),
            inputFieldValue = event.target.querySelector('input[type=text]').value;

        listItem.classList += 'todo-list__item js-item';
        listItem.innerText = inputFieldValue;
        todoList.appendChild(listItem);
        //_deleteToDoFromList();
        editTodo();
      })

    }

    return{
      submit: formSubmitEvent,
      addTodo: addTodoToList
    }
  }

  var eventTodoFormInstance = new formEvents(todoForm);
  eventTodoFormInstance.submit();

  var eventTodoFormTwoInstance = new formEvents(subTodoForm);
  eventTodoFormTwoInstance.addTodo();

  console.log(listItems.length);

})();

//Визуально оформить тудушку(покрасиить и т.д.)
// Реалиизовать удаление каждой запсии листа по клику на нее, ииспользовать querySelectorAll and for loop, .remove()

function inputOnClick() {
  var ourInput = document.getElementById('our-input'),
      result = document.getElementById('result'),
      i = 0;




  // console.log(ourInput.value);
  // if (ourInput.value.length > 6)  {
  //   alert('f-off');
  // } else {
  //   alert(ourInput.value);
  // }
  // switch (ourInput.value.length) {
  //   case 6:
  //     alert('f-off');
  //     break;
  //   case 2:  ||   сфыу 2Ж

  //    alert('ass')
  //     break ;
  //   default:
  //     alert(ourInput.value);
  // }

  // ourInput.value.length > 6 ? alert('ass-off'): alert(ourInput.value);
  // for (var i = 0; i < ourInput.value.length; i++) {
  //   result.innerHTML += '<span>'+ ourInput.value +'</span><br/>';
  // }
  //
  // do {
  //   result.innerHTML += '<span>'+ ourInput.value +'</span><br/>';
  //   i--;
  // } while (i !== 0);

  while (i < 3) {
    i++;
    result.innerHTML += '<span>'+ ourInput.value +'</span><br/>';
  }

}
