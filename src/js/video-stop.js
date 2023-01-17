//stop play utube video when modal is closed 
  $('.modal__close').click(function(e) {
    e.preventDefault();
    $('.modal__item').children('iframe').attr('src', '');
	});
	

	  $('.overlay').click(function(e) {
    e.preventDefault();
    $('.modal__item').children('iframe').attr('src', '');
	});
	

		  $('.main-button--readmore').click(function(e) {
    e.preventDefault();
    $('.modal__item').children('iframe').attr('src', 'https://www.youtube.com/embed/zagD0LQdsDE');
	});