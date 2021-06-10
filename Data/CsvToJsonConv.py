import csv
import json
import random

def make_csv(csvFilePath,csvNewFile):
   
    # create a final dictionary, intermidiate output list
    data = {}
    intermediate_dataset=[]

    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.reader(csvf)
         
        # Append to each row a surface value (int)
        
        for rows in csvReader:
             
           
            if csvReader.line_num == 1:
                rows.append('Sqm')
                rows.append('color')
            else:
                rows.append(str(random.randrange(50,200)))
                rows.append('\'\'')
            
            # Append to the intermediate data set the modified row
            
            intermediate_dataset.append(rows)
        

        # Convert each row into a dictionary
            
    file = open(csvNewFile,'w')

    for line in intermediate_dataset:
        file.write(','.join(line))
        file.write('\n')
                
        
# # Driver Code
 

csvFilePath = r'Data/directory.csv'
csvNewFile = r'Data/directory.csv'
 
# Call the make_json function
make_csv(csvFilePath, csvNewFile)

