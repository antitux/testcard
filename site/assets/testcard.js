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
    if (queryString().cursor) {
      document.getElementById('banner').innerHTML = decodeURI(queryString().banner) + "&nbsp" + '<span id="cursor">X</span>';
      var cursorStatus = 0;
      if (queryString().speed) {
        var speed = decodeURI(queryString().speed);
      } else {
        var speed = 500;
      }
      setInterval(() => {
        if(cursorStatus == 0) {
          document.getElementById('cursor').style.opacity = 1;
          document.getElementById('cursor').innerHTML = "|"; //"&nbsp&nbsp&nbsp";
          cursorStatus = 1;
        } else if (cursorStatus == 1) {
          document.getElementById('cursor').style.opacity = 1;
          document.getElementById('cursor').innerHTML = "/"; //decodeURI(queryString().cursor) + "&nbsp&nbsp";
          cursorStatus = 2;
        } else if (cursorStatus == 2) {
          document.getElementById('cursor').style.opacity = 1;
          document.getElementById('cursor').innerHTML = "-"; //decodeURI(queryString().cursor) + decodeURI(queryString().cursor) + "&nbsp";
          cursorStatus = 3;
        } else if (cursorStatus == 3) {
          document.getElementById('cursor').style.opacity = 1;
          document.getElementById('cursor').innerHTML = "\\"; //decodeURI(queryString().cursor) + decodeURI(queryString().cursor) + decodeURI(queryString().cursor);
          cursorStatus = 0;
        }
      }, speed);
    } else {
      document.getElementById('banner').innerHTML = decodeURI(queryString().banner)
    }
  } else {
    document.getElementById('banner').remove();
  }
  recall();
  window.setInterval(recall, 250);
})(window, document);