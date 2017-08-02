from flask import Flask, render_template
import os
app = Flask(__name__)
@app.route("/")
def profile():
    return render_template("places.html")

if __name__ == "__main__":
     app.run()