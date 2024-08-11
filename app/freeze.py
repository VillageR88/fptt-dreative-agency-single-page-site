from flask_frozen import Freezer
from app import app
import os
import logging
import traceback  # Import traceback module

# Set up logging
logging.basicConfig(level=logging.DEBUG)

freezer = Freezer(app)

@freezer.register_generator
def url_generator():
    yield "home", {"path": ""}  # For the root URL
    yield "/404"  # For the 404 error page

if __name__ == "__main__":
    try:
        logging.info("Starting the freezing process...")
        freezer.freeze()
        logging.info("Freezing process completed successfully.")
    except ValueError as e:
        if "404 NOT FOUND" in str(e):
            logging.warning("Ignoring 404 error for /404 URL.")
        else:
            logging.error(f"An error occurred: {e}")
            logging.error(traceback.format_exc())
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        logging.error(traceback.format_exc())