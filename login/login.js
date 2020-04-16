var login = login || {};

login.check = function(){
    let email = $('email').val();
    let pass = $('pass').val();
    $.ajax({
        url :"https://thieu-chicken.herokuapp.com/users",
        method: "GET",
        dataType: "json",
        success: function(data){
            $.each(data, function(i, v){
                if(v.username == email && v.password == pass){
                    window.location.href="../admin/index.html";
                }
            })
            
        }
    })
}
$(document).ready(function(){

});