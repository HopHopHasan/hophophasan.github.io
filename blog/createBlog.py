import os, subprocess, time, datetime
#store template.txt file
with open("template.txt", 'r') as f:
    lineCount = len(f.readlines())
    template = list(range(lineCount))
with open("template.txt", 'r') as f:
    for i in range(lineCount):
        template[i] = f.readline()
#store postTemplate.txt file
with open("postTemplate.txt", 'r') as f:
    lineCount2 = len(f.readlines())
    postTemplate = list(range(lineCount2))
with open("postTemplate.txt", 'r') as f:
    for i in range(lineCount2):
        postTemplate[i] = f.readline()
#blog folder config
#date
date = input("Enter the date of the blog (YYYY-MM-DD) > ")
try:
    os.mkdir(date)
except:
    print("Date folder already exists")
os.chdir(date)
#folder name
folderName = input("Enter the blog folder name (eg:blog-update) > ")
os.mkdir(folderName)
os.chdir(folderName)
#blog name
blogName = input("Enter the blog name (eg:Blog update!) > ")
#description
desc = input("Provide a description for the page > ")
#write to index.html file
try:
    f = open("index.html", "x")
    for i in range(lineCount):
        f.write(template[i].format(title = blogName, date = date, folderTitle = folderName, description = desc))
    print("Written!")
    f.close()
    os.chdir("../..")
    with open('index.html', 'r') as f:
        data = file.readlines()
        f.write("test")
    for i in range(lineCount2):
        data.insert(37+i ,fileTemplate[i])
    with open('index.html', 'w') as f:
        f.writelines( data )
except:
    print("This blog already exists!")
    os.chdir("../..")
print("Generating log")

with open(".log.txt", 'a') as f:
    now = datetime.datetime.now()
    dateFormat = now.strftime("%Y/%m/%d %H:%M:%S")
    f.write("----------------------------------------------------------\n")
    f.write("Created: " + dateFormat +"\n")
    f.write("Blog date: " + date +"\n")
    f.write("Blog folder name: " + folderName +"\n")
    f.write("Blog name: " + blogName +"\n")
    f.write("Blog description: " + desc +"\n")
    f.write("Dumping template list:" +"\n")
    f.write(str(template) +"\n")
    f.write("Dumping postTemplate list:" +"\n")
    f.write(str(postTemplate) +"\n")
print("Done!")
