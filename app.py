from flask import Flask , render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact() :
    return render_template("contact.html")

@app.route("/features")
def features() :
    return render_template("features.html")

@app.route("/Methodology")
def Methodology() :
    return render_template("Methodology.html")

@app.route("/objectives")
def objectives() :
    return render_template("objectives.html")

@app.route("/products")
def products() :
    return render_template("products.html")

if __name__ == "__main__":
    app.run()