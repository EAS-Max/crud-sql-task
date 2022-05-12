var expect = require("chai").expect;
var request = require("request");


describe("Catogory actions test", function () {

    describe("get categories test", function () {

        var url = "http://localhost:4000/api/categories";

        it("gets all catogories", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("get categories by ID test", function () {

        var url = "http://localhost:4000/api/categories/1";

        it("gets all catogories by ID", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("get all Items test", function () {

        var url = "http://localhost:4000/api/items";

        it("gets all items", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("get items by ID test", function () {

        var url = "http://localhost:4000/api/items/1";

        it("gets all items by ID", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    //     describe("Hex to RGB conversion", function () {
    //         var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    //         it("returns status 200", function (done) {
    //             request(url, function (error, response, body) {
    //                 expect(response.statusCode).to.equal(200);
    //                 done();
    //             });
    //         });

    //         it("returns the color in RGB", function (done) {
    //             request(url, function (error, response, body) {
    //                 expect(body).to.equal("[0,255,0]");
    //                 done();
    //             });
    //         });
    //     });

});