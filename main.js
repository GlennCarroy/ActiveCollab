$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 20){
      $("header").addClass("sticky");
    }else{
      $("header").removeClass("sticky");
    }//if-else
  });//win func.
});//ready func.