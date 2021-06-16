// start slider
var carousel = $(".carousel");
    circldeg = 0;

$(".next").on("click", {degc: "n"}, rotate);
$(".prev").on("click", {degc: "p"}, rotate);

function rotate(e){
  if(e.data.degc == "n"){
    circldeg = circldeg + 60;
  }
  if(e.data.degc == "p"){
    circldeg = circldeg - 60;
  }
  carousel.css({"transform": "rotateY("+circldeg+"deg)"});
}

// end slider

// start img modal
$(function() {
  $('.img_tes').on('click', function() {
    $('.modal_content').attr('src', $(this).attr('src'));
    $('#buy_modal').modal('show');
  });
});
// end img modal

// start quantitiy
$(document).ready(function(){
  var quantitiy = 0;
  $('.quantity-right-plus').click(function(e){
  	e.preventDefault();
  	var quantity = parseInt($('#quantity').val());
  	$('#quantity').val(quantity + 1);
  });
  $('.quantity-left-minus').click(function(e){
  	e.preventDefault();
  	var quantity = parseInt($('#quantity').val());
  	 if(quantity>0){
  	 	$('#quantity').val(quantity - 1);
  	 }

  });
});
// endquantitiy
     
