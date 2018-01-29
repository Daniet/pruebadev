import datetime
import pymysql.cursors
import json

# Conección de base de datos
db = pymysql.connect(
    host='127.0.0.1',
    user='root',
    password='root',
    db='school',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)

cursor = db.cursor(pymysql.cursors.DictCursor)

def select(name, camp):
    where = []
    result = []
    for x in camp:
        where.append(x + ' = "' + str(camp[x]) + '"')

    query = 'SELECT * FROM ' + name

    if len(where) > 0:
        query += ' WHERE ' + ' AND '.join(where)

    print(query)
    cursor.execute(query)
    for x in cursor:
        row = {}
        for y in x:
            nameRow = y.replace('_' + name.split('_')[1], '')
            row[nameRow] = x[y]
        result.append(row)

    return json.dumps(result)

def insert(name, camp):

    camps = []
    values = []
    returnId = ''
    for x in camp:
        camps.append(x)
        values.append(camp[x])

    query = 'INSERT INTO ' + name + '(' + ', '.join(camps) + ') VALUES("' + '", "'.join(values) + '");'
    cursor.execute(query)
    cursor.execute('SELECT LAST_INSERT_ID() as id;')
    for x in cursor:
        returnId = str(x['id'])
    cursor.close

    return returnId
