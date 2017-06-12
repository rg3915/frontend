from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

HOME = config('HOME')
driver = webdriver.Firefox()
driver.get("https://rg3915.github.io/frontend/includes/slider.html")
driver.switch_to_active_element()
source_element = driver.find_element_by_class_name('slider-track')

height = source_element.size['height']
width = source_element.size['width']

slider = driver.find_element_by_css_selector("#o1Slider > div.slider-handle.min-slider-handle.round")

move = ActionChains(driver)
move.click_and_hold(slider).move_by_offset(100 * width / 100, 0).release().perform()
