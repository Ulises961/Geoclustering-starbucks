import os
import sys
sys.path.append(os.path.realpath('.'))
from database.database  import db
from marshmallow import Schema, fields, post_load

class Starbucks(db.Model):
    """
    Represents a Starbucks Shop contained in the shops table
    """
    __tablename__ = "shops"

    shop_id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    lon = db.Column(db.Integer, nullable = False)
    lat= db.Column(db.Integer, nullable = False)
    sqmt= db.Column(db.Integer, nullable = False)
    city= db.Column(db.String(), nullable = False)
    address= db.Column(db.String(), nullable = False)
    color= db.Column(db.String(), nullable = False)
 
    def __init__(self, lon, lat, sqmt,city,address,color):
        
        self.lon = lon
        self.lat = lat
        self.sqmt = sqmt
        self.city = city
        self.address = address
        self.color = color

    def setColor(self, color=None):

        self.color = color
 