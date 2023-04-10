from flask import Flask
from flask import jsonify, request, send_file
import pickle 
from tensorflow import keras
from pandas_datareader.data import DataReader
import yfinance as yf
from pandas_datareader import data as pdr
from datetime import datetime
from sklearn.preprocessing import MinMaxScaler
import numpy as np
import json
import matplotlib.pyplot as plt
from flask_cors import CORS, cross_origin
yf.pdr_override()
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app)

@app.route("/prediction", methods = ['POST'])
@cross_origin()

def prediction():
    
    if(request.method == 'POST'):
        # print(json.loads(request.data)['stock'])
        stock = json.loads(request.data)['stock']
        end = datetime.now()
        start = datetime(end.year - 1, end.month, end.day)
        globals()[stock] = yf.download(stock, start, end)
        df = pdr.get_data_yahoo(stock, start='2012-01-01', end=datetime.now())
        # print(df)
        data = df.filter(['Close'])
        # Convert the dataframe to a numpy array
        dataset = data.values
        training_data_len = int(np.ceil( len(dataset) * .95 ))
        scaler = MinMaxScaler(feature_range=(0,1))
        scaled_data = scaler.fit_transform(dataset)

        test_data = scaled_data[training_data_len - 60: , :]
        x_test = []

        for i in range(60, len(test_data)):
            x_test.append(test_data[i-60:i, 0])
   
        # Convert the data to a numpy array
        x_test = np.array(x_test)

        # Reshape the data
        x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1 ))

        # with open(r'C:\Users\varun\deskitems\ipd_stock_market\my-app\flask-server\mymodel.pkl', 'rb') as file:  
        #     model_bytes = file.read()
        #     model = pickle.load(model_bytes)
        model = keras.models.load_model('stock')
        # print(model.predict(x_test))
        predictions = model.predict(x_test)
        predictions = scaler.inverse_transform(predictions)
        data_op = json.dumps({'data': predictions.tolist()})

        valid = data[training_data_len:]
        valid['Predictions'] = predictions
        # Visualize the data
        plt.figure(figsize=(16,6))
        plt.title('Model')
        plt.xlabel('Date', fontsize=18)
        plt.ylabel('Close Price USD ($)', fontsize=18)
      
        plt.plot(valid[['Close', 'Predictions']])
        plt.legend(['Close', 'Predictions'], loc='lower right')
        # plt.show()
        plt.savefig('prediction.png')
        # return jsonify(data_op)
        return send_file('prediction.png', mimetype='image/png', as_attachment=True)

if __name__ == '__main__':
    app.run() 


 