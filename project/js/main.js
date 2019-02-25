
function myFunction() 
{
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("LOOK AT ALL THESE PICS OF ME WOW <3");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#neelie-image").append(`<img class="img-circle" src="images/neelie.jpeg" />`);

}

