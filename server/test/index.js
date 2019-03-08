const test = require("tape");
const request = require("supertest");

// our packages
const app = require("../src/app");

test("GET /", t => {
  request(app)
    .get("/")
    .expect(200)
    .expect("Content-type", /text\/html/)
    .end((err, res) => {
      const expectBody = "Hello world!!!";
      const actualBody = res.text;

      t.error(err, "No error");
      t.equal(actualBody, expectBody, "Retrieve body");
      t.end();
    });
});
