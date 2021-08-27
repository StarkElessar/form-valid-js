$(document).ready(function () {
  
  // Маска ввода номера телефона:
  $('input[type="tel"]').mask("+375 (99) 999-99-99", { placeholder: " " });
  // Установка курсора в нужное место для ввода номера телефона
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[type="tel"]').click(function () {
    $(this).setCursorPosition(6);  // set position number
  });

});

// Проверка ввода Email
function validation() {
  let form = document.getElementById('form');
  let email = document.getElementById('user_email').value;
  let text = document.getElementById('text');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = "Вы ввели правильный Email.";
    text.style.color = '#00ff00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Пожалуйста введите корректный Email.";
    text.style.color = '#ff0000';
  } if (email == "") {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = "";
    text.style.color = '#00ff00';
  }
}
