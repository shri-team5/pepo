modules.define('location', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.elem('button').on('click', this._onLocationClick.bind(this));
                }
            },

            _onLocationClick: function (e) {
                e.preventDefault();
                if (!navigator.geolocation){
                    alert('Геолокация не поддерживается вашим браузером');
                    return;
                }

                var self = this;

                function success(position) {
                    var latitude  = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    // var img = new Image();
                    // img.src = "https://static-maps.yandex.ru/1.x/?ll=" + longitude + "," + latitude + "&size=400,250&z=14&l=map" +
                    //     "&pt=" + longitude + "," + latitude + ",round";
                    //
                    // this.elem('map').html(img);


                    self.elem('location').val(longitude + "," + latitude);
                    $.ajax({
                        url: 'https://geocode-maps.yandex.ru/1.x/?geocode=' + longitude + ',' + latitude + '&format=json',
                        async: true,
                        type: 'get',
                        data: {},
                        success: function (response) {
                            var members = response.response.GeoObjectCollection.featureMember;
                            self.elem('text').html(members[0].GeoObject.description+', '+members[0].GeoObject.name);
                        },
                        error: function (xhr) {
                            self.elem('text').html('Невозможно определить адрес');
                        }
                    });

                }

                function error() {
                    alert('Невозможно определить адрес');
                }

                navigator.geolocation.getCurrentPosition(success, error);
            },


        })
    )
});
