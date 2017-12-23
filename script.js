$(document).ready(function() {
  
  $('.close').hide();
  $('.content').hide();
  
  $('button').click(function() {
    $(this).parent().addClass('expand');
    
    //Hide READ Button
    $(this).hide();
    //Remove Section Border
    $(this).parent().css("border", "none");
    //Show Close button & Content for specific article
    $(this).siblings().show();
  });
  
  $('.close').click(function () {
    $(this).parent().removeClass('expand');
    $(this).parent().css("border", "1px solid #086788");
    $(this).hide();
    $('button').show();
    $('.content').hide();
  });
  
});
