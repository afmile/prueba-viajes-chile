var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){

    $('#enviarMensaje').click(function(){
        alert('Su mensaje fue enviado correctamente...');
    })

    $('h1').dblclick(function(){
        $(this).css({
            color: "#0dcaf0",
            borderColor: "white"
        });
    })

    $('.card-title').click(function(){
        $('.card-text, .card-img-top').toggle('slow');
    });


})
