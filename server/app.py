from bson.json_util import dumps
from bson.objectid import ObjectId

from flask import Flask, request
from flask_cors import CORS

from pymongo import MongoClient


app = Flask(__name__)
CORS(app)

collection = MongoClient('localhost:27017', serverSelectionTimeoutMS=5 * 1000).triped.triped


@app.route('/trips', methods=['GET'])
def get_trips():
    try:
        cursor = collection.find()
    except Exception as e:
        return f"Bad request: {e}", 400

    return dumps([x for x in cursor])


@app.route('/trips', methods=['POST'])
def create_trip():
    document = request.get_json()
    try:
        created = collection.insert_one(document)
    except Exception as e:
        return f"Bad request: {e}", 400
        
    return  dumps(created.inserted_id), 200


@app.route('/trips/<id>', methods=['GET'])
def get_trip(id):
    try:
        document = collection.find_one({"_id": ObjectId(id)})
    except Exception as e:
        return f"Bad request: {e}", 400

    return dumps(document)


@app.route('/trips/<id>', methods=['DELETE'])
def delete_trip(id):
    try:
        deleted = collection.remove({"_id": ObjectId(id)})
    except Exception as e:
        return f"Bad request: {e}", 400

    return {'success': bool(deleted)}, 200


@app.route('/trips/<id>', methods=['PUT'])
def update_trip(id):
    try:
        updated = collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": request.get_json()}
        )
    except Exception as e:
        return f"Bad request: {e}"

    return {'success': bool(updated)}, 200


if __name__ == '__main__':
    app.run(debug=True)
