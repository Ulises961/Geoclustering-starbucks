import os
import sys
sys.path.append(os.path.realpath('.'))
from database import db
from models.shop import Starbucks 
import json

db.create_all()

shops = open('points.json', 'r')

data = json.load(shops)

print("Type: ", type(data))
for obj in data:
    shop = Starbucks(
        obj['lon'],
        obj['lat'],
        obj['sqmt'],
        obj['city'],
        obj['address'],
        obj['color']
    )
    db.session.add(shop)
db.session.commit()
