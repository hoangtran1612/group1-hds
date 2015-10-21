$(document).ready(function(){
    $.get("head.html", function(data) {
        $("#head").html(data);
    });
    $.get("body.html", function(data) {
        $("#body").html(data);
    });
    $.get("leftbox.html", function(data) {
        $("#leftbox").html(data);
    });
    $.get("rightbox.html", function(data) {
        $("#rightbox").html(data);
    });
    $.get("midbox.html", function(data) {
        $("#midbox").html(data);
    });
    $.get("footer.html", function(data) {
        $("#footer").html(data);
    });
    $.get("facebookplugin.html", function(data) {
        $("#facebook").html(data);
    });
});


function boxnumber(){
    var x=document.getElementById("boxnum").value;
    var a=document.getElementById("productlist");
    a.innerHTML='';
    for (var i=1;i<=x/5;i++){
        //a.innerHTML+= '<div class="row">';
        a.innerHTML+= '<div class="productbox"></div>';
        a.innerHTML+= '<div class="productbox"></div>';
        a.innerHTML+= '<div class="productbox"></div>';
        a.innerHTML+= '<div class="productbox"></div>';
        a.innerHTML+= '<div class="productbox"></div>';
        //a.innerHTML+='</div>';
    }
    var b=document.getElementsByClassName('productbox');
    for (var i=1;i<=x;i++){
        $.get("productbox.html", function(data) {
            $(".productbox").html(data);
        });
        b[i-1].style.height = b[i-1].style.width;
    }
}
