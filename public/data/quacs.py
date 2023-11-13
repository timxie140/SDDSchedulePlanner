from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import time
import json

browser = webdriver.Chrome()
action = ActionChains(browser)
browser.get('https://quacs.org/fall2021/#')
time.sleep(1)
f = open('data.json', 'w', encoding='utf-8')
"""
result_result = {
    class_name: each_class
}
each_class = {
            "name": "",
            "prefix": "",
            "level": "",
            "credit": 0,
            "intro": "",
            "sections": []  # [[section_num, crn, prof], [...]]
}
"""

result_result = {}
majors = browser.find_elements(By.CLASS_NAME, "department-code")
for x, y in enumerate(majors):  # loop through every major
    i = browser.find_elements(By.CLASS_NAME, "department-code")[x]
    text = i.text
    i.click()
    time.sleep(1)
    classes = browser.find_elements(By.CLASS_NAME, "card-header")
    temp = []
    for i, j in enumerate(classes):  # loop through every class, x is index and y is content
        each_class = {
            "name": "",
            "prefix": "",
            "level": "",
            "credit": 0,
            "sections": []  # [[section_num, crn, prof], [...]]
        }
        each_text = j.text
        each_class["name"] = each_text[9:each_text.find("•")]
        each_class["name"] = each_class["name"].strip()
        each_class["credit"] = each_text[each_text.find("•") + 2]
        class_title = each_text[:9]
        each_class["prefix"] = class_title[:4]
        each_class["level"] = class_title[5:]
        # section part   //*[@id="measuringWrapper-ARCH-2160"]/div/table/tbody/tr[1]/td[1]/span[1]
        j.click()
        time.sleep(2)
        div_class_name = "section-grow-" + class_title
        x_path = "//div[@id='" + div_class_name + "']/div/div/table/tbody/tr"
        sections = browser.find_elements(By.XPATH, x_path)
        for a, b in enumerate(sections):  # loop through every section
            temp_path = x_path
            temp_path += "[" + str(a+1) + "]/td[1]"
            section_num = browser.find_element(By.XPATH, temp_path + "/span[1]").text
            section_crn = browser.find_element(By.XPATH, temp_path+"/span[2]").text
            section_prof = browser.find_element(By.XPATH, temp_path+"/span[5]").text
            section_prof = section_prof.replace("|", "").strip()
            temp = [section_num, section_crn, section_prof]
            each_class["sections"].append(temp)
        result_result[class_title] = each_class
        print(each_class)
    # finished whole major
    browser.back()
    time.sleep(1)

json.dump(result_result, f)
