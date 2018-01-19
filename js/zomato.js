/*
key =1eccc25c7331c8db8a6403a5c40c24e7

url = https://developers.zomato.com/api/v2.1/locations?query=greek


param =


*/

$(".btn").on("click", function() {
  var searchTerm = $("#searchterm").val();
  var num = $("#numberrecords").val();
  var startDate = $("#startyear").val();
  var endDate = $("#endyear").val();
  console.log(searchTerm);
  console.log(num);
  console.log(startDate);
  console.log(endDate);



  // Built by LucyBot. www.lucybot.com
  // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  var url = "https://developers.zomato.com/api/v2.1/locations?query=greek&user-key=1eccc25c7331c8db8a6403a5c40c24e7";

  // url += '?' + $.param({
  //   'api-key': "bd4a0a2e3fe049879ea7f7df712460a1",
  //   'q': searchTerm,
  //   'page': 0
  // });


  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    console.log('complete');

    for (var i = 0; i < num; i++) {
      var newRecord = result.response.docs[i];
      var title = newRecord.headline.main;
      var author = newRecord.byline.original;

      var newHead = $("<h3>");
      newHead.text(title);
      var newName = $("<h4>");
      newName.text(author);

      $(".output").append(newHead);
      $(".output").append(newName);

    }


  }).fail(function(err) {
    throw err;
  })

  //button click


})