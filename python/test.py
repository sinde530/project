from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
import time

# sinde530 / !Qwerdfdf

driver = webdriver.Chrome()

driver.get('https://memberssl.auction.co.kr/Authenticate/?url=http%3a%2f%2fitempage3.auction.co.kr%2fDetailView.aspx%3fitemno%3dC235988696&return_value=0')

# select_xpath = 'select-item_option uxeselect_btn'
id_xpath = '//*[@id="id"]'
password_xpath = '//*[@id="password"]'
login_submit_xpath = '//*[@id="login-app"]/div/div[1]/fieldset/button[1]'

search_input_xpath='//*[@id="txtKeyword"]'

product_number = 'C235988696'

select_xpath1 = '//*[@id="upOrderInfo"]/fieldset/div[1]/div[2]/div[1]/div[2]/div/button'
select_xpath2 = '//*[@id="upOrderInfo"]/fieldset/div[1]/div[2]/div[1]/div[2]/div/ul/li/a'
buy_xpath = '//*[@id="ucItemOrderInfo_ucItemOrderButtons_hdivBuy"]/button[2]'
order_info_xpath1 = '//*[@id="ucItemOrderInfo_ucOptionTemplate_ucShippingFeeList_divTopShippingFeeList"]/div/button'
order_info_xpath2 = '//*[@id="ucItemOrderInfo_ucOptionTemplate_ucShippingFeeList_rptShippingFeeList_Top_ancShippingFee_1"]'

login = driver.find_element(By.XPATH, id_xpath)
login.send_keys('')
login = driver.find_element(By.XPATH, password_xpath)
login.send_keys('')
login = driver.find_element(By.XPATH, login_submit_xpath)
login.click()

# search = driver.find_element(By.XPATH, search_input_xpath)
# search.send_keys('C235988696')

# search.send_keys(Keys.RETURN)

time.sleep(2)

select = driver.find_element(By.XPATH, select_xpath1)
select.click()

select = driver.find_element(By.XPATH, select_xpath2)
select.click()

time.sleep(2)

oeder_info = driver.find_element(By.XPATH, order_info_xpath1)
oeder_info.click()

oeder_info = driver.find_element(By.XPATH, order_info_xpath2)
oeder_info.click()

buy_button = driver.find_element(By.XPATH, buy_xpath)
buy_button.click()

mutongjang_xpath = '//*[@id="xo_id_section_normal_pay"]/div[2]/ul/li[1]/label'
button_click = driver.find_element(By.XPATH, mutongjang_xpath)
button_click.click()

kakaobutton_xpath = '//*[@id="xo_id_section_normal_pay"]/div[2]/div/div/div[1]/ul/li[11]'
button_click = driver.find_element(By.XPATH, kakaobutton_xpath)
button_click.click()


# modal = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.ID, "modal_id_here"))
# )

# keypad_elements = driver.find_elements(By.CLASS_NAME, "keypad_class_here")
# desired_sequence = [0, 2, 1, 7, 0, 3, 3, 1]

# for num in desired_sequence:
#     for element in keypad_elements:
#         if element.text == str(num):
#             element.click()
#             time.sleep(0.5)
#             break

time.sleep(300)