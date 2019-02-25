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
        "color": "#2a6c4e",
        "show": true
      },
          "Hours": {
        "text": "Hours",
        "color": "#2a6c4e",
        "show": false
      },
      "Minutes": {
        "text": "Minutes",
        "color": "#2a6c4e",
        "show": false
      },
      "Seconds": {
        "text": "",
        "color": "#e5972f",
         "show": false
      }
    }
});
