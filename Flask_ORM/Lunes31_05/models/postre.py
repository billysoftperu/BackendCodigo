from sqlalchemy.sql.sqltypes import Integer
from config.conexion_bd import base_de_datos
from sqlalchemy import Column, types
class PostreModel(base_de_datos):
    postreId = Column(name='id', primary_key=True,autoincrement=True, unique=True,Type_=types.Integer)