const express = require("express"),
  app = express(),
  router = require("../routes/studentServiceRoutes"),
  request = require("supertest");
app.use("/", router);

describe("Getting information of the first student in database with /students and / student /: id ", () => {
  let firstStudent;
  test("Retrieved the student ", async () => {
    const res = await request(app).get("/students");
    expect(res.body.data).toEqual([
      {
        STU_ID: 1,
        STU_FNAME: "Andrew",
        STU_LNAME: "Black",
        STU_AGE: 25,
      },
      {
        STU_ID: 2,
        STU_FNAME: "Alexandra",
        STU_LNAME: "Brown",
        STU_AGE: 25,
      },
      {
        STU_ID: 3,
        STU_FNAME: "Amanda",
        STU_LNAME: "Davidson",
        STU_AGE: 25,
      },
      {
        STU_ID: 4,
        STU_FNAME: "Benjamin",
        STU_LNAME: "Duncan",
        STU_AGE: 25,
      },
      {
        STU_ID: 5,
        STU_FNAME: "Christopher",
        STU_LNAME: "Ellison",
        STU_AGE: 25,
      },
    ]);
    firstStudent = res.body.data[0];
  });

  test("Get the information of first student with spcified id with URL parameter", async () => {
    const res = await request(app).get(`/student/${firstStudent.STU_ID}`);
    expect(res.body.data).toEqual(firstStudent);
  });
});
