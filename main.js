$(document).ready(function() {

  function slide(num) {
    console.log($('.container').css('marginLeft'))
    $('.container').animate({ marginLeft: num })
  }

  var autoslide = setInterval(function(){
    if (parseInt($('.container').css('marginLeft')) <= -1600)
      $('.container').css('marginLeft', '0px')
    else
      slide('-=400px')
  }, 1000)

  $('#next').click(function() {
    if (parseInt($('.container').css('marginLeft')) <= -1600)
      $('.container').css('marginLeft', '0px')
    else
      slide('-=400px')
    clearInterval(autoslide)
  })

  $('#prev').click(function() {
    if (parseInt($('.container').css('marginLeft')) >= 0)
      $('.container').css('marginLeft', '-1600px')
    else
      slide('+=400px')
    clearInterval(autoslide)
  })
})

