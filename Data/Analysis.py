import csv
from sklearn import cluster
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

csvf= open('Data/directory.csv', 'r')
reader = csv.DictReader(csvf)
lat = []
lon=[]
for obj in reader:
    lon.append(float(obj["Longitude"]))
    lat.append(float(obj["Latitude"]))
print(lon)
dataset = pd.DataFrame({
    'x': lon,
    'y': lat
})

myKmeans = cluster.KMeans(n_clusters=4)
myKmeans.fit(dataset)

centroids = myKmeans.cluster_centers_
labels = myKmeans.labels_
plt.scatter(dataset['x'],dataset['y'],s =10)
plt.scatter(centroids[0],centroids[1], s=10)
plt.show()