
var product = product || {};

product.showProduct = function () {
  $.ajax({
    url: "https://thieu-chicken.herokuapp.com/products",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, v) {
        $('#showProducts').append(
          "<div class='col-lg-3 col-md-6 mb-4'>" +
          "<div class='card h-100'>" +
          "<a href='javascript:;' onclick='product.detail(" + v.id + ")'><img class='card-img-top' src='" + v.productImage + "' alt=''></a>" +
          "<div class='card-body bg-info'>" +
          "<h4  class='card-title text-warning' >" + v.productName + "</h4>" +
          "<p class='card-text'> Manufactory: " + v.manufactory + " Description: " + v.description + "</p>" +
          "</div>" +
          "<div class='card-footer'>" +
          "<a href='Javascript:void(0);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'> " + v.price + " vnđ </a>" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      })
    }
  });
}

product.detail = function (id) {
  $.ajax({
    url: "https://thieu-chicken.herokuapp.com/products/"+id,
    method: "GET",
    dataType: "json",
    success: function (data) {
      $('#productImage').prop('src', data.productImage);
      $('#productName').val(data.productName);
      $('#ProductDetail').modal('show');
      
    }
  });
}


product.init = function () {
  product.showProduct();
}

$(document).ready(function () {
  product.init();
});
var youtube = youtube || {};

youtube.showyoutube = function () {
  $.ajax({
    url: "https://thieu-chicken.herokuapp.com/youtube",
    method: "GET",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, v) {
        $('#showyoutube').append(
          "<div class='col-lg-4 col-md-6 mb-4'>" +
          "<p><iframe src='https://www.youtube.com/embed/Nwpe9lT_j1k' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></p>" +
          "</div>"
        )
      })
    }
  });
}
youtube.init = function () {
  youtube.showyoutube();
}

$(document).ready(function () {
  youtube.init();
});

