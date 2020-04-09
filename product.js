var product = product || {};

product.showProduct = function(){
    $.ajax({
        url: "http://localhost:3000/products",
        method: "GET",
        dataType : "json",
        success : function(data){
            $.each(data, function(i, v){
                $('#showProducts').append(
                    "<div class='col-lg-3 col-md-6 mb-4'>"+
                    "<div class='card h-100'>"+
                      "<a href=''><img class='card-img-top' src='" + v.productImage +"' alt=''></a>"+
                      "<div class='card-body bg-info'>"+
                        "<h4  class='card-title text-warning' >" + v.productName + "</h4>"+
                        "<p class='card-text'> Manufactory: "+ v.manufactory +" Description: " + v.description +"</p>"+
                      "</div>"+
                      "<div class='card-footer'>"+
                        "<a href='#' class='btn btn-primary'> " + v.price +" vnđ </a>"+
                      "</div>"+
                    "</div>"+
                  "</div>"
                );
            })
        }
    });
}



product.init = function(){
    product.showProduct();
}

$(document).ready(function(){
    product.init();
});
