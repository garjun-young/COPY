var colors = ["#e1adff", "#7fcbef", "#ef7d42", "#ffaec2", "#98f1a1", "#ff5626"];
var currentIndex = 0;


setInterval(function() {
    document.body.style.cssText = "background-color: " + colors[currentIndex];
    currentIndex++;
    if (currentIndex == undefined || currentIndex >= colors.length) {
        currentIndex = 0;
    }
}, 2000);

$('#aboutText').hide();

$('#about').click(function(){
    var doel = $(this).data('doel');
    $(doel).toggle();
    $(doel).each(function(){
        $(this).css('top', Math.random()*300)
        $(this).css('left', Math.random()*650)
        $(this).css('bottom', Math.random()*300)
        $(this).css('right', Math.random()*650)
    })
})

$('#aboutText').click(function(){
    $('#aboutText').hide();
})

$('#aboutText').hover(function(){
    $('#aboutText').css('cursor','pointer');
})

$('.projectTitle').hover(function(){
    var tekst = $(this).data('hover');
    $(this).text(tekst);

}, function(){
    var tekst = $(this).data('normaal');
    $(this).text(tekst);
})

$('.previewProject').hide();
/*
$('.projectTitle').hover(function(){
    var doel = $(this).data('id');
    $('.previewProject').hide();
    $(doel).show();
})
*/
$('.projectTitle').hover(function(){
    var doel = $(this).data('id');
    $(doel).toggle();
    $(doel).each(function(){
        $(this).css('top', Math.random()*700)
        $(this).css('left', Math.random()*1200)
        $(this).css('bottom', Math.random()*700)
        $(this).css('right', Math.random()*1200)
    })
})

$('.projectContent').hide();



/*
$('.projectTitle').click(function(){
    var kleur = $(this).data('kleur');
    $('.projectContent').css('background-color', kleur);
    $('.projectContent').fadeIn(1000, "linear");
    
})
*/

$('.projectTitle').click(function(){
    var doel = $(this).data('doel');
    $('.projectContent').hide();
    $(doel).fadeIn(1000, "linear");
    $('html,body').scrollTop(0);
})


$('#homeButton').click(function(){
    $('.projectContent').hide();
})
