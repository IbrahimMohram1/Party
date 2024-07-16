


//sideBar
$('.sideBar').on('click', function(){
    $('.sideBar-Box').animate({width: '250px'}, 500);
    $('.home-content').animate({marginLeft: '200px'}, 500)
})
$('.close-btn').on('click', function(){
    $('.sideBar-Box').animate({width: '0px'}, 500);
    $('.home-content').animate({marginLeft: '0px'}, 500)
})

//scroll

$('a').on('click', function(e){
    let sectionName = e.target.getAttribute('href');
    let sectionOffset = $(sectionName).offset().top;
    $('body,html').animate({scrollTop : sectionOffset}, 500)
})
//CardHeader

$('.qouteHeader').click(function(){
    $(this).next().slideToggle();
    $('.qouteContent').not($(this).next()).slideUp();
})
//TextArea Counter

$('textarea').keyup(function () { 
    let length = $(this).val().length
    $('#num').text(100-length <=0 ? "Your Avilable Characters Finished" : 100-length)
});

//Duration 

let timer;
let compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 20); //just for this demo today + 7 days
timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  let dateEntered = toDate;
  let now = new Date();
  let difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}