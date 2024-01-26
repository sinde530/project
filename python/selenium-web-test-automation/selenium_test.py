from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

driver = webdriver.Chrome(service= Service(ChromeDriverManager().install()))

url = "https://www.naver.com/"
driver.get(url)

element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "query")))
element.send_keys("python")
element.send_keys(Keys.RETURN)

time.sleep(5)
