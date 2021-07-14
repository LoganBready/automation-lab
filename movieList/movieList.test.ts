import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// afterAll(async () => {
//     await driver.quit()
// })

test('Add Movie to List', async () => {

    let addMovie = await driver.findElement(By.xpath('//input'))
    await addMovie.sendKeys('Test\n')
    
    await driver.sleep(2000)

    let crossMovie = await driver.findElement(By.xpath(`//ul/li/span`))
    await crossMovie.click()

    await driver.sleep(2000)

    await crossMovie.click()

    let clickDelte = await driver.findElement(By.id(`Test`))
    await clickDelte.click()

    

    await (await driver).quit()
})

