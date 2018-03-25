(function() {
  'use strict';

  var todoForm = document.querySelector('.js-todo-form'),
      subTodoForm = document.querySelector('.js-todo-form-two'),
      listItems = document.querySelectorAll('.js-item');

  function formEvents(form) {

    function formSubmitEvent() {
      form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event.target.querySelector('input[type=text]').value);
      })
    }

    function addTodoToList() {
      var todoList = document.querySelector('.js-todo-list');

      form.addEventListener('submit', function(event){
        event.preventDefault();
        var listItem = document.createElement('li'),
            inputFieldValue = event.target.querySelector('input[type=text]').value;

        listItem.classList.add('todo-list__item js-item');
        listItem.innerText = inputFieldValue;
        todoList.appendChild(listItem);
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
