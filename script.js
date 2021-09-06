
    function light(value){
      var lightswitch;
      var weather;

        if(value == 0){
          lightswitch = "office_images/lightOff.png";
          weather = "office_images/daylight.png";
          
        }
        else{
          lightswitch = "office_images/lightOn.png";
          weather = "office_images/nightsky.png";
        }

        document.getElementById("light").src=lightswitch;

        document.getElementById("outside").src=weather;
    }