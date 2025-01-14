# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tabula
# import pdfplumber
# import os
# import re
# from pymongo import MongoClient

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # MongoDB connection string
# mongo_client = MongoClient('mongodb+srv://cyberfuse123:FLXAyMRzA5gKZdX9@cluster0.pibic0r.mongodb.net/nephro-health-coach')
# db = mongo_client['nephro-health-coach']  # Database
# collection = db['test']  # Collection for PDF data
# bmi_collection = db['bmi_calculations']  # Collection for BMI data

# # Extract patient details from the uploaded PDF
# def extract_patient_details(pdf_path):
#     with pdfplumber.open(pdf_path) as pdf:
#         first_page = pdf.pages[0]
#         text = first_page.extract_text()

#         # Extract patient name using regular expression
#         name_match = re.search(r'(Patient Name|Name|Patient)\s*:\s*(.*)', text, re.IGNORECASE)
#         patient_name = name_match.group(2).strip() if name_match else "Name not found"

#         # Extract patient age using regular expression
#         age_match = re.search(r'(Age|AGE)\s*:\s*(\d+)', text, re.IGNORECASE)
#         patient_age = age_match.group(2).strip() if age_match else "Age not found"

#         # Extract test date/time
#         date_time_match = re.search(r'Preliminary date/time\s*:\s*(\d{2}-[A-Z]{3}-\d{2} \d{2}:\d{2}:\d{2} [APM]{2})', text, re.IGNORECASE)
#         test_date_time = date_time_match.group(1).strip() if date_time_match else "Date/Time not found"

#         return patient_name, patient_age, test_date_time

# # Helper function to format results as a single string
# def format_results(record):
#     test_results = {k: v for k, v in record.items() if k not in ['_id', 'patient-name', 'patient-age', 'test-date-time']}
#     results_string = ', '.join([f"{key}: {value}" for key, value in test_results.items()])
#     return results_string if results_string else "No results available"

# # Route to save BMI results
# @app.route('/save-bmi', methods=['POST'])
# def save_bmi():
#     try:
#         data = request.json
#         age = data.get('age')
#         weight = data.get('weight')
#         height = data.get('height')
#         bmi = data.get('bmi')
#         timestamp = data.get('timestamp')

#         if not all([age, weight, height, bmi, timestamp]):
#             return jsonify({"error": "All fields are required"}), 400

#         # Save the BMI data to MongoDB
#         bmi_record = {
#             "age": age,
#             "weight": weight,
#             "height": height,
#             "bmi": bmi,
#             "timestamp": timestamp
#         }
#         result = bmi_collection.insert_one(bmi_record)
        
#         return jsonify({"message": "BMI record saved", "_id": str(result.inserted_id)}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to fetch all BMI records
# @app.route('/get-bmi-records', methods=['GET'])
# def get_bmi_records():
#     try:
#         records = list(bmi_collection.find({}))
#         for record in records:
#             record['_id'] = str(record['_id'])  # Convert ObjectId to string
#         return jsonify(records), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch the latest BMI record from the database
# @app.route('/latest-bmi', methods=['GET'])
# def get_latest_bmi():
#     try:
#         latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
#         if not latest_bmi:
#             return jsonify({"message": "No BMI record found"}), 404

#         latest_bmi['_id'] = str(latest_bmi['_id'])  # Convert ObjectId to string
#         return jsonify(latest_bmi), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to process the uploaded PDF and extract details
# @app.route('/process-pdf', methods=['POST'])
# def process_pdf():
#     try:
#         file = request.files['file']

#         # Define directory to save the uploaded PDF
#         save_directory = './uploads'
#         if not os.path.exists(save_directory):
#             os.makedirs(save_directory)
        
#         file_path = os.path.join(save_directory, file.filename)
#         file.save(file_path)

#         # Extract the patient's name, age, and test date/time
#         patient_name, patient_age, test_date_time = extract_patient_details(file_path)

#         # Extract table data from the PDF
#         tables = tabula.read_pdf(file_path, pages='all', multiple_tables=True)
#         if not tables:
#             return jsonify({"error": "No tables found in the PDF"}), 500

