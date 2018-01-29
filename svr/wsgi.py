from flask import Flask
from flask import render_template
from flask import request
from flask import g

from flask_cors import CORS, cross_origin
from config import DevelopmentConfig

from model import mysql

import os
import json

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)
CORS(app)

@app.route('/students', methods = ['GET', 'POST'])
def studens():
    return 'Que honda'
    # return mysql.insert('person', {'id_person':'1022980690','name':'Daniel','lastname':'Andrés','id_profile':1,'id_course':1})

@app.route('/teachers', methods = ['GET', 'POST'])
def teacher():
    return  'Lista de profesores'

@app.route('/courses', methods = ['GET', 'POST'])
def courses():
    return mysql.select('s_couser', {})

@app.route('/courses/<int:id>', methods = ['GET', 'POST'])
def courses(id):
    return mysql.select('s_couser', {'id_couser':id})

@app.route('/profiles', methods = ['GET', 'POST'])
def profiles():
    return mysql.select('s_profile', {})

@app.route('/profiles/<int:id>', methods = ['GET', 'POST'])
def profilesId(id):
    return mysql.select('s_profile', {'id_profile':id})

@app.route('/')
def index():
    return 'Que honda'

if __name__ == '__main__':
    app.run( port = 8180)
