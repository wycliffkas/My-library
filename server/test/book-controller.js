const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
// const faker = require("faker");
// const { Book } = require("../database");
// const UserRepository = require("./user.repository");

const Book = require("../models/book");
const BookController = require("../controllers/book");

describe("UserRepository", function () {
  const stubValue = {
    book: {
      _id: "5f2eb833ec3b7379c1336cbe",
      name: "things fall apart2020",
      isbn: "12sffghhhs2020",
      author: "5f2a8b2424bd453af0710f6a",
      createdAt: "2020-08-08T14:35:31.692Z",
      updatedAt: "2020-08-08T14:35:31.692Z",
    },
  };
  describe("create", function () {
    it("should add a new user to the db", async function () {
      const stub = sinon.stub(Book, "save").returns(stubValue);
      // const userRepository = new UserRepository();
      const user = await BookController.createBook(
        stubValue.name,
        stubValue.isbn,
        stubValue.author
      );
      expect(stub.calledOnce).to.be.true;
      expect(user.book.id).to.equal(stubValue.book.id);
      expect(user.book.name).to.equal(stubValue.book.name);
      expect(user.book.isbn).to.equal(stubValue.book.isbn);
      expect(user.book.author).to.equal(stubValue.book.author);
      expect(user.book.createdAt).to.equal(stubValue.book.createdAt);
      expect(user.book.updatedAt).to.equal(stubValue.book.updatedAt);
    });
  });
});

// describe("UserRepository", function () {
//   const stubValue = {
//     id: "5f2eb833ec3b7379c1336cbe",
//     name: "things fall apart2020",
//     isbn: "12sffghhhs2020",
//     createdAt: "2020-08-08T14:35:31.692Z",
//     updatedAt: "2020-08-08T14:35:31.692Z",
//   };
//   describe("getUser", function () {
//     it("should retrieve a user with specific id", async function () {
//       const stub = sinon.stub(Book, "findOne").returns(stubValue);
//       //   const userRepository = new UserRepository();
//       const user = await BookController.getBook("5f2eb833ec3b7379c1336cbe");
//       expect(stub.calledOnce).to.be.true;
//       expect(user.id).to.equal("5f2eb833ec3b7379c1336cbe");
//       expect(user.name).to.equal(stubValue.name);
//       expect(user.isbn).to.equal(stubValue.isbn);
//       expect(user.createdAt).to.equal(stubValue.createdAt);
//       expect(user.updatedAt).to.equal(stubValue.updatedAt);
//     });
//   });
// });

// const expect = require("chai").expect;
// const sinon = require("sinon");
// let mongoose = require("mongoose");

// const Book = require("../models/book");
// const BookController = require("../controllers/book");

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../app');
// let should = chai.should();

// chai.use(chaiHttp);

// describe('Books', () => {
//     beforeEach((done) => {
//         Book.deleteMany({}, (err) => {
//            done();
//         });
//     });

//     describe('/GET books', () => {
//         it('it should GET all the books', (done) => {
//               chai.request(server)
//               .get('/books')
//               .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('array');
//                     res.body.length.should.be.eql(0);
//                 done();
//               });
//         });
//     });

// })

// var getUsers = require('../routes/main');

// describe("Routes", function() {
//   describe("GET Users", function() {

//       it("should respond", function() {
//         var req,res,spy;

//         req = res = {};
//         spy = res.send = sinon.spy();

//         getUsers(req, res);
//         expect(spy.calledOnce).to.equal(true);
//       });

//   });
// });

// describe('index (get all)', function () {
//     beforeEach(function () {
//         res = {
//             json: sinon.spy(),
//             status: sinon.stub().returns({ end: sinon.spy() })
//         };
//         expectedResult = [{}, {}, {}]
//     });
//     // it('should return array of books or empty array', () => {
//     //     sinon.stub(Book, 'find').yields(null, expectedResult);
//     //     BookController.getBooks({}, {}, () => {});
//     //     sinon.assert.calledWith(Book.find, {});
//     //     sinon.assert.calledWith(res.json, sinon.match.array);
//     // });
//     it('should return status 500 on server error', () =>{
//         sinon.stub(Book, 'find').yields(error);
//         BookController.getBooks({}, {}, () => {});
//         sinon.assert.calledWith(Book.find, {});
//         sinon.assert.calledWith(res.status, 500);
//         sinon.assert.calledOnce(res.status(500).end);
//     });
// });

// describe("Book Controller - getBooks", () => {
//   it("it should throw an error with code 500 if accessing the database fails", () => {
//     sinon.stub(Book, "findById");
//     Book.findById.throws();

//     const req = {
//         params: {
//         bookId:"12345677789"
//       },
//     };

//     // req.params.bookId

//     //   expect(BookController.getBooks)
//     BookController.getBook(req, {}, () => {}).then(result => {
//         console.log(result)
//     });

//     Book.findById.restore();
//   });
// });
