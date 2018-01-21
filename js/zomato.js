/*
key = P4iFDNrGCaaXBZEO2V1yQJpVRPqqWKE9W_QT3j8CSgYHLiq4oFWqsndeM0XWpKhwv0JLY0EePccFThetkQJkL9oPptIvv_xVYtsWOvgM8hirpsVoMeltPndfc1ljWnYx

url = https://api.yelp.com/v3/businesses/search

citi-ID: 288
param =


*/

$(".btn").on("click", function() {
  var searchTerm = $("#searchterm").val();

  console.log(searchTerm);

  // URL
  var url = "https://api.yelp.com/v3/businesses/search?term=delis&location=Atlanta";
  // var url = "https://api.yelp.com/v3/businesses/search?term=delis&location=&latitude=37.786882&longitude=-122.399972";

  // url += '?' + $.param({
  //   'api-key': "bd4a0a2e3fe049879ea7f7df712460a1",
  //   'q': searchTerm,
  //   'page': 0
  // });

  //adding this because
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });


  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer P4iFDNrGCaaXBZEO2V1yQJpVRPqqWKE9W_QT3j8CSgYHLiq4oFWqsndeM0XWpKhwv0JLY0EePccFThetkQJkL9oPptIvv_xVYtsWOvgM8hirpsVoMeltPndfc1ljWnYx'
    }
  }).done(function(result) {
    console.log(result);
    console.log('complete');
    //code goes here

  }).fail(function(err) {
    throw err;
  })

  //button click


})