#         df = tables[0]

#         # Drop rows where 'Result' is NaN
#         df_filtered = df.dropna(subset=['Result'])

#         if 'Unnamed: 0' not in df.columns:
#             return jsonify({"error": "'Unnamed: 0' column not found in the DataFrame"}), 500

#         # Drop rows where 'Unnamed: 0' is NaN
#         df_filtered = df_filtered.dropna(subset=['Unnamed: 0'])

#         # Create a mapping from 'Unnamed: 0' to 'Result'
#         results = df_filtered.set_index('Unnamed: 0')['Result'].to_dict()

#         # Create the final mapping with patient details and results
#         final_mapping = {
#             'patient-name': patient_name,
#             'patient-age': patient_age,
#             'test-date-time': test_date_time
#         }
#         final_mapping.update(results)  # Add test results to the mapping

#         # Save the results to MongoDB
#         result = collection.insert_one(final_mapping)
#         final_mapping['_id'] = str(result.inserted_id)  # Convert MongoDB ObjectId to string

#         return jsonify(final_mapping), 200
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# # Fetch patient history
# @app.route('/patient-history', methods=['GET'])
# def get_patient_history():
#     try:
#         history = list(collection.find({}))

#         if not history:
#             return jsonify({"message": "No patient history found"}), 404

#         patient_history = []
#         for record in history:
#             filtered_record = {
#                 'patient-name': record.get('patient-name', 'N/A'),
#                 'patient-age': record.get('patient-age', 'N/A'),
#                 'test-date-time': record.get('test-date-time', 'N/A'),
#                 'result': format_results(record)  # Use formatted results
#             }
#             patient_history.append(filtered_record)

#         # Return most recent first
#         patient_history.reverse()
#         return jsonify(patient_history), 200

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch the most recent patient report
# @app.route('/latest-patient', methods=['GET'])
# def get_latest_patient():
#     try:
#         latest_patient = collection.find_one(sort=[('_id', -1)])

#         if not latest_patient:
#             return jsonify({"message": "No latest patient found"}), 404

#         filtered_record = {
#             'patient-name': latest_patient.get('patient-name', 'N/A'),
#             'patient-age': latest_patient.get('patient-age', 'N/A'),
#             'test-date-time': latest_patient.get('test-date-time', 'N/A'),
#             'result': format_results(latest_patient)  # Use formatted results
#         }

#         return jsonify(filtered_record), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tabula
# import pdfplumber
# import os
# import re
# from pymongo import MongoClient

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # MongoDB connection string
# mongo_client = MongoClient('mongodb+srv://cyberfuse123:FLXAyMRzA5gKZdX9@cluster0.pibic0r.mongodb.net/nephro-health-coach')
# db = mongo_client['nephro-health-coach']  # Database
# collection = db['test']  # Collection for PDF data
# bmi_collection = db['bmi_calculations']  # Collection for BMI data

# # Extract patient details from the uploaded PDF
# def extract_patient_details(pdf_path):
#     with pdfplumber.open(pdf_path) as pdf:
#         first_page = pdf.pages[0]
#         text = first_page.extract_text()

#         # Extract patient name using regular expression
#         name_match = re.search(r'(Patient Name|Name|Patient)\s*:\s*(.*)', text, re.IGNORECASE)
#         patient_name = name_match.group(2).strip() if name_match else "Name not found"

#         # Extract patient age using regular expression
#         age_match = re.search(r'(Age|AGE)\s*:\s*(\d+)', text, re.IGNORECASE)
#         patient_age = age_match.group(2).strip() if age_match else "Age not found"

#         # Extract test date/time
#         date_time_match = re.search(r'Preliminary date/time\s*:\s*(\d{2}-[A-Z]{3}-\d{2} \d{2}:\d{2}:\d{2} [APM]{2})', text, re.IGNORECASE)
#         test_date_time = date_time_match.group(1).strip() if date_time_match else "Date/Time not found"

#         return patient_name, patient_age, test_date_time

