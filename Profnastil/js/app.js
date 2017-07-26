$(document).ready(function () {
   
$(".show").hide();
$(".show_uslug").hide();
$(".show_about_window").hide();
$(".show_ceni_window").hide();
$(".show_contact_window").hide();
    $(function() {
    var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
    $(window).scroll(function(){
        if ($(window).scrollTop() > 80){ // Если страницу прокрутили дальше, чем находится наш блок
            $('.menu').css({'position': 'fixed', 'top':'0',  'opacity': '0.85', 'height': '50px', 'z-index':'10'}); // То мы этот блок фиксируем и отображаем сверху.
            $('.smal').css({'line-height': '50px'});
           // То мы этот блок фиксируем и отображаем сверху.
//            $('.logo').css({'display': 'block'});
//            $('.header').css('padding-bottom', fixblock_height+'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
        }else{  // Если же позиция скрола меньше (выше), чем наш блок
            $('.menu').css({'opacity': '1', 'height': '80px', 'position': 'static'}); 
            $('.smal').css({'line-height': '80px'});// то возвращаем все назад
//            $('.logo').css({'display': 'none'});
//            $('.header').css('padding-bottom', '0px'); // И убираем отступ
        }
    })
});
    
   

});

// $(function() {
//    var fixblock_height = $('.circle').height(); // определяем высоты фиксированного блока
//    var fixblock_pos = $('.circle').position().top; ; // определяем его первоначальное положение
//    $(window).scroll(function(){
//        if ($(window).scrollTop() > "400"){ // Если страницу прокрутили дальше, чем находится наш блок
//            $('.circle').css({'display': 'block','position': 'fixed', 'bottom':'0', 'right':'0', 'margin':'20px','z-index':'10'});
////            $('.circle').css({}); // То мы этот блок фиксируем и отображаем сверху.
//            
//        }else{  // Если же позиция скрола меньше (выше), чем наш блок
//            $('.circle').css({'position': 'static'}); // то возвращаем все назад
//            
//        }
//    })
//});
//
//$(".circle").click(function(){   
//     $("html, body").animate({scrollTop: 0}, "slow");
//});
// 
//            var test = true;
//$("#show_menu").hover(function(){
//     var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
//    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
//    if($(window).scrollTop() > fixblock_pos){
//    $('#show').css({'position': 'fixed', 'top':'20%', 'left': '0px', 'z-index':'101'}); 
//    }
//    else{
//        $('#show').css({'position': 'fixed', 'top':'34%', 'left': '0px', 'z-index':'101'}); 
//    }
////    if(mouse){
//        $("#show").slideDown();
//        test = false;    
////    }
////    else{
////     $("#show").slideUp();
//        test = true;  
////    }
//});


 $(".show_menu").on("mouseenter",function(){
        var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
     var height_show_block = fixblock_pos + 5;
    if($(window).scrollTop() > fixblock_pos){
    $('.show').css({'position': 'fixed', 'display':'block', 'top': 'height_show_block', 'left': '0px', 'z-index':'101'});
            $(window).scroll(function() {
            $('.show').css({'display':'none'});        
        });
        console.log(height_show_block.toString());
    }
    else{
        var height_show_block2 = fixblock_pos + 80;
        $('.show').css({'position': 'fixed', 'display':'block', 'top':'fixblock_pos + 8%', 'left': '0px', 'z-index':'101'});
        $(window).scroll(function() {
            $('.show').css({'display':'none'});        
        });

    }
//     $("#show").slideToggle();
     
 })
  $(".show_menu").on("mouseleave",function(){
      $('.show').css({'opacity': '1', 'display':'none',}); 
//      $("#show").slideUp();
 });






