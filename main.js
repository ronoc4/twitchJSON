/**
 * Created by conor on 7/14/16.
 */

//Run our jquery
$(document).ready(function () {

    //URL to JSON of stream status
    var url1 = 'https://api.twitch.tv/kraken/streams/freecodecamp';
    var followURL = 'https://api.twitch.tv/kraken/users/ronoc4/follows/channels';
    var following = [];

    $.getJSON(url1, function (data1) {
        var online;
        var fccTwitchURL = 'https://www.twitch.tv/freecodecamp';

        //Change later
        if(data1.stream === null){
            $('#name').html('<h4><a href=' + fccTwitchURL + '>' + 'Free Code Camp</a></h4>');
            $('#status').html('<h4 id="tOffline"><span class="circleOffline circle"></span><p>Offline</p></h4>');
            $('#logo').html('<img src="https://phixs.com/wp-content/uploads/2016/01/Offline.png"/>');
        }
        else {
            var logo = data1.stream.channel.logo;
            $('#logo').html('<img src="' + logo + '\"/>');
            var dName = data1.stream.channel.display_name;
            $('#name').html('<h4>' + dName + '</h4>');
            $('#status').html('<h4 id="tOnline"><span class="circleOnline circle"></span><p>Online</p></h4>');
        }

        var channelURL;
        $.getJSON(followURL, function (data2) {
           for( var i = 0; i < data2.follows.length; i++) {

              var displayNames = data2.follows[i].channel.display_name;

               following.push(displayNames);
               console.log(displayNames);

               channelURL = data2.follows[i].channel.url;
               // console.log(channelURL);
               var logo1 = data2.follows[i].channel.logo;
               console.log(logo1);

               logos = '<div class="row">' +'<img src=\"' + logo1 + '\"/>' + '</div>';
               names = '<h4><a href=' + channelURL + '>' + displayNames + '</a>' + '</h4>';


               // html = '<div class="row">' +
               //     '<img src=\"' + logo1 + '\"/>' +
               //     '<h4><a href=' + channelURL + '>' + displayNames + '</a>' + '</h4>' + '</div>';
               // $('#display').append(html);

               $('#logo').append(logos);
               $('#name').append(names);
               $('a').addClass("targetArticle").attr('target', '_blank');
           }



            console.log(channelURL);
            for(var j = 0; j < following.length; j++) {
                var url_2 = 'https://api.twitch.tv/kraken/streams/' + following[j]; // + '/?callback=?' not sure if needed

                //$('#name').append('<h4><a href=' + channelURL + '>' + following[j] + '</a>' + '</h4>');
                //$('a').addClass("targetArticle").attr('target', '_blank');

            }

                $.getJSON(url_2).done(function (data3) {
                    var logo;
                    var name;
                    var status;



                    // if(data3.stream === null) {
                    //     $('#name').html('<h3>NAME</h3>');
                    //     $('#status').html('<h3 id="tOffline"><span class="circleOffline circle"></span><p>Offline</p></h3>');
                    //     $('#logo').html('<img src="https://phixs.com/wp-content/uploads/2016/01/Offline.png"/>');
                    // }

                });

        });


    });
});
