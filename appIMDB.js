$(document).ready(function(){

	  $('#addMovie').on('click', function(e) {
	    e.preventDefault();
	    var movie = $('#name').val();
	    var userJob = $('#job').val();
	    return $.ajax({
	      method: 'GET',
	      url: 'http://www.omdbapi.com/?t=' + movie + '*',
	      }) .done(function(res) {
	        console.log(res);
	        $('#recentUser').html(
	          '<li>' +
	            '<strong>Movie Title:</strong> ' + res.Title +
	          '</li>' +
	          '<li>' +
	            '<strong>Year:</strong> ' + res.Year +
	          '</li>' +
	          '<li>' +
	            '<strong>Rating:</strong> ' + res.Rated +
	          '</li>' +
	          '<li>' +
	            '<strong>Release Date:</strong> ' + res.Released +
	          '</li>' +
	          '<li>' +
	            '<strong>Genre:</strong> ' + res.Genre +
	          '</li>' +
	          '<li>' +
	            '<strong>Actors:</strong> ' + res.Actors +
	          '</li>' +
	          '<li>' +
	            '<strong>Awards:</strong> ' + res.Awards +
	          '</li>' +
	          '<li>' +
	            '<strong>imdbRating:</strong> ' + res.imdbRating +
	          '</li>' +
	          '<li>' +
	            '<strong>Type:</strong> ' + res.Type +
	          '</li>'
	        )
	      })
	  });

});



