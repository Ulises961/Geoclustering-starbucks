from flask_sqlalchemy import SQLAlchemy
from flask import Flask


app = Flask(__name__, instance_relative_config=True)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost/shops"

db = SQLAlchemy(app)