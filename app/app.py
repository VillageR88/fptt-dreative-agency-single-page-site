from flask import Flask, render_template, send_from_directory, url_for
import os

# Define the static folder path
STATIC_FOLDER_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

app = Flask(__name__, static_folder=STATIC_FOLDER_PATH, template_folder="templates")


def metadata():
    return {"title": "Scoot multi-page website", "description": "Scoot multi-page website"}


# Custom Jinja2 filter to prepend a dot to the URL
def dot_prefixed_url(endpoint, **values):
    return f".{url_for(endpoint, **values)}"


# Register the custom filter
app.jinja_env.globals["dot_prefixed_url"] = dot_prefixed_url


@app.route("/", defaults={"path": ""})
def home(path):
    environment = os.getenv("ENVIRONMENT", "development")
    return render_template("index.html", metadata=metadata(), ENVIRONMENT=environment)


@app.route("/404.html")
def page_not_found():
    return render_template("404.html", metadata=metadata())


@app.route("/robots.txt")
def robots_txt():
    return send_from_directory(STATIC_FOLDER_PATH, "robots.txt")


# Custom 404 error handler
@app.errorhandler(404)
def handle_404(e):
    return render_template("404.html", metadata=metadata()), 404


if __name__ == "__main__":
    app.run(debug=True)
