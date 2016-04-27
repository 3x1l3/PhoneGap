document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('#notification-button').click(function() {

        
    });

    $('#vibrate-button').click(function() {
        navigator.vibrate(1000);
    });

    $('#name-button').click(function() {
        navigator.notification.prompt(
            'Please enter your name', // message
            function(results) {
                $('.name-badge').text("Your name: " + results.input1).removeClass('hidden');
            }, // callback to invoke
            'Please enter your name', // title
            ['Ok', 'Exit'], // buttonLabels
            'Your Name' // defaultText
        );
    });

    $('#camera-button').click(function() {
        /**
         * Warning: Using DATA_URL is not recommended! The DATA_URL destination
         * type is very memory intensive, even with a low quality setting. Using it
         * can result in out of memory errors and application crashes. Use FILE_URI
         * or NATIVE_URI instead.
         */
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 25,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA
        });

        function onSuccess(imageData) {
            $('#image').attr('src', "data:image/jpeg;base64," + imageData).removeClass('hidden');
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    });

    console.log("end of device ready callback");
}
