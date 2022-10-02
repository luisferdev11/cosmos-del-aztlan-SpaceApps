from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    try:
        
        return jsonify({
            'mensaje': 'conectado a la api xd',
            # 'generated': generated,
            'original': 'pruebagod',

        })
    except:
        return jsonify({'mensaje': 'mamaste'})

@app.route("/", methods=['POST'])
def predict():
    try:
        original = request.json['voice']
        return jsonify({
            'mensaje': 'conectado a la api xd',
            # 'generated': generated,
            'original': original,

        })
    except:
        return jsonify({'mensaje': 'mamaste'})


def not_found(error):
    return "404 not founf"


if __name__ == "__main__":
    app.register_error_handler(404, not_found)
    app.run(debug=True, port="4000", host="localhost")