# # Helper function to format results as a single string
# def format_results(record):
#     test_results = {k: v for k, v in record.items() if k not in ['_id', 'patient-name', 'patient-age', 'test-date-time']}
#     results_string = ', '.join([f"{key}: {value}" for key, value in test_results.items()])
#     return results_string if results_string else "No results available"

# # Route to save BMI results
# @app.route('/save-bmi', methods=['POST'])
# def save_bmi():
#     try:
#         data = request.json
#         age = data.get('age')
#         weight = data.get('weight')
#         height = data.get('height')
#         bmi = data.get('bmi')
#         timestamp = data.get('timestamp')

#         if not all([age, weight, height, bmi, timestamp]):
#             return jsonify({"error": "All fields are required"}), 400

#         # Save the BMI data to MongoDB
#         bmi_record = {
#             "age": age,
#             "weight": weight,
#             "height": height,
#             "bmi": bmi,
#             "timestamp": timestamp
#         }
#         result = bmi_collection.insert_one(bmi_record)

#         return jsonify({"message": "BMI record saved", "_id": str(result.inserted_id)}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to fetch the latest BMI record from the database
# @app.route('/latest-bmi', methods=['GET'])
# def get_latest_bmi():
#     try:
#         latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
#         if not latest_bmi:
#             return jsonify({"message": "No BMI record found"}), 404

#         latest_bmi['_id'] = str(latest_bmi['_id'])  # Convert ObjectId to string
#         return jsonify(latest_bmi), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch patient history
# @app.route('/patient-history', methods=['GET'])
# def get_patient_history():
#     try:
#         history = list(collection.find({}))
#         if not history:
#             return jsonify({"message": "No patient history found"}), 404

#         patient_history = []
#         for record in history:
#             filtered_record = {
#                 'patient-name': record.get('patient-name', 'N/A'),
#                 'patient-age': record.get('patient-age', 'N/A'),
#                 'test-date-time': record.get('test-date-time', 'N/A'),
#                 'result': format_results(record)  # Use formatted results
#             }
#             patient_history.append(filtered_record)

#         # Return most recent first
#         patient_history.reverse()
#         return jsonify(patient_history), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch the most recent patient report
# @app.route('/latest-patient', methods=['GET'])
# def get_latest_patient():
#     try:
#         latest_patient = collection.find_one(sort=[('_id', -1)])
#         if not latest_patient:
#             return jsonify({"message": "No latest patient found"}), 404

#         filtered_record = {
#             'patient-name': latest_patient.get('patient-name', 'N/A'),
#             'patient-age': latest_patient.get('patient-age', 'N/A'),
#             'test-date-time': latest_patient.get('test-date-time', 'N/A'),
#             'result': format_results(latest_patient)  # Use formatted results
#         }

#         return jsonify(filtered_record), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # New route to get the age of the most recent BMI record
# @app.route('/latest-age', methods=['GET'])
# def get_latest_age():
#     try:
#         latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
#         if not latest_bmi or 'age' not in latest_bmi:
#             return jsonify({"message": "No age record found"}), 404

#         return jsonify({"age": latest_bmi['age']}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to process the uploaded PDF and extract details
# @app.route('/process-pdf', methods=['POST'])
# def process_pdf():
#     try:
#         file = request.files['file']

#         # Define directory to save the uploaded PDF
#         save_directory = './uploads'
#         if not os.path.exists(save_directory):
#             os.makedirs(save_directory)
        
#         file_path = os.path.join(save_directory, file.filename)
#         file.save(file_path)

#         # Extract the patient's name, age, and test date/time
#         patient_name, patient_age, test_date_time = extract_patient_details(file_path)

#         # Extract table data from the PDF
#         tables = tabula.read_pdf(file_path, pages='all', multiple_tables=True)
#         if not tables:
#             return jsonify({"error": "No tables found in the PDF"}), 500

#         df = tables[0]

#         # Drop rows where 'Result' is NaN
#         df_filtered = df.dropna(subset=['Result'])

#         if 'Unnamed: 0' not in df.columns:
#             return jsonify({"error": "'Unnamed: 0' column not found in the DataFrame"}), 500

