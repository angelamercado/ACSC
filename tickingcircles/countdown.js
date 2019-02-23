$(window).resize(function(){
    $("#DateCountdown").TimeCircles().rebuild();
});
$("#DateCountdown").TimeCircles({
  "animation": "smooth",
  "bg_width": 0.7,
  "fg_width": 0.06,
  "circle_bg_color": "#f7f7f7",
    "time": {
      "Days": {
        "text": "Days",
        "color": "#6cbb88",
        "show": true
      },
          "Hours": {
        "text": "Hours",
        "color": "#6cbb88",
        "show": false
      },
      "Minutes": {
        "text": "Minutes",
        "color": "#6cbb88",
        "show": false
      },
      "Seconds": {
        "text": "",
        "color": "#e5972f",
         "show": false
      }
    }
});
