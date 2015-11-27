var quotes = {
  "1": "first",
  "2": "second",
  "3": "third",
  "4": "Four"
};

$(function(){
  $('#qButt').on('click', function(e) {
    /*alert('hello');*/
    /*$('#qText').val(quotes[qRand()]);*/
    $('#qText').val(quotes[Math.ceil(Math.random()*Object.size(quotes))]);
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
