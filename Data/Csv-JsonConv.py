import csv
import json
import random;
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
   
    # create a dictionary
    data = {}
     
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
             
            # Column named 'Store Number' as
            # the primary key
            key = rows['Store Number']
            rows.append(str(random.randrange(50,200)))
            data[key] = rows
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'mock-app/Data/directory.csv'
jsonFilePath = r'mock-app/Data/directory.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)

