

	$(document).ready(function() {

		let contentArr =  $('.content-block .content-block-item');

		const options = {
			ovalWidth: 400,
			ovalHeight: 50,
			offsetX: 100,
			offsetY: 325,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'main-carousel-item'
		}

		var carousel = $('.main-carousel').CircularCarousel(options);

		/* Fires when an item is about to start it's activate animation */
		carousel.on('itemBeforeActive', function(e, item) {
			$(item).css('box-shadow', '0 0 20px blue');
		});

		/* Fires after an item finishes it's activate animation */
		carousel.on('itemActive', function(e, item) {
			$(item).css('box-shadow', '0 0 20px green');
			$(item).append('<div class="main-carousel-item__slide-bg"><img src="./img/slide-bg.png" alt="bg"></div>');
		});

		/* Fires when an active item starts it's de-activate animation */
		carousel.on('itemBeforeDeactivate', function(e, item) {
			$(item).css('box-shadow', '0 0 20px yellow');
			$('.main-carousel-item:not(.active) .main-carousel-item__slide-bg').remove();
		})

		/* Fires after an active item has finished it's de-activate animation */
		carousel.on('itemAfterDeactivate', function(e, item) {
			$(item).css('box-shadow', '');
		});

		/* Manaully click an item anywhere in the carousel */
		$('.main-carousel .main-carousel-item').click(function(e) {
			let index = $(this).index('li');
			console.log(index);
			carousel.cycleActiveTo(index);

			contentArr.each(function() {
				$(this).removeClass('active');
				$(contentArr[index]).addClass('active');
			});

			e.preventDefault();
		});
	});
