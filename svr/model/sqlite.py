import sqlite3
import sys

conn = sqlite3.connect('../../db/data.db')
cursor = conn.cursor()

def select(name, camp):
    where = []
    for x in camp:
        where.append(x + ' = "' + str(camp[x]) + '"')

    query = 'SELECT * FROM ' + name

    if len(where) > 0:
        query +=  + ' WHERE ' + ' AND '.join(where)

    cursor.execute(query)

    print(cursor)

    conn.close()

    return query

def insert(name, camps):
    camp = []
    values = []
    for x in camps:
        camp.append(x)
        values.append(str(camps[x]))
    query = 'insert into ' + name + '(' + ', '.join(camp) + ') values("' + '", "'.join(values) + '")'
    return query + ';'

def delete(name, camp):
    where = []
    for x in camp:
        where.append(x + ' = "' + str(camp[x]) + '"')
    query = 'delete ' + name + ' where' + ' and '.join(where)
    return query

def update(name, camp, update):
    query = 'update ' + name + ' set'
    return query

select('profile', {})
