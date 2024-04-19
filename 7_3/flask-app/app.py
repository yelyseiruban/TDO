from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cars.db'
db = SQLAlchemy(app)

class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(255))
    year = db.Column(db.Integer)
    details = db.Column(db.Text)

@app.route('/cars', methods=['GET'])
def get_cars():
    cars = Car.query.all()
    return jsonify([{'id': car.id, 'model': car.model, 'year': car.year, 'details': car.details} for car in cars])

@app.route('/cars/<int:year>', methods=['GET'])
def get_cars_by_year(year):
    cars = Car.query.filter_by(year=year).all()
    return jsonify([{'id': car.id, 'model': car.model, 'year': car.year, 'details': car.details} for car in cars])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)