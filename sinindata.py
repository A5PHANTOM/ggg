from flask import Flask, request, jsonify, render_template_string, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'  # Use a strong secret key
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    contact = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Create the database tables within an application context
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Welcome to the Fitness App! Go to /signup to register."

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Use request.form to handle form data submissions
        data = request.form if not request.is_json else request.json

        # Validate input data here (optional but recommended)
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'message': 'Email already registered!'}), 400
        if User.query.filter_by(username=data['username']).first():
            return jsonify({'message': 'Username already taken!'}), 400

        # Hash the password
        hashed_password = generate_password_hash(data['password'], method='sha256')

        new_user = User(
            name=data['name'],
            full_name=data['full_name'],
            age=data['age'],
            gender=data['gender'],
            contact=data['contact'],
            email=data['email'],
            username=data['username'],
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully!'}), 201

    # HTML form for signing up
    signup_form = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up</title>
        <style>
            body {
                font-family: 'Poppins', sans-serif;
                background-color: #ece9e8;
            }
            h1 {
                text-align: center;
            }
            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                width: 350px;
                margin: 0 auto;
            }
            input, select {
                margin: 10px 0;
                padding: 10px;
                width: 100%;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            input[type="submit"] {
                background-color: #333;
                color: white;
                border: none;
                cursor: pointer;
            }
            input[type="submit"]:hover {
                background-color: #555;
            }
        </style>
    </head>
    <body>
        <h1>Sign Up</h1>
        <form method="POST">
            Name: <input type="text" name="name" required>
            Full Name: <input type="text" name="full_name" required>
            Age: <input type="number" name="age" required>
            Gender: 
            <select name="gender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            Contact: <input type="text" name="contact" required>
            Email: <input type="email" name="email" required>
            Username: <input type="text" name="username" required>
            Password: <input type="password" name="password" required>
            <input type="submit" value="Sign Up">
        </form>
    </body>
    </html>
    '''
    
    return render_template_string(signup_form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json
        user = User.query.filter_by(username=data['username']).first()

        if user and check_password_hash(user.password, data['password']):
            session['user_id'] = user.id  # Save user ID in session for future use
            return jsonify({'message': 'Login successful!', 'redirect': 'index.html'}), 200
        else:
            return jsonify({'message': 'Invalid username or password.'}), 401

    # HTML form for logging in
    login_form = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <style>
            body {
                font-family: 'Poppins', sans-serif;
                background-color: #ece9e8;
            }
            h1 {
                text-align: center;
            }
            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                width: 350px;
                margin: 0 auto;
            }
            input {
                margin: 10px 0;
                padding: 10px;
                width: 100%;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            input[type="submit"] {
                background-color: #333;
                color: white;
                border: none;
                cursor: pointer;
            }
            input[type="submit"]:hover {
                background-color: #555;
            }
        </style>
    </head>
    <body>
        <h1>Login</h1>
        <form method="POST">
            Username: <input type="text" name="username" required>
            Password: <input type="password" name="password" required>
            <input type="submit" value="Login">
        </form>
    </body>
    </html>
    '''

    return render_template_string(login_form)

if __name__ == '__main__':
    app.run(debug=True)
