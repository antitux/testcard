
(function(window, document) {
  var decode = function(t) {
    var ta = document.createElement("textarea");
    ta.innerHTML = t;
    return ta.value;
  };
  
  var queryString = function() {
    var qs = window.location.search.substring(1).split('&');
    var params = { };
    qs.forEach(function(q) {
      params[q.split('=')[0]] = q.split('=')[1]
    });
    return params;
  };

  var recall = function() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.toLocaleString('en-US', {month: 'long'});
    var year = date.getFullYear();

    var hh = (hours < 10) ? '0' + hours : hours;
    var mm = (minutes < 10) ? '0' + minutes : minutes;
    var ss = (seconds < 10) ? '0' + seconds : seconds;
    var dd = day;
    var ii = (month < 10) ? '0' + month : month;
    var yy = year;
    var day = ii + ' ' + dd + ' ' + yy;
    var hour = hh + ':' + mm + ':' + ss;
    document.getElementById('time').innerHTML = hour;
    document.getElementById('date').innerHTML = day;
  };

  if (queryString().banner) {
    document.getElementById('banner').innerHTML = decodeURI(queryString().banner);
  } else {
    document.getElementById('banner').remove();
  }

  recall();
  window.setInterval(recall, 250);
})(window, document);