notifyMe('Halo guys, selamat datang :)', 'Di blog pribadi saya, jika membutuhkan bantuan silahkan hubungi saya melalui form contact, terima kasih.')
    function notifyMe(msg_title, msg_body, redirect_onclick) {
        var granted = 0;
 
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
 
        // Let's check if the user is okay to get some notification
        else if (Notification.permission === "granted") {
            granted = 1;
        }
 
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                // If the user is okay, let's create a notification
                if (permission === "granted") {
                    granted = 1;
                }
            });
        }
 
        if (granted == 1) {
            var notification = new Notification(msg_title, {
                body: msg_body,
                icon: 'http://lh3.googleusercontent.com/-N-KpzssDVG4/VqUuBqyprdI/AAAAAAAABN4/lF9mML1v5vc/s200-Ic42/Zulmy%252520Eve%252520avatar.jpg'
            });

		// Audio play with notif
          	var audio = new Audio('http://zulmyeve.generasi.net/files/off.mp3');
			audio.play();
 
            if (redirect_onclick) {
                notification.onclick = function() {
                    window.location.href = redirect_onclick;
                }
            }
        }
    }
