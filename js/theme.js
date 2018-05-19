// initialized with jQuery
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    estr = "me" + "@" + "haoyuzhang" + "." + "org";
    $('span.estr').html("<a href='" + "mai" + "lto:" + estr + "'>" + estr + "</a>");
});

