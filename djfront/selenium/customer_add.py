import names
import time
from decouple import config
from selenium import webdriver


HOME = config('HOME')
# page = webdriver.Firefox()
page = webdriver.Chrome(executable_path=HOME + '/chromedriver/chromedriver')
page.maximize_window()
time.sleep(0.5)
page.get('http://localhost:8000/customer/')

first_name = names.get_first_name()
last_name = names.get_last_name()
full_name = first_name + ' ' + last_name
print(first_name, last_name)
email = '%s@example.com' % first_name.lower()

# Login
# search = page.find_element_by_id('id_username')
# search.send_keys('admin')

# search = page.find_element_by_id('id_password')
# search.send_keys('demodemo')

# search = page.find_element_by_class_name('btn-success')
# search.click()

# btn Adicionar
search = page.find_element_by_id('btn-customer-add')
search.click()
time.sleep(0.5)

fields = [
    ['id_name', full_name],
    ['id_email', email],
]

for field in fields:
    search = page.find_element_by_id(field[0])
    search.send_keys(field[1])
    time.sleep(0.1)


button = page.find_element_by_xpath("//form[@id='customer-form']//button")
# button = page.find_element_by_id('add_contact')
# button = page.find_element_by_class_name('btn-success')
button.click()

time.sleep(2)
page.quit()
