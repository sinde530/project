const playwright = require('playwright');

(async () => {
  // Chrome 브라우저 실행
  const browser = await playwright.chromium.launch();

  // 새로운 페이지 열기
  const page = await browser.newPage();

  // Google로 이동
  await page.goto('https://www.google.com', { waitUntil: 'networkidle' });

  // 검색어 입력
  await page.fill('textarea[name="q"]', 'Playwright');

  // 검색 버튼 클릭
  await page.click('input[type="submit"]');

  // 페이지 로딩 완료 대기
  await page.waitForNavigation({ waitUntil: 'networkidle' });

  // 검색 결과 확인
  const searchResults = await page.$$eval('h3', (elements) => elements.map((el) => el.textContent));
  console.log(searchResults);


  // 브라우저 종료
  await browser.close();
})();
