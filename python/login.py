from selenium import webdriver
import time
# def login(username,password):
# 	dr = webdriver.Chrome()
# 	dr.get("chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/627b8bb1-d482-4958-b9dd-e58c2599570b")
# 	# dr.find_element_by_xpath("//*/div[contains(@class,'menu')]/ul/li[4]").click()
# 	# dr.find_element_by_id("username").clear()
# 	# dr.find_element_by_id("username").send_keys(username)
# 	# dr.find_element_by_id("password").clear()
# 	# dr.find_element_by_id("password").send_keys(password)
# 	# dr.find_element_by_tag_name("button").click()

# 	time.sleep(10)
# 	return dr
# 	print(dr.title)

if __name__ == '__main__':
	# login('1000000','dj123456')
	dr = webdriver.Chrome()
	dr.get("chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/627b8bb1-d482-4958-b9dd-e58c2599570b")
