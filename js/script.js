//|=====================/SERCH-BAR|=====================|
      $(document).ready(function(){
        var submitIcon = $('.searchbar-icon');
        var inputBox = $('.searchbar-input');
        var searchbar = $('.searchbar');
        var isOpen = false;
        submitIcon.click(function(){
            if(isOpen == false){
                searchbar.addClass('searchbar-open');
                $('.floatBar').css('width','325px');
                inputBox.focus();
                isOpen = true;
            } else {
                searchbar.removeClass('searchbar-open');
                $('.floatBar').css('width','50px');
                inputBox.focusout();
                isOpen = false;
            }
        });  
         submitIcon.mouseup(function(){
                return false;
            });
        searchbar.mouseup(function(){
                return false;
            });
        $(document).mouseup(function(){
                if(isOpen == true){
                    $('.searchbar-icon').css('display','block');
                    submitIcon.click();
                }
            });
    });
        function buttonUp(){
            var inputVal = $('.searchbar-input').val();
            inputVal = $.trim(inputVal).length;
            if( inputVal !== 0){
                $('.searchbar-icon').css('display','none');
            } else {
                $('.searchbar-input').val('');
                $('.searchbar-icon').css('display','block');
            }
        }
//|=====================/SERCH-BAR-MARGIN|=====================|
/*$(window).resize(function(){
var space = $(window).width();
var total = space - 1140;
    if(space <= 1000){
        $('.floatBar').css('right','tota')
    } else {
        $('.floatBar').css('right','200')
    }
  });*/