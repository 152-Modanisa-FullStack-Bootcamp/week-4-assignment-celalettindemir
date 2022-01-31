const {Given, When, Then} = require("cucumber");
const  openUrl=require("../support/action/openUrl")
const checkContainsText = require("../support/check/checkContainsText")
const checkUrlContains = require("../support/check/checkUrlContains")
const checkAttributeContains = require("../support/check/checkAttributeContains")
const assert = require("assert");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this,"http://localhost:8081/")
});
When(/^page is loaded$/,async  function () {
    await this.page.waitForNetworkIdle();
});
Then(/^User can see some of videos' title like$/, async function (arr) {

    const selector = "#title";
    await this.page.waitForSelector(selector);
    let array=[];
    for (let [ productName ] of arr.rawTable) {
        const value = await this.page.$$eval(
            selector,
            async (items, productName) => {
                const video = items
                    .find(item => item.textContent.includes(productName))
                if(video!==undefined)
                    return false;
                else
                    return true;
            },
            productName
        )
        assert.notEqual(value,true,"Not find title")
    }
});
Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this,"http://localhost:8081/")
});
When(/^User clicks "([^"]*)" video$/, async function (title) {
    const selector = ".main-post"
    await this.page.waitForSelector(selector);
    await this.page.$$eval(
        selector,
        async (items, title) => {
            const video = items
                .find(item => item.querySelector("#title").textContent.includes(title))
            const favoriteBtn = video.querySelector(".main-video")
            favoriteBtn.click();
        },
        title
    )
});
Then(/^User should see watch url correctly$/, async function () {
    await this.page.waitForTimeout(3000)
    await checkUrlContains.call(this,false,"https://www.youtube.com/watch?v=qZXt1Aom3Cs");
});
When(/^User hovers "([^"]*)" video$/,async function (title) {
    const selector = ".main-post"
    await this.page.waitForSelector(selector);
    this.videoSelect = await this.page.$$eval(
        selector,
        async (items, title) => {
            const videoIndex = items
                .findIndex(item => item.querySelector("#title").textContent.includes(title))
            return ".main-post:nth-child("+videoIndex+") .main-video"
        },
        title
    )
    await this.page.hover(this.videoSelect)
});
Then(/^User should see hovered image$/,async  function () {

    await this.page.waitForTimeout(500)
    await checkAttributeContains.call(this,"src",this.videoSelect,false,"2-hover.webp")
});