var expect = require("chai").expect;
var request = require("request");

describe("Webserver start", function() {
	var url = "http://localhost:8080/";
	it("returns status 200", function() {
		request(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});
});
