$(document).ready(function (){
   $(".img1-img").click(function(){
       $(".img1-paragragh").show();
      $(".this").hide();
   })
$(".img1-paragragh").click(function () {
    $(".img1-img").show();
    $(this).hide();
}) 
   $(".img2-img").click(function(){
       $(".img2-paragragh").show();
       $("this").hide();
   })
    
   $(".img2-paragragh").click(function () {
       $(".img2-img").sjow();
       $(this).hide();
   })

   $(".img3-img").click(function(){
       $(".img3-paragragh").show();
       $(this).hide();
   })
   $(".img3-paragragh").click(function() {
    $(".img2-img").sjow();
    $(this).hide();
   })

})