const express = require('express')
const app = express()
const mongoose = require("mongoose");
const supertest = require("supertest");
const Topics = require("../models/topics");

// Middlewares...
// Routes...

module.exports = app

describe("Is jest working", () => {
  // test stuff
  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })
});

test("GET /api/topics", async () => {
  const post = await Topics.create({ title: "Post 1", content: "Lorem ipsum" });

  await supertest(app).get("/api/topics")
    .expect(200)
    .then((response) => {
      // Check type and length
      // expect(Array.isArray(response.body)).toBeTruthy();
      // expect(response.body.length).toEqual(1);
      //
      // Check data
      // expect(response.body[0]._id).toBe(post.id);
      // expect(response.body[0].title).toBe(post.title);
      // expect(response.body[0].content).toBe(post.content);
    });
});
