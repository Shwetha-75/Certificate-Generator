from flask import Flask, request, send_file, render_template
from PIL import Image, ImageDraw, ImageFont
import os
import json
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
# Configure upload folder
UPLOAD_FOLDER = r"C:\Users\SHWETHA\Desktop\Certificate_Generatoe\Certificate-Generator\uploads"
OUTPUT_FOLDER = r"C:\Users\SHWETHA\Desktop\Certificate_Generatoe\Certificate-Generator\outputs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

CORS(app)

app.secret_key="secret_key_app"

def data(excel_file):
    data_frame=pd.read_excel(r"C:\Users\SHWETHA\Desktop\Certificate_Generatoe\Certificate-Generator\Book1.xlsx")
    return data_frame
    
@app.route("/data", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        print(request.form.get('name'))
        # Get the uploaded file and form data
        file = request.files.get("image")
        excel=request.files.get("excel")
        name = request.form.get("name")
        course = request.form.get("course")
        year = request.form.get("year")
        print(excel)
        data_frame=pd.read_excel(excel)
        
        if not file or not name or not course or not year:                                                              
            return "All fields are required", 400
        
        print(data_frame)                                        
        # Save the uploaded file
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        
        file.save(file_path)
        
        n=len(data_frame)
        for i in range(n):
            output_path = os.path.join(OUTPUT_FOLDER, data_frame['name'][i]+"Updated_Certificate.png")
            process_image(file_path, data_frame['name'][i], data_frame['course'][i], data_frame['year'][i], output_path)

        
       
        # Serve the updated image for download
        return send_file(output_path,as_attachment=True)
    
    
    
    # Render the HTML form
    return render_template("index.html")

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
    name_coords = (679, 312)   # Position for the name
    course_coords = (636, 369) # Position for the course title
    year_coords = (121,420)   # Position for the year
    print(name)
    
    # Draw the text on the image
    draw.text(name_coords, name, fill="white", font=font)
    draw.text(course_coords, course, fill="white", font=font)
    draw.text(year_coords, year, fill="white", font=font)
     
    # Save the updated image
    img.save(output_path)
    

    
    
        
if __name__ == "__main__":
    app.run(debug=True)
