const express = require("express"),
app = express(),
router = require("../routes/studentServiceRoutes"),
request = require("supertest");
app.use("/", router); 

test("Get the default root", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({
        error: true, message: "hello"
    });
});

test("Get by specified path", async () => {
    const res = await request(app).get("/students");
    expect(res.body.data).toEqual
    ([
        {
            "STU_ID": 1,
            "STU_FNAME": "Andrew",
            "STU_LNAME": "Black",
            "STU_AGE": 25,
        },
        {
            "STU_ID": 2,
            "STU_FNAME": "Alexandra",
            "STU_LNAME": "Brown",
            "STU_AGE": 25,
        },
        {
            "STU_ID": 3,
            "STU_FNAME": "Amanda",
            "STU_LNAME": "Davidson",
            "STU_AGE": 25,
        },
        {
            "STU_ID": 4,
            "STU_FNAME": "Benjamin",
            "STU_LNAME": "Duncan",
            "STU_AGE": 25,
        },
        {
            "STU_ID": 5,
            "STU_FNAME": "Christopher",
            "STU_LNAME": "Ellison",
            "STU_AGE": 25,
        },
    ]);
});