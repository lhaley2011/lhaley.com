var expect = require("chai").expect;
var request = require("request");

describe("Website page available", function() {
        var url = "http://localhost:8080/";
        it("Homepage status 200", function() {
                request(url, function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                });
        });
	it("About status 200", function() {
                request(url+'/about', function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                });
        });
	it("Projects status 200", function() {
                request(url+'/projects', function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                });
        });
	it("Resume status 200", function() {
                request(url+'/resume', function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                });
        });
	it("Resume Download status 200", function() {
                request(url+'/resume.pdf', function(error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                });
        });
});