#         # Drop rows where 'Unnamed: 0' is NaN
#         df_filtered = df_filtered.dropna(subset=['Unnamed: 0'])

#         # Create a mapping from 'Unnamed: 0' to 'Result'
#         results = df_filtered.set_index('Unnamed: 0')['Result'].to_dict()

#         # Create the final mapping with patient details and results
#         final_mapping = {
#             'patient-name': patient_name,
#             'patient-age': patient_age,
#             'test-date-time': test_date_time
#         }
#         final_mapping.update(results)  # Add test results to the mapping

#         # Save the results to MongoDB
#         result = collection.insert_one(final_mapping)
#         final_mapping['_id'] = str(result.inserted_id)  # Convert MongoDB ObjectId to string

#         return jsonify(final_mapping), 200
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tabula
# import pdfplumber
# import os
# import re
# from pymongo import MongoClient

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # MongoDB connection string
# mongo_client = MongoClient('mongodb+srv://cyberfuse123:FLXAyMRzA5gKZdX9@cluster0.pibic0r.mongodb.net/nephro-health-coach')
# db = mongo_client['nephro-health-coach']  # Database
# collection = db['test']  # Collection for PDF data
# bmi_collection = db['bmi_calculations']  # Collection for BMI data

# # Extract patient details from the uploaded PDF
# def extract_patient_details(pdf_path):
#     with pdfplumber.open(pdf_path) as pdf:
#         first_page = pdf.pages[0]
#         text = first_page.extract_text()

#         # Extract patient name using regular expression
#         name_match = re.search(r'(Patient Name|Name|Patient)\s*:\s*(.*)', text, re.IGNORECASE)
#         patient_name = name_match.group(2).strip() if name_match else "Name not found"

#         # Extract patient age using regular expression
#         age_match = re.search(r'(Age|AGE)\s*:\s*(\d+)', text, re.IGNORECASE)
#         patient_age = age_match.group(2).strip() if age_match else "Age not found"

#         # Extract test date/time
#         date_time_match = re.search(r'Preliminary date/time\s*:\s*(\d{2}-[A-Z]{3}-\d{2} \d{2}:\d{2}:\d{2} [APM]{2})', text, re.IGNORECASE)
#         test_date_time = date_time_match.group(1).strip() if date_time_match else "Date/Time not found"

#         return patient_name, patient_age, test_date_time

# # Helper function to format results as a single string
# def format_results(record):
#     test_results = {k: v for k, v in record.items() if k not in ['_id', 'patient-name', 'patient-age', 'test-date-time']}
#     results_string = ', '.join([f"{key}: {value}" for key, value in test_results.items()])
#     return results_string if results_string else "No results available"

# # Route to save BMI results
# @app.route('/save-bmi', methods=['POST'])
# def save_bmi():
#     try:
#         data = request.json
#         age = data.get('age')
#         weight = data.get('weight')
#         height = data.get('height')
#         bmi = data.get('bmi')
#         timestamp = data.get('timestamp')

#         if not all([age, weight, height, bmi, timestamp]):
#             return jsonify({"error": "All fields are required"}), 400

#         # Save the BMI data to MongoDB
#         bmi_record = {
#             "age": age,
#             "weight": weight,
#             "height": height,
#             "bmi": bmi,
#             "timestamp": timestamp
#         }
#         result = bmi_collection.insert_one(bmi_record)

#         return jsonify({"message": "BMI record saved", "_id": str(result.inserted_id)}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to fetch the latest BMI record from the database
# @app.route('/latest-bmi', methods=['GET'])
# def get_latest_bmi():
#     try:
#         latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
#         if not latest_bmi:
#             return jsonify({"message": "No BMI record found"}), 404

#         latest_bmi['_id'] = str(latest_bmi['_id'])  # Convert ObjectId to string
#         return jsonify(latest_bmi), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch patient history
# @app.route('/patient-history', methods=['GET'])
# def get_patient_history():
#     try:
#         history = list(collection.find({}))
#         if not history:
#             return jsonify({"message": "No patient history found"}), 404

