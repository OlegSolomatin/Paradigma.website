function checkedCheckBox() {
    if ($('#done').is(':checked')){
        $('.submitForm').prop('disabled', false);
    } else {
        $('.submitForm').prop('disabled', true);
    }
}

checkedCheckBox();

$('#done').click(checkedCheckBox);

function sendForm(){
    $('.modal-content').css('display', 'none');
    $('.send-modal').css('display', 'flex');
}

$('#openModal').click(function() {
    $('.modal').css('display', 'flex')
    $('body, html').css({ 'overflow': 'hidden', 'max-height':'100%'})
});

$('#modal-miss, #modal-close, #modal-close-send').click(function() {
    $('.modal').hide()
    $('body, html').css({ 'overflow': 'visible', 'max-height': 'none' })
});

$('.phone').mask('+7(999)999-99-99');

function checkedCheckBoxMenu() {
    if ($('#humMenu').is(':checked')){
        $('.menu, .header-info, .link-social, .link-price').css('display','flex')
        $('.container-header').css({'height':'100vh','width':'100vw','gap':'20rem 5%', 'padding':'0 20rem 77rem', 'position':'fixed','grid-template-rows':'1fr 1fr 1fr 1fr 1fr'});
    } else {
        $('.container-header').css({'height':'auto','width':'100vw','gap':'0px 5%', 'padding':'0 20rem', 'position':'absolute','grid-template-rows':'inherit'});
        $('.menu, .header-info, .link-social, .link-price').css('display','none')
    }
}

$('#humMenu').click(checkedCheckBoxMenu);

$('.button-plus').click(function (){
    $('.aside').css({'transform': 'translateY(-300rem)'});
    $('.button-plus').hide();
    $('.button-minus').css('display', 'flex');
});
$('.button-minus').click(function (){
    $('.aside').css({'transform': 'translateY(0rem)'});
    $('.button-minus').hide();
    $('.button-plus').css('display', 'flex');
});

