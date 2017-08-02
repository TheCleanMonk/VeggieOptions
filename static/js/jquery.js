$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "static/submitted.txt", success: function(result){
            $("#WelcomeText").html(result);
        }});
    });
});
function showDiv() {
   document.getElementById('Spinner').style.display = "block";
}