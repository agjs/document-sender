$('.document-form').submit(function (event) {
    event.preventDefault();

    var form = {
        title: $('input').val()
    };

    $.ajax({
            url: '/document',
            type: 'POST',
            data: form
        })
        .done(function (data) {

            $('.box').append(`<h1>` + data.title);

        }).fail(function (error) {
            console.log(error);
        });
});