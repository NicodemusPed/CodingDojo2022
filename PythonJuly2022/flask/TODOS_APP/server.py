from flask import Flask  # Import Flask --class to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World its July 2022!'  # Return the string 'Hello World!' as a response

    
@app.route( '/hello/<name>' )

def greet_person( name ):
    print( f"Hey there {name}" )
    return f"Howdy, {name}"


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module --file    



    app.run(debug=True)    # Run the app in debug mode.