$(".show_menu_uslug").on("mouseenter",function(){
        var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
     var height_show_block = fixblock_pos + 5;
    if($(window).scrollTop() > fixblock_pos){
    $('.show_uslug').css({'position': 'fixed', 'display':'block', 'top': 'height_show_block', 'left': '0px', 'z-index':'101'});
            $(window).scroll(function() {
            $('.show_uslug').css({'display':'none'});        
        });
        console.log(height_show_block.toString());
    }
    else{
        var height_show_block2 = fixblock_pos + 80;
        $('.show_uslug').css({'position': 'fixed', 'display':'block', 'top':'fixblock_pos + 8%', 'left': '0px', 'z-index':'101'});
        $(window).scroll(function() {
            $('.show_uslug').css({'display':'none'});        
        });

    }
//     $("#show").slideToggle();
     
 })
  $(".show_menu_uslug").on("mouseleave",function(){
      $('.show_uslug').css({'opacity': '1', 'display':'none',}); 
//      $("#show").slideUp();
 })
  
  
  
  
  
  
  
  $(".show_about").on("mouseenter",function(){
        var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
     var height_show_block = fixblock_pos + 5;
    if($(window).scrollTop() > fixblock_pos){
    $('.show_about_window').css({'position': 'fixed', 'display':'block', 'top': 'height_show_block', 'left': '0px', 'z-index':'101'});
            $(window).scroll(function() {
            $('.show_about_window').css({'display':'none'});        
        });
        console.log(height_show_block.toString());
    }
    else{
        var height_show_block2 = fixblock_pos + 80;
        $('.show_about_window').css({'position': 'fixed', 'display':'block', 'top':'fixblock_pos + 8%', 'left': '0px', 'z-index':'101'});
        $(window).scroll(function() {
            $('.show_about_window').css({'display':'none'});        
        });

    }
//     $("#show").slideToggle();
     
 })
  $(".show_about").on("mouseleave",function(){
      $('.show_about_window').css({'opacity': '1', 'display':'none',}); 
//      $("#show").slideUp();
 });



$(".show_ceni").on("mouseenter",function(){
        var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
     var height_show_block = fixblock_pos + 5;
    if($(window).scrollTop() > fixblock_pos){
    $('.show_ceni_window').css({'position': 'fixed', 'display':'block', 'top': 'height_show_block', 'left': '0px', 'z-index':'101'});
            $(window).scroll(function() {
            $('.show_ceni_window').css({'display':'none'});        
        });
        console.log(height_show_block.toString());
    }
    else{
        var height_show_block2 = fixblock_pos + 80;
        $('.show_ceni_window').css({'position': 'fixed', 'display':'block', 'top':'fixblock_pos + 8%', 'left': '0px', 'z-index':'101'});
        $(window).scroll(function() {
            $('.show_ceni_window').css({'display':'none'});        
        });

    }
//     $("#show").slideToggle();
     
 })
  $(".show_ceni").on("mouseleave",function(){
      $('.show_ceni_window').css({'opacity': '1', 'display':'none',}); 
//      $("#show").slideUp();
 });

  
  

$(".show_contact").on("mouseenter",function(){
        var fixblock_height = $('.menu').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.menu').position().top; ; // определяем его первоначальное положение
     var height_show_block = fixblock_pos + 5;
    if($(window).scrollTop() > fixblock_pos){
    $('.show_contact_window').css({'position': 'fixed', 'display':'block', 'top': 'height_show_block', 'left': '0px', 'z-index':'101'});
            $(window).scroll(function() {
            $('.show_contact_window').css({'display':'none'});        
        });
        console.log(height_show_block.toString());
    }
    else{
        var height_show_block2 = fixblock_pos + 80;
        $('.show_contact_window').css({'position': 'fixed', 'display':'block', 'top':'fixblock_pos + 8%', 'left': '0px', 'z-index':'101'});
        $(window).scroll(function() {
            $('.show_contact_window').css({'display':'none'});        
        });

    }
//     $("#show").slideToggle();
     
 })
  $(".show_contact").on("mouseleave",function(){
      $('.show_contact_window').css({'opacity': '1', 'display':'none',}); 
//      $("#show").slideUp();
 });
  
  
  
  
  $("#owl-example").owlCarousel({
         items : 1,
         singleItem:true,
         navigation : true,
         autoPlay:true,
         pagination : false,
         autoHeight: false
 });

$("#owl-second").owlCarousel({
         items : 5,
         singleItem:false,
         navigation : true,
         autoPlay:true,
         pagination : false,
         autoHeight: false
 });


