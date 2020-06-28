window.addEventListener('load', () => {

    let long;
    let lat;
    let temperaturedescription = document.querySelector(".temperature-description");
    let temperaturedegree = document.querySelector(".temperature-degree");
    let locationtimezone = document.querySelector("location-timezone");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8a71da0d39cee6e47fe8472e84a233a2`;

            fetch(api)
                .then(Responce => {
                    return Responce.json();
                })
                .then(data => {
                    console.log(data);

                    const { temp, description } = data.currently;
                });
        });


    }

});

