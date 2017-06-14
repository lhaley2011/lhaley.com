
function Time(element) {
  setInterval(function() { this.updateTime(element); }, 1000);
}

Time.prototype.updateTime = function(selector) {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    $(selector).text(t_str);
}