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
	            'Movie Title: ' + res.Title +
	          '</li>' +
	          '<li>' +
	            'Year: ' + res.Year +
	          '</li>' +
	          '<li>' +
	            'Rating: ' + res.Rated +
	          '</li>' +
	          '<li>' +
	            'Release Date: ' + res.Released +
	          '</li>' +
	          '<li>' +
	            'Genre: ' + res.Genre +
	          '</li>' +
	          '<li>' +
	            'Actors: ' + res.Actors +
	          '</li>' +
	          '<li>' +
	            'Awards: ' + res.Awards +
	          '</li>' +
	          '<li>' +
	            'Poster: ' + res.Poster +
	          '</li>' +
	          '<li>' +
	            'imdbRating: ' + res.imdbRating +
	          '</li>' +
	          '<li>' +
	            'Type: ' + res.Type +
	          '</li>'
	        )
	      })
	  });

});



