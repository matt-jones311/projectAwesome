/*
key = P4iFDNrGCaaXBZEO2V1yQJpVRPqqWKE9W_QT3j8CSgYHLiq4oFWqsndeM0XWpKhwv0JLY0EePccFThetkQJkL9oPptIvv_xVYtsWOvgM8hirpsVoMeltPndfc1ljWnYx

url = https://api.yelp.com/v3/businesses/search

citi-ID: 288
param =

*/




$("#search-btn").on("click", function() {

  var searchTerm = $("#search-query").val().trim();

  console.log(searchTerm);

  // URL7 +
  var url = "https://api.yelp.com/v3/businesses/search?location=Atlanta";
  // var url = "https://api.yelp.com/v3/businesses/search?term=delis&location=&latitude=37.786882&longitude=-122.399972";

  //adding paramaters to URL
  url += '?' + $.param({
    'location': "Atlanta",
    'term': searchTerm,
    'limit': 10,
    'sourt_by': 'rating'
  });

  //adding this because there is an error when calling API
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  //log url
  console.log(url);

  //API Call
  $.ajax({
    url: url,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer P4iFDNrGCaaXBZEO2V1yQJpVRPqqWKE9W_QT3j8CSgYHLiq4oFWqsndeM0XWpKhwv0JLY0EePccFThetkQJkL9oPptIvv_xVYtsWOvgM8hirpsVoMeltPndfc1ljWnYx'
    }
  }).done(function(result) {
    console.log(result);
    console.log('complete');
    //Print the first 10 in the table
    printResponse(result);

  }).fail(function(err) {
    throw err;
  })
})

function printResponse(respose) {
  var resteraunts = respose.businesses;

  for (var i = 0; i < resteraunts.length; i++) {
    console.log(resteraunts[i]);

    var dollaBillsYhall = resteraunts[i].price

    if (!dollaBillsYhall) {
      dollaBillsYhall = "$";
    }
    $("#restaurant-table > tbody").append("<tr><td>" + resteraunts[i].name + "</td><td>" + resteraunts[i].display_phone + "</td><td>" +
      dollaBillsYhall + "</td><td>" + resteraunts[i].rating + "</td></tr>");
  }
}