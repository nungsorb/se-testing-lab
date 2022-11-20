const puppeteer = require("puppeteer");

test("Get the information by specified ID", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--window-size=1920,1080"],
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3100/");
    await page.click("input#STU_ID");
    await page.type("input#STU_ID", "5");
    page.on("dialog", async (dialog) => {
        await dialog.accept();
    });
    await page.click("input#select");
    
    const studentObject = await page.evaluate(() => {
        return {
            firstName: document.getElementById("STU_FNAME").value,
            lastName: document.getElementById("STU_LNAME").value,
            age: document.getElementById("STU_AGE").value,
        };
    });
    expect(studentObject).toEqual({
        firstName: "Christopher",
        lastName: "Ellison",
        age: "25",
    });
}, 20000);