import csv
import json
import random

def make_csv(csvFilePath,csvNewFile):
   
    # create a final dictionary, intermidiate output list
    data = {}
    intermediate_dataset=[]

    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csvf.readlines()
         
        # Append to each row a surface value (int)
        csvReader[0]+= ","+"Sqm"
        intermediate_dataset.append(csvReader[0])

        for rows in csvReader[1:-1]:
    
            nRow = rows + ","+(str(random.randrange(50,200)))
          
            
            # Append to the intermediate data set the modified row
            
            intermediate_dataset.append(nRow)
        

        # Convert each row into a dictionary
            
    file = open(csvNewFile,'w')

    for line in intermediate_dataset:
        file.write(','.join(line))
        file.write('\n')
                
        
# # Driver Code
 

csvFilePath = r'Data/directory.csv'
csvNewFile = r'Data/newdirectory.csv'
 
# Call the make_json function
make_csv(csvFilePath, csvNewFile)

