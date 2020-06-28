window.addEventListener('load', () => {

    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8a71da0d39cee6e47fe8472e84a233a2`;

            fetch(api)
                .then(responce => {
                    return responce.json();
                })
                .then(data => {
                    console.log(data);
                });
        });


    }

});