#         patient_history = []
#         for record in history:
#             filtered_record = {
#                 'patient-name': record.get('patient-name', 'N/A'),
#                 'patient-age': record.get('patient-age', 'N/A'),
#                 'test-date-time': record.get('test-date-time', 'N/A'),
#                 'result': format_results(record)
#             }
#             patient_history.append(filtered_record)

#         # Return most recent first
#         patient_history.reverse()
#         return jsonify(patient_history), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Fetch the most recent patient report
# @app.route('/latest-patient', methods=['GET'])
# def get_latest_patient():
#     try:
#         latest_patient = collection.find_one(sort=[('_id', -1)])
#         if not latest_patient:
#             return jsonify({"message": "No latest patient found"}), 404

#         filtered_record = {
#             'patient-name': latest_patient.get('patient-name', 'N/A'),
#             'patient-age': latest_patient.get('patient-age', 'N/A'),
#             'test-date-time': latest_patient.get('test-date-time', 'N/A'),
#             'result': format_results(latest_patient)
#         }

#         return jsonify(filtered_record), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to get the age of the most recent BMI record
# @app.route('/latest-age', methods=['GET'])
# def get_latest_age():
#     try:
#         latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
#         if not latest_bmi or 'age' not in latest_bmi:
#             return jsonify({"message": "No age record found"}), 404

#         return jsonify({"age": latest_bmi['age']}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to get the latest creatinine value
# @app.route('/latest-creatinine', methods=['GET'])
# def get_latest_creatinine():
#     try:
#         # Fetch the latest entry based on some identifier or timestamp (modify as needed)
#         latest_entry = collection.find_one(sort=[('_id', -1)])  # Assuming _id is the ObjectId and sorting by the latest
#         if latest_entry and 'Creatinine' in latest_entry:
#             return jsonify({'creatinine': latest_entry['Creatinine']}), 200
#         else:
#             return jsonify({'error': 'No creatinine data found'}), 404
#     except Exception as e:
#         print(f"Error fetching creatinine: {e}")
#         return jsonify({'error': 'Server error'}), 500


# # Route to process the uploaded PDF and extract details
# @app.route('/process-pdf', methods=['POST'])
# def process_pdf():
#     try:
#         file = request.files['file']

#         # Define directory to save the uploaded PDF
#         save_directory = './uploads'
#         if not os.path.exists(save_directory):
#             os.makedirs(save_directory)
        
#         file_path = os.path.join(save_directory, file.filename)
#         file.save(file_path)

#         # Extract the patient's name, age, and test date/time
#         patient_name, patient_age, test_date_time = extract_patient_details(file_path)

#         # Extract table data from the PDF
#         tables = tabula.read_pdf(file_path, pages='all', multiple_tables=True)
#         if not tables:
#             return jsonify({"error": "No tables found in the PDF"}), 500

#         df = tables[0]

#         # Drop rows where 'Result' is NaN
#         df_filtered = df.dropna(subset=['Result'])

#         if 'Unnamed: 0' not in df.columns:
#             return jsonify({"error": "'Unnamed: 0' column not found in the DataFrame"}), 500

#         # Drop rows where 'Unnamed: 0' is NaN
#         df_filtered = df_filtered.dropna(subset=['Unnamed: 0'])

#         # Create a mapping from 'Unnamed: 0' to 'Result'
#         results = df_filtered.set_index('Unnamed: 0')['Result'].to_dict()

#         # Create the final mapping with patient details and results
#         final_mapping = {
#             'patient-name': patient_name,
#             'patient-age': patient_age,
#             'test-date-time': test_date_time
#         }
#         final_mapping.update(results)  # Add test results to the mapping

#         # Save the results to MongoDB
#         result = collection.insert_one(final_mapping)
#         final_mapping['_id'] = str(result.inserted_id)  # Convert MongoDB ObjectId to string

#         return jsonify(final_mapping), 200
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import tabula
import pdfplumber
import os
import re
from pymongo import MongoClient
from bson import ObjectId
import jwt  # For handling JSON Web Tokens





