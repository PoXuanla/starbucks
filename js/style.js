$(document).ready(function(){
    $collapseIcon = $('.collapse-icon');
    $minimenu = $('.minimenu');
    $collapseIcon.on('click',function(e){
        $minimenu.slideToggle(300);
        e.stopPropagation();
        console.log("ff");
    });
   
      $(document).on('click', function() {
        $minimenu.stop().slideUp(300);
    })
});


