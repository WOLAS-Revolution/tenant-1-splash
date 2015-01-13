$(document).ready(function () {

	news = [{"id":5,"thumbnail":"http://farm8.staticflickr.com/7474/15866231960_0549ab74eb_n.jpg","caption":"Bennett Mckenzie from DDP Spray Painting Coopers Plains, is looking eager to start painting!","link":null,"created":"2015-01-06T12:00:00.000Z"},{"id":6,"thumbnail":"http://farm9.staticflickr.com/8672/15997543156_f03a7cef4b_n.jpg","caption":"Our student Max King from Paint By Darryl removing paint from a Rolls-Royce to be repainted!","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":19,"thumbnail":"http://farm8.staticflickr.com/7504/15998798821_4b61b0ce88_n.jpg","caption":"Drew Cornelius from Locale Noosa  preparing olive bread as part of his pastry, cakes and","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":20,"thumbnail":"http://farm9.staticflickr.com/8656/15373949763_8459fdf64c_n.jpg","caption":"Our students Emilie Kratzmann and Jonathan Trickey preparing Beetroot ravioli at Mondo","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":21,"thumbnail":"https://farm9.staticflickr.com/8669/15800887297_105f44e2dd_n.jpg","caption":"Working with Kelly-Anne Johnson. Kelly is producing some great hot and cold canapes.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":22,"thumbnail":"https://farm9.staticflickr.com/8662/15800617609_cce9f296c9_n.jpg","caption":"Working with Kelly-Anne Johnson. Kelly is producing some great hot and cold canapes.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":23,"thumbnail":"https://farm9.staticflickr.com/8649/15366999413_91cab917f9_n.jpg","caption":"Working with Kelly-Anne Johnson. Kelly is producing some great hot and cold canapes.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":24,"thumbnail":"https://farm8.staticflickr.com/7512/15984635681_a7979e89e8_n.jpg","caption":"Working with Kelly-Anne Johnson. Kelly is producing some great hot and cold canapes.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":25,"thumbnail":"https://farm8.staticflickr.com/7467/15946893556_b79b16d27a_n.jpg","caption":"Working with Kelly-Anne Johnson. Kelly is producing some great hot and cold canapes.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":26,"thumbnail":"https://farm8.staticflickr.com/7511/15786934397_8421cf8bd2_n.jpg","caption":"James Oost from the Morrison Hotel was working on hot and cold desserts, cakes, ","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":27,"thumbnail":"https://farm3.staticflickr.com/2948/15364138676_8157942acc_z.jpg","caption":"Damien Barnden has been working with yeast product. He produced pizza bases and","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":28,"thumbnail":"https://farm4.staticflickr.com/3858/15200403889_9f0b3d60f2_z.jpg","caption":"First Year apprentice Kenny doing his LLN Check, than another picture with chef ","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":29,"thumbnail":"https://farm8.staticflickr.com/7516/15739106638_eea9ebc43e_c.jpg","caption":"Great day out in Warwick. These two students are from Mussels Restaurant.","link":null,"created":"2015-06-01T12:00:00.000Z"},{"id":30,"thumbnail":"http://farm8.staticflickr.com/7483/15918406752_285a2c2ca6_o.jpg","caption":"This is one of our students Quentin Corrigan who has whipped up some white","link":null,"created":"2015-06-01T12:00:00.000Z"}];	

	var loadIsotope = function () {

		var iso = new Isotope('.news-container', {
			itemSelector: '.news-wrapper',
			transitionDuration: '0.5s',
			layoutMode: 'masonry',
			//masonry: {
			//	gutter: 8
			//}
		});

		$('[id=splash-left]').animate({ opacity: 1 }, 1)
		
	};
	
	var expectedCount = news.length;
	var currentCount = 0;
	var renderImage = function (index, dims) {
		var image = news[index]
		var height = parseInt(dims.h) + 50;
		$('[id=newsarea]').append('<div class="news-wrapper"><div style="height: 100%;"><img class="news-image" src="' + image.thumbnail + '" /></div><div class="news-desc"><p style="font-size: 90%; margin: 5px;">' + image.caption + '</p></div></div>')

		currentCount ++;
		expectedCount == currentCount && loadIsotope();
	};

	var loadMeta = function (index, url) {
		$('<img/>').attr('src', url).load(function () {
			renderImage(index, { w: this.width, h: this.height });
		});
	};

	for (var i = 0; i < news.length; i++) {
		loadMeta(i, news[i].thumbnail)		
	};

	// $.ajax({
	// 	url: 'http://192.168.1.94:3001/flash',
	// 	type: 'GET',
	// 	success: function () {
	// 		console.log('got news bitch')
	// 	},
	// 	error: function () {
	// 		console.log('dont got news bitch')
	// 	}
	// });


	// get the current server status from statuspage io api.
	$.ajax({
		url: 'https://68mkqm03rc5l.statuspage.io/api/v1/status.json',
		type: 'GET',
		success: function (response) {
			$('[id=txt_status]').text(response.status.description)
			if (response.status.description == "All Systems Operational") {
				$('[id=status_ok]').prop('hidden', !1);
			} else {
				$('[id=status_not_ok]').prop('hidden', !1);
			};
		},
		error: function () {
			$('[id=status_not_ok]').prop('hidden', !1);
			$('[id=txt_status]').text('Service Disruption')
		}
	});

	// twitter iframe
	!function(t,e,r){var n,s=t.getElementsByTagName(e)[0],i=/^http:/.test(t.location)?"http":"https";t.getElementById(r)||(n=t.createElement(e),n.id=r,n.src=i+"://platform.twitter.com/widgets.js",s.parentNode.insertBefore(n,s))}(document,"script","twitter-wjs");

	$('[id=txt_status]').click(function () {
		window.open('http://status.workskills.com.au', target = '_blank');
	});	
	
});