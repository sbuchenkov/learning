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
