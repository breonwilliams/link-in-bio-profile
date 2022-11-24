import $ from "jquery";

$(document).ready(function() {
    $(".clickable-div").click(function(){
        window.location=$(this).find("a").attr("href"); 
        return false;
    });
});