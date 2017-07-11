

// $(document).on("pagecreate","#pageOne",function(){
$(document).on("pagecreate","#pageOne",function(){
    $("#pageOne").on("swiperight",function(){

        $("#myPanel").panel("open");
    });
});


