import json
file = open("data.json", 'r')
welcome_file = open("welcome.json", "w")
data = json.load(file)
result = []
for i in data:
    result.append(data[i]["name"])
json.dump(result, welcome_file)