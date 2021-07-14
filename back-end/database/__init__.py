from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os
from flask_cors import CORS

app = Flask(__name__, instance_relative_config=True)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] =   os.environ.get('DATABASE_URL') #Testing purposes "postgresql://postgres:postgres@localhost/shops" # 

db = SQLAlchemy(app)