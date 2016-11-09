$('body').on('click', '.newSpiel',  function () {
  $('#intro').hide();
});


var spielMe = null;
$("body").on('click', '.heart', function () {
   spielMe = $('#gameForm').html();
  removecarrots(spielMe);
});


$('body').on('click', '.inputs', function() {
  var val = $(this).text();
  $(this).text('');
  $(this).toggleClass('focus');
});

$('body').on('click', '#textChange', function () {

    var status = $('#btnLoginToRegister').text();

    if (status === 'LOGIN') {
        $('#btnLoginToRegister').text('REGISTER');
        $('#loginToRegister').text('Already registered?');
        $(this).text('Login');
        $('.register').fadeIn();

    } else if (status === 'REGISTER') {
        $('#btnLoginToRegister').text('LOGIN');
        $('#loginToRegister').text('Not registered?');
        $(this).text('Register');
        $('.register').fadeOut();
    }
});




function removecarrots(form) {
  var newform = ''
  newForm = form.replace(/<.*?>/g, "");
}
