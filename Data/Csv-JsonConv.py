import csv
import json
import random

def make_json(csvFilePath, jsonFilePath):
   
    # create a final dictionary, intermidiate output list
    data = {}
    intermediate_dataset=[]

    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.reader(csvf)
         
        # Append to each row a surface value (int)
        
        for rows in csvReader:
             
           
            if csvReader.line_num == 1:
                rows.append('Sqm')
            else:
                rows.append(str(random.randrange(50,200)))
            
            # Append to the intermediate data set the modified row
            
            intermediate_dataset.append(rows)
        

        # Convert each row into a dictionary
        
        for line in intermediate_dataset:
               
          if intermediate_dataset.index(line)!= 0:
            key= line[1]
            data[key] = line


    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))


# Driver Code
 

csvFilePath = r'Data/directory.csv'
jsonFilePath = r'Data/directory.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)

