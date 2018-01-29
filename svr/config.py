import os

class Config( object):
    SECRET_KEY = 'key_secret_app'

class DevelopmentConfig(Config):
    DEBUG = True
