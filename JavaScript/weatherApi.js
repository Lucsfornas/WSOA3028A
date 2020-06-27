var button = document.querySelector('.button')
var inputvalue = document.querySelector('.Apidata')
var name = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector(".temp")



button.addEventListener('click', function () {
    fetch('api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&APPID=8a71da0d39cee6e47fe8472e84a233a2')
        .then(responce => responce.json())
        .then(data => {
            var namevalue = data['name'];
            var tempvalue = data['main']['temp'];
            var descvalue = data['weather'][0]['description'];

            name.innerHTML = namevalue;
            temp.innerHTML = tempvalue;
            desc.innerHTML = descvalue;
        })



        .catch(err => alert("wrong city name"))
})
