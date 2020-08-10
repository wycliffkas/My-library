const main = require("../routes/main");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", main);

describe("main route", function () {
it("testing route works", (done) => {
  request(app)
    .post("/book")
    .type("form")
    .send({
      name: "things fall apart2020",
      isbn: "12sffghhhs2020",
      author: "5f2a8b2424bd453af0710f6a",
    })
    .then(() => {
      request(app)
        .get("/books")
        .expect({ array: ["things fall apart2020"] }, done);
    })
    .catch(done);
});
})    
