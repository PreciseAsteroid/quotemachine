var quotes = {
  "1": {
    "text": "Don't cry because it's over, smile because it happened.",
    "author": "Dr. Seuss"
  },
  "2": {
    "text": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author": "Marilyn Monroe"
  },
  "3": {
    "text": "Be yourself. everyone else is already taken",
    "author": "Oscar Wilde"
  },
  "4": {
    "text": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "author": "Bernard M. Baruch"
  },
  "5": {
    "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "Albert Einstein"
  },
  "6": {
    "text": "You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.",
    "author": "William W. Purkey"
  },
  "7": {
    "text": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author": "Dr. Seuss"
  }
};

$(function(){
  $('#qButt').on('click', function(e) {
    /*alert('hello');*/
    /*$('#qText').val(quotes[qRand()]);*/
    var num = Math.ceil(Math.random()*Object.size(quotes));
    $('#qText').text(quotes[num].text);
    $('#qAuthor').text(quotes[num].author);
  });
});

function qRand(){
  return 2;
}

Object.size = function(obj){
  var size = 0, key;
  for(key in obj){
    if (obj.hasOwnProperty(key)){
      size++;
    }
  }
  return size;
};

// $('#twButt').click(function(){
//    alert("hi");
//    window.location.href='the_link_to_go_to.html';
// });

$(function(){
  $('#twButt').on('click', function (e) {
    // alert("hi");

    var twitterShare = "http://twitter.com/share?url=_URL_&text=";
    var twitterShareText = $('#qText').text()+" ("+$('#qAuthor').text()+")";
    if(twitterShareText != "Just hit the get quote button to get smarter... ()"){
      // alert(twitterShare + twitterShareText);
      window.open(twitterShare+twitterShareText);
    }

});

});

// href="http://twitter.com/share?url=_URL_&text=_ADDITIONAL_TEXT_&via=TWITTER_NAME"
