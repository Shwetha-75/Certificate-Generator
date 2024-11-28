from flask import Flask, request, send_file, render_template
from PIL import Image, ImageDraw, ImageFont
import os

app = Flask(__name__)

# Configure upload folder
UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Get the uploaded file and form data
        file = request.files.get("image")
        name = request.form.get("name")
        course = request.form.get("course")
        year = request.form.get("year")

        if not file or not name or not course or not year:
            return "All fields are required", 400

        # Save the uploaded file
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        # Process the image
        output_path = os.path.join(OUTPUT_FOLDER, "Updated_Certificate.png")
        process_image(file_path, name, course, year, output_path)

        # Serve the updated image for download
        return send_file(output_path, as_attachment=True)

    # Render the HTML form
    return """
    <!doctype html>
    <title>Certificate Generator</title>
    <h1>Upload Certificate Template</h1>
    <form method="post" enctype="multipart/form-data">
      <label for="image">Choose image:</label>
      <input type="file" name="image" required><br><br>
      <label for="name">Name:</label>
      <input type="text" name="name" required><br><br>
      <label for="course">Course Title:</label>
      <input type="text" name="course" required><br><br>
      <label for="year">Year:</label>
      <input type="text" name="year" required><br><br>
      <button type="submit">Generate Certificate</button>
    </form>
    """

def process_image(file_path, name, course, year, output_path):
    """Overlay text onto the certificate."""
    # Open the image
    img = Image.open(file_path)
    draw = ImageDraw.Draw(img)

    # Define font
    try:
        font = ImageFont.truetype("arial.ttf", size=24)  # Use a custom font if available
    except IOError:
        font = ImageFont.load_default()

    # Define positions for text (adjust as needed)
    name_coords = (200, 150)   # Position for the name
    course_coords = (200, 200) # Position for the course title
    year_coords = (200, 250)   # Position for the year

    # Draw the text on the image
    draw.text(name_coords, name, fill="white", font=font)
    draw.text(course_coords, course, fill="white", font=font)
    draw.text(year_coords, year, fill="white", font=font)

    # Save the updated image
    img.save(output_path)

if __name__ == "__main__":
    app.run(debug=True)
