# Dynamic JSON Form Renderer

A dynamic form generator and previewer built with React. This project allows users to define form schemas in JSON format, preview forms dynamically, and download form submissions as JSON files.

---

## Features
- **Dynamic Form Generation**: Build forms dynamically using JSON schema.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Form Validation**: Validate inputs using schema-defined constraints.
- **Download Submissions**: Download form submissions as JSON files.
- **Popup Preview**: View submitted data in a popup modal.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js] (v14 or later)
- [npm] 

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

4. Open http://localhost:3000 in your browser to view the app.

### Example JSON Schemas
   ```json
   {
     "formTitle": "Project Requirements Survey",
     "formDescription": "Please fill out this survey about your project needs",
     "fields": [
       {
         "id": "name",
         "type": "text",
         "label": "Full Name",
         "required": true,
         "placeholder": "Enter your full name"
       },
       {
         "id": "email",
         "type": "email",
         "label": "Email Address",
         "required": true,
         "placeholder": "you@example.com",
         "validation": {
           "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
           "message": "Please enter a valid email address"
         }
       },
       {
         "id": "companySize",
         "type": "select",
         "label": "Company Size",
         "required": true,
         "options": [
           {
             "value": "1-50",
             "label": "1-50 employees"
           },
           {
             "value": "51-200",
             "label": "51-200 employees"
           },
           {
             "value": "201-1000",
             "label": "201-1000 employees"
           },
           {
             "value": "1000+",
             "label": "1000+ employees"
           }
         ]
       },
       {
         "id": "industry",
         "type": "radio",
         "label": "Industry",
         "required": true,
         "options": [
           {
             "value": "tech",
             "label": "Technology"
           },
           {
             "value": "healthcare",
             "label": "Healthcare"
           },
           {
             "value": "finance",
             "label": "Finance"
           },
           {
             "value": "retail",
             "label": "Retail"
           },
           {
             "value": "other",
             "label": "Other"
           }
         ]
       },
       {
         "id": "timeline",
         "type": "select",
         "label": "Project Timeline",
         "required": true,
         "options": [
           {
             "value": "immediate",
             "label": "Immediate (within 1 month)"
           },
           {
             "value": "short",
             "label": "Short-term (1-3 months)"
           },
           {
             "value": "medium",
             "label": "Medium-term (3-6 months)"
           },
           {
             "value": "long",
             "label": "Long-term (6+ months)"
           }
         ]
       },
       {
         "id": "comments",
         "type": "textarea",
         "label": "Additional Comments",
         "required": false,
         "placeholder": "Any other details you'd like to share..."
       }
     ]
   }
```

---

### Local Development Guide

## Folder Structure
```grapghql
src/
├── components/
│   ├── JSONEditor.tsx  # For editing JSON schema
│   ├── FormPreview.tsx # For previewing forms
│   ├── FieldRenderer.tsx # Renders form fields dynamically
├── utils/
│   ├── validateJSON.ts # Validates input JSON schema
├── App.tsx            # Main application entry point
├── index.css          # Global styles
```

---

### Sample Screenshot

![image](https://github.com/user-attachments/assets/32afe09c-fb05-42fc-a7c0-b5f970df4148)


