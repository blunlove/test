# import webbrowser
# webbrowser.open("chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/627b8bb1-d482-4958-b9dd-e58c2599570b")
import time
from selenium import webdriver
import webbrowser
def mac():
  driver = webdriver.Chrome('www.baidu.com')
  # driver = webdriver.open()
  driver.implicitly_wait(5)
  driver.get("chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/627b8bb1-d482-4958-b9dd-e58c2599570b")
mac()