app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection string
client = MongoClient("mongodb+srv://cyberfuse123:FLXAyMRzA5gKZdX9@cluster0.pibic0r.mongodb.net/nephro-health-coach")
mongo_client = MongoClient('mongodb+srv://cyberfuse123:FLXAyMRzA5gKZdX9@cluster0.pibic0r.mongodb.net/nephro-health-coach')
db = mongo_client['nephro-health-coach']  # Database
collection = db['test']  # Collection for PDF data
bmi_collection = db['bmi_calculations']  # Collection for BMI data
diet_plans_collection = db['diet_plans']  # Collection for diet plans

db = client.get_database("nephro-health-coach")
test_collection = db.get_collection("test")



users_collection = db['users']
test_collection = db['test']
results_collection = db["results"]



# Extract patient details from the uploaded PDF
def extract_patient_details(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        first_page = pdf.pages[0]
        text = first_page.extract_text()

        # Extract patient name using regular expression
        name_match = re.search(r'(Patient Name|Name|Patient)\s*:\s*(.*)', text, re.IGNORECASE)
        patient_name = name_match.group(2).strip() if name_match else "Name not found"

        # Extract patient age using regular expression
        age_match = re.search(r'(Age|AGE)\s*:\s*(\d+)', text, re.IGNORECASE)
        patient_age = age_match.group(2).strip() if age_match else "Age not found"

        # Extract test date/time
        date_time_match = re.search(r'Preliminary date/time\s*:\s*(\d{2}-[A-Z]{3}-\d{2} \d{2}:\d{2}:\d{2} [APM]{2})', text, re.IGNORECASE)
        test_date_time = date_time_match.group(1).strip() if date_time_match else "Date/Time not found"

        return patient_name, patient_age, test_date_time

# Helper function to format results as a single string
def format_results(record):
    test_results = {k: v for k, v in record.items() if k not in ['_id', 'patient-name', 'patient-age', 'test-date-time']}
    results_string = ', '.join([f"{key}: {value}" for key, value in test_results.items()])
    return results_string if results_string else "No results available"


JWT_SECRET_KEY = "NephroHealthCoach"

# # Route to process the uploaded PDF and extract details
@app.route('/process-pdf', methods=['POST'])
def process_pdf():

    access_token = request.headers.get('Authorization')  # Assuming it's in Authorization header

    if not access_token:
            return jsonify ({"error": "Access token is required"}), 401
        
        # Remove "Bearer " from the token if it's prefixed
    access_token =  access_token.replace("Bearer ", "")

        # Decode and validate the token
    try:
            decoded_token = jwt.decode(access_token, JWT_SECRET_KEY, algorithms=["HS256"])
            logged_in_user_id = decoded_token.get("id")
            print(logged_in_user_id)
    except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
    except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}),
    try:
        file = request.files ['file']

        # Define directory to save the uploaded PDF
        save_directory = './uploads'
        if not os.path.exists(save_directory):
            os.makedirs(save_directory)
        
        file_path = os.path.join(save_directory, file.filename)
        file.save(file_path)

        # Extract the patient's name, age, and test date/time
        patient_name, patient_age, test_date_time = extract_patient_details(file_path)

        # Extract table data from the PDF
        tables = tabula.read_pdf(file_path, pages='all', multiple_tables=True)
        if not tables:
            return jsonify({"error": "No tables found in the PDF"}), 500

        df = tables[0]

        # Drop rows where 'Result' is NaN
        df_filtered = df.dropna(subset=['Result'])

        if 'Unnamed: 0' not in df.columns:
            return jsonify({"error": "'Unnamed: 0' column not found in the DataFrame"}), 500

        # Drop rows where 'Unnamed: 0' is NaN
        df_filtered = df_filtered.dropna(subset=['Unnamed: 0'])

        # Create a mapping from 'Unnamed: 0' to 'Result'
        results = df_filtered.set_index('Unnamed: 0')['Result'].to_dict()

        # Create the final mapping with patient details and results
        final_mapping = {
            'patient-name': patient_name,
            'patient-age': patient_age,
            'test-date-time': test_date_time,
            'user-id': logged_in_user_id
        }
        final_mapping.update(results)  # Add test results to the mapping

        # Save the results to MongoDB
        result = collection.insert_one(final_mapping)
        final_mapping['_id'] = str(result.inserted_id)  # Convert MongoDB ObjectId to string

        return jsonify(final_mapping), 200
    except Exception as e:
        print (f"Error: {e}")
        return jsonify({"error": str(e)}), 500


# Route to save BMI results
@app.route('/save-bmi', methods=['POST'])
def save_bmi():
    try:
        data = request.json
        age = data.get('age')
        weight = data.get('weight')
        height = data.get('height')
        bmi = data.get('bmi')
        timestamp = data.get('timestamp')

        if not all([age, weight, height, bmi, timestamp]):
            return jsonify({"error": "All fields are required"}), 400

        # Save the BMI data to MongoDB
        bmi_record = {
            "age": age,
            "weight": weight,
            "height": height,
            "bmi": bmi,
            "timestamp": timestamp
        }
        result = bmi_collection.insert_one(bmi_record)

        return jsonify({"message": "BMI record saved", "_id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to fetch the latest BMI record from the database
@app.route('/latest-bmi', methods=['GET'])
def get_latest_bmi():
    try:
        latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
        if not latest_bmi:
            return jsonify({"message": "No BMI record found"}), 404

        latest_bmi['_id'] = str(latest_bmi['_id'])  # Convert ObjectId to string
        return jsonify(latest_bmi), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500




# Fetch patient history
@app.route('/patient-history', methods=['GET'])
def get_patient_history():
    try:
        # Fetch all patient history from the collection
        history = list(collection.find({}))
        if not history:
            return jsonify({"message": "No patient history found"}), 404

        patient_history = []
        for record in history:
            # Filter required fields with default values if missing
            filtered_record = {
                'patient-name': record.get('patient-name', 'N/A'),
                'patient-age': record.get('patient-age', 'N/A'),
                'test-date-time': record.get('test-date-time', 'N/A'),
                'result': format_results(record),
                'user-id': record.get('User-id', 'N/A')  # Added the 'User-id' field
            }
            patient_history.append(filtered_record)

        # Sort by test-date-time if present, otherwise reverse the list
        patient_history = sorted(
            patient_history,
            key=lambda x: x.get('test-date-time', 'N/A'),
            reverse=True
        )

        return jsonify(patient_history), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Fetch the most recent patient report
@app.route('/latest-patient', methods=['GET'])
def get_latest_patient():
    try:
        latest_patient = collection.find_one(sort=[('_id', -1)])
        if not latest_patient:
            return jsonify({"message": "No latest patient found"}), 404

        filtered_record = {
            'patient-name': latest_patient.get('patient-name', 'N/A'),
            'patient-age': latest_patient.get('patient-age', 'N/A'),
            'test-date-time': latest_patient.get('test-date-time', 'N/A'),
            'result': format_results(latest_patient)
        }

        return jsonify(filtered_record), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to get the age of the most recent BMI record
@app.route('/latest-age', methods=['GET'])
def get_latest_age():
    try:
        latest_bmi = bmi_collection.find_one(sort=[('_id', -1)])
        if not latest_bmi or 'age' not in latest_bmi:
            return jsonify({"message": "No age record found"}), 404

        return jsonify({"age": latest_bmi['age']}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to get the latest creatinine value
@app.route('/latest-creatinine', methods=['GET'])
def get_latest_creatinine():
    try:
        # Fetch the latest entry based on some identifier or timestamp (modify as needed)
        latest_entry = collection.find_one(sort=[('_id', -1)])  # Assuming _id is the ObjectId and sorting by the latest
        if latest_entry and 'Creatinine' in latest_entry:
            return jsonify({'creatinine': latest_entry['Creatinine']}), 200
        else:
            return jsonify({'error': 'No creatinine data found'}), 404
    except Exception as e:
        print(f"Error fetching creatinine: {e}")
        return jsonify({'error': 'Server error'}), 500

# Route to save diet plan
@app.route('/save-diet-plan', methods=['POST'])
def save_diet_plan():
    try:
        data = request.get_json()
        gfr_result = data.get('gfrResult')
        ckd_stage_message = data.get('ckdStageMessage')
        meal_plan = data.get('mealPlan')

        if not all([gfr_result, ckd_stage_message, meal_plan]):
            return jsonify({"error": "All fields are required"}), 400

        # Save the diet plan to MongoDB
        diet_plan_record = {
            "gfrResult": gfr_result,
            "ckdStageMessage": ckd_stage_message,
            "mealPlan": meal_plan
        }
        result = diet_plans_collection.insert_one(diet_plan_record)

        return jsonify({"message": "Diet plan saved", "_id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to fetch the latest diet plan
@app.route('/latest-diet-plan', methods=['GET'])
def get_latest_diet_plan():
    try:
        latest_diet_plan = diet_plans_collection.find_one(sort=[('_id', -1)])
        if not latest_diet_plan:
            return jsonify({"message": "No diet plan found"}), 404

        latest_diet_plan['_id'] = str(latest_diet_plan['_id'])  # Convert ObjectId to string
        return jsonify(latest_diet_plan), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500



@app.route('/api/dashboard-stats', methods=['GET'])
def get_dashboard_stats():
    try:
        # Count documents in collections
        user_count = db.users.count_documents({})  # Users collection
        test_result_count = db.test.count_documents({})  # Test collection

        # Return stats as JSON
        return jsonify({
            'userCount': user_count,
            'testResultCount': test_result_count
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    




# @app.route('/patient_profiling', methods=['GET'])
# def patient_profiling():
#     # Extract the access token from the Authorization header
#     access_token = request.headers.get('Authorization')

#     if not access_token:
#         return jsonify({"error": "Access token is required"}), 401

#     # Remove "Bearer " prefix from the token
#     access_token = access_token.replace("Bearer ", "")

#     # Decode and validate the token
#     try:
#         decoded_token = jwt.decode(access_token, JWT_SECRET_KEY, algorithms=["HS256"])
#         logged_in_user_id = decoded_token.get("id")
#         if not logged_in_user_id:
#             return jsonify({"error": "Invalid token payload"}), 401
#     except jwt.ExpiredSignatureError:
#         return jsonify({"error": "Token has expired"}), 401
#     except jwt.InvalidTokenError:
#         return jsonify({"error": "Invalid token"}), 401

#     # Query MongoDB to fetch records for the logged-in user
#     try:
#         records = test_collection.find({"user-id": logged_in_user_id})
#         results = []
#         for record in records:
#             record["_id"] = str(record["_id"])  # Convert ObjectId to string
#             results.append(record)

#         if not results:
#             return jsonify({"message": "No records found for the user"}), 404

#         return jsonify(results), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500
        
@app.route('/patient_profiling', methods=['GET'])
def patient_profiling():
    access_token = request.headers.get('Authorization')  # Assuming it's in Authorization header

    if not access_token:
            return jsonify ({"error": "Access token is required"}), 401
        
        # Remove "Bearer " from the token if it's prefixed
    access_token =  access_token.replace("Bearer ", "")

        # Decode and validate the token
    try:
            decoded_token = jwt.decode(access_token, JWT_SECRET_KEY, algorithms=["HS256"])
            logged_in_user_id = decoded_token.get("id")
            print(logged_in_user_id)
    except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
    except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"})

    # Query MongoDB to fetch records for the logged-in user
    try:
        records = test_collection.find({"user-id": logged_in_user_id})
        results = []

        for record in records:
            record["_id"] = str(record["_id"])  # Convert ObjectId to string
            results.append(record)

        # Handle case where no records are found
        if not results:
            return jsonify({"message": "No records found for the user"}), 404

        return jsonify(results), 200

    except Exception as e:
        print(f"Database Query Error: {e}")
        return jsonify({"error": f"Database query failed: {str(e)}"}), 500



if __name__ == '__main__':
    app.run(debug=True)

