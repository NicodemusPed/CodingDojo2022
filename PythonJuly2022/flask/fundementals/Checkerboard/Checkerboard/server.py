from flask import Flask,  render_template 
app = Flask(__name__)



@app.route('/')
def checker_board():
    
    return render_template("index.html")

@app.route('/4')
def checker_board4():
        return render_template("index4.html")
    
@app.route('/(x)/(y)')
    def x():
    def y():
        return render_template("indexxy.html")

if __name__=="__main__": 
        app.run(debug=True)