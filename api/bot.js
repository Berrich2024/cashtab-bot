const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: ['--incognito'] });
    const page = await browser.newPage();

    // Navigate to Cashtab
    await page.goto('https://cashtab.com');

    // Click on "New Wallet"
    await page.click('button:contains("New Wallet")');

    // Wait for navigation to complete
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Click on "Claim Free XEC"
    await page.click('button:contains("Claim Free XEC")');

    // Wait for the new screen to load and locate the Telegram-like button (identified by class name "tx-sent")
    await page.waitForSelector('.tx-sent'); // Wait for the element to appear
    await page.click('.tx-sent');           // Click on the Telegram-like button

    // Fill in the Address
    await page.type('input[name="address"]', 'ecash:qqsf9cnwcpjz67jq2hd5gcegfe79yz4w6s64kntvje');

    // Click on "Max"
    await page.click('button:contains("Max")');

    // Click on "Send"
    await page.click('button:contains("Send")');

    // Close the browser
    await browser.close();
})();
