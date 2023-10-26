import json

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
f = open('data.json', 'r+', encoding='utf-8')
result_file = open('schedule_planner.sql', 'w', encoding='utf-8')
data = json.load(f)
result = """
    CREATE TABLE `classes`(
        `id` int(8) UNSIGNED NOT NULL, 
        `class_name` varchar(100), 
        `prefix` varchar(4), 
        `level` varchar(4), 
        `credit` int(1) UNSIGNED
    );
    CREATE TABLE `sections`(
        `id` int(8) UNSIGNED NOT NULL, 
        `class_id` int(8) UNSIGNED, 
        `section_num` varchar(3), 
        `crn` varchar(10), 
        `prof` varchar(100)
    );
    INSERT INTO `classes` (`id`, `class_name`, `prefix`, `level`, `credit`) VALUES
"""


def class_output(x, y, judge=True):
    temp = "(" + str(x) + ", \""
    temp += y["name"] + "\", \""
    temp += y["prefix"] + "\", \""
    temp += y["level"] + "\", \""
    if judge:
        temp += y["credit"] + "\"), \n"
    else:
        temp += y["credit"] + "\");\n"
    return temp

for x, y in enumerate(data.values()):
    if x == len(data.values())-1:
        result += class_output(x, y, False)
    else:
        result += class_output(x, y)
result += "INSERT INTO `sections`(`id`, `class_id`,`section_num`, `crn`, `prof`) VALUES \n"
count = 0
for x, y in enumerate(data.values()):
    for i, j in enumerate(y["sections"]):  # loop through every section in the class
        result += "(" + str(count) + ", " + str(x) + ", \""  # count & id
        result += j[0] + "\", \""  # section number
        result += j[1] + "\", \""  # crn
        if x == len(data.values())-1:
            result += j[2] + "\"); \n"  # prof
        else:
            result += j[2] + "\"), \n"  # prof
        count += 1
result_file.write(result)