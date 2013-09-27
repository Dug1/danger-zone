$('.post-button').click(function() {
    user_input = $('textarea').val();
    if(user_input.length < 10) {
        alert("Don't be stupid")
    }
    $('#right').prepend('<div class="cell"><p>' + user_input + ' </p></div>');
    $('textarea').val('');
});
