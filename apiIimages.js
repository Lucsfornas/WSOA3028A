$.getJSON('https://api.unsplash.com/users/lucafo111/photos/?client_id=Ju_Dm8ljo6blQ1eDr2KT6DYeuD01J_ZZPRM8E9dtmzE', function (data) {
    console.log(data);

    $.each(data, function () {
        console.log(value)
    });
});
