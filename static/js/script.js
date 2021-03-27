$(document).ready(function() {
    let i           = 0;
    let curentImg   = `.slider img:eq(${i})`;
    let indexImg = $('.slider img').length;
    console.log(indexImg);


    $('.slider img').addClass('hide');

    
    
    $(curentImg).addClass('show');
    $(`.slider img:eq(${indexImg-1})`).addClass('showLeft');
    $(`.slider img:eq(${i+1})`).addClass('showRight');

    $('#pr').click(function(){
        if (i > (0)) {
            i--;
            console.log(i);
            $('.slider img').removeClass('show').removeClass('showRight').removeClass('showLeft').removeClass('slideLeft');
            $(`.slider img:eq(${i})`).addClass('show').addClass('slideLeft');
            $(`.slider img:eq(${i+1})`).addClass('showRight').addClass('slideLeft');
            $(`.slider img:eq(${i-1})`).addClass('showLeft').addClass('slideLeft');
        }
        if (i == 0) {
            i = indexImg-1;
            console.log(i);
            $('.slider img').removeClass('show').removeClass('showRight').removeClass('showLeft');
            $(`.slider img:eq(${i})`).addClass('show').addClass('slideLeft');
            $(`.slider img:eq(${0})`).addClass('showRight').addClass('slideLeft');
            $(`.slider img:eq(${i-1})`).addClass('showLeft').addClass('slideLeft');
        }
        
    });
    $('#ne').click(function(){
        if (i < (indexImg-1)) {
            i++;
            console.log(i);
            $('.slider img').removeClass('show').removeClass('showRight').removeClass('showLeft');
            $(`.slider img:eq(${i})`).addClass('show');
            $(`.slider img:eq(${i+1})`).addClass('showRight');
            $(`.slider img:eq(${i-1})`).addClass('showLeft');
        }
        if (i == (indexImg-1)) {
            i = 0;
            console.log(i);
            $('.slider img').removeClass('show').removeClass('showRight').removeClass('showLeft');
            $(`.slider img:eq(${i})`).addClass('show');
            $(`.slider img:eq(${i+1})`).addClass('showRight');
            $(`.slider img:eq(${i-1})`).addClass('showLeft');
        } 
    });

    
    






});