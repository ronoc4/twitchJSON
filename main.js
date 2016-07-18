/**
 * Created by conor on 7/14/16.
 */

//Run our jquery
$(document).ready(function () {

    //URL to JSON of stream status
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp?callback=?";
    $.getJSON(url, function (data1) {
        var online;
        var logo = data1.stream.channel.logo;
        $('#logo').html('<img src="' + logo + '\"/>');

        var dName = data1.stream.channel.display_name;
        $('#name').html('<h3>' + dName + '</h3>');
        //Change later
        if(data1.stream){
            online = true;
            $('#status').html('<h3 id="tOnline"><span class="circleMain"></span><a>Online</a></h3>')
        }
        else {
            online = false;
            $('#status').html('<h3 id="tOffline"><span class="circleMain"></span><a>Offline</a></h3>')
        }




    });
});
