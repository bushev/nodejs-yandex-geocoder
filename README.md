# nodejs-yandex-geocoder


### Usage

```javascript

var yandexGeocoder = new YandexGeocoder({apiKey: 'YOUR_API_KEY_HERE'});

yandexGeocoder.resolve('Пермь, улица Бекетова', (err, collection) => {
    if (err) throw err;

    /*    
    collection = [{
        obl: 'Пермский край',
        raion: 'городской округ Пермь',
        place: 'Пермь',
        street: 'улица Бекетова'
    }]
    */
});
```