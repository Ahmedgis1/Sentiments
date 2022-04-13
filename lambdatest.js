const webdriver = require('selenium-webdriver');

const username = "ahmedjgis";
const accessKey = "EF5bE7zMiEQobofkxu5IOnk3REej7kE71fV8ulnoF1YwFbwH5o"
console.warn = () => {};

const GRID_HOST = 'hub.lambdatest.com/wd/hub';
async function runTestWithCaps(capabilities) {
    let driver = new webdriver.Builder()
        .usingServer('http://'+username+':'+ accessKey+'@'+GRID_HOST)
        .withCapabilities({
            ...capabilities,
            ...capabilities['browser'] && { browserName: capabilities['browser'] }  // Because NodeJS language binding requires browserName to be defined
        })
        .build();

    // Gets the Sample To-Do App
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // Clicks on first checkbox
    const check_box_one = await driver.findElement(webdriver.By.name("li1"));
    await check_box_one.click();

    // Clicks on second checkbox
    const check_box_two = await driver.findElement(webdriver.By.name("li2"));
    await check_box_two.click();

    // Adds Text and enters to -Do list
    const inputField = await driver.findElement(webdriver.By.id("sampletodotext"))
    await inputField.sendKeys("Yey, Let's add it to list")

    const addButton = await driver.findElement(webdriver.By.id("addbutton"))
    await addButton.click();

    const added_item = await driver.findElement(webdriver.By.xpath("//span[@class='done-false']")).text
    await console.log(added_item)

    await driver.quit();
}


const capabilities1 = {
  'browserName': 'Chrome',
  'version': '92.0',
  'platform': 'Windows 10',
  'resolution': '1024x768',
  'build': 'Lambdatest-build-1',
  'name': 'Parallel test 1'
}
const capabilities2 = {
  'browserName': 'Chrome',
  'version': '92.0',
  'platform': 'Windows 10',
  'resolution': '1024x768',
  'build': 'Lambdatest-build-1',
  'name': 'Parallel test 2'
}
runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
