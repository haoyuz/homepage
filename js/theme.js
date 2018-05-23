// initialized with jQuery
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    estr = "me" + "@" + "haoyuzhang" + "." + "org";
    $('span.estr').html("<span class='text-info'>" + estr + "</a>");
});

