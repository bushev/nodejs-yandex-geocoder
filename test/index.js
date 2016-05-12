'use strict';

/**
 * Should library
 *
 * @type {should|exports|module.exports}
 */
const should = require('should');

/**
 * nodejs-yandex-geocoder module
 *
 * @type {YandexGeocoder|exports|module.exports}
 */
const YandexGeocoder = require('../index');

const apiKey = 'KEY_HERE';

describe('Make request', () => {

    it('with wrong API key', done => {

        var yandexGeocoder = new YandexGeocoder({apiKey: '12345'});

        yandexGeocoder.resolve('улица Бекетова 12', {}, (err, collection) => {
            should.exists(err);

            err.message.should.equal('invalid key');
            should.not.exists(collection);

            done();
        });
    });

    it('1', done => {

        var yandexGeocoder = new YandexGeocoder({apiKey: apiKey});

        yandexGeocoder.resolve('Пермь, улица Бекетова', (err, collection) => {
            should.not.exists(err);

            collection.should.be.lengthOf(1);

            collection[0].obl.should.equal('Пермский край');
            collection[0].raion.should.equal('городской округ Пермь');
            collection[0].place.should.equal('Пермь');
            collection[0].street.should.equal('улица Бекетова');

            done();
        });
    });

    it('2', done => {

        var yandexGeocoder = new YandexGeocoder({apiKey: apiKey});

        yandexGeocoder.resolve('Москва, красная площадь 1', {russianAddressesOnly: true, results: 1}, (err, collection) => {
            should.not.exists(err);

            collection.should.be.lengthOf(1);

            collection[0].obl.should.equal('Москва');
            collection[0].street.should.equal('Красная площадь');
            collection[0].house.should.equal('1');

            done();
        });
    });
});