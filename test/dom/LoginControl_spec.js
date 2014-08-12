chai.should();

describe('Module test', function () {
	beforeEach(function (done) {
		//setup

		done();
	});
	afterEach(function (done) {
		//teardown

		done();
	});
	describe('#function to test', function() {
		it('should fail', function(done) {
			true.should.equal(false);
			done();
		});
	});
});