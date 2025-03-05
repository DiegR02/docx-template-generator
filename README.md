# 📄 DOCX Report Generator from JSON

A Node.js script that generates DOCX reports based on a template and JSON data. It uses the `docx-templates` library to process the template and create a structured report in the `reports/` directory.

---

## 🚀 Prerequisites

Before running the script, ensure you have installed:

- **Node.js** (version 14 or higher) → [Download here](https://nodejs.org/)
- **npm** (Node.js package manager)

To check if you have Node.js and npm installed, run the following commands in your terminal:

```sh
node -v  # Check Node.js version
npm -v   # Check npm version
```

---

## 📥 Installation

1. Clone this repository or download the files.
2. Open a terminal in the project folder.
3. Install the required dependencies by running:

```sh
npm install
```

---

## 🛠️ Usage

1. Ensure that the `data/` folder contains a valid JSON or JS file with the necessary structure.
2. The DOCX template should be located in the `templates/` folder with the name `template.docx`.
3. Run the script using the following command:

```sh
node generateFromJS.js
node generateFromJSON.js
```

If everything is set up correctly, a document will be generated in the `reports/` folder with a timestamped filename.

---

## 📂 Project Structure

```
📂 docx-template-generatoor
│── 📂 data                 # Folder containing the JSON and JS input file
│── 📂 node-modules         # Folder containing the dependencies
│── 📂 templates            # Folder containing the DOCX template
│── 📂 utils                # Folder containing functions
│── 📂 reports              # Folder where the generated reports are saved
│── 📄 generateFromJS.js    # Script to generate from a JS files
│── 📄 generateFromJSON.js  # Script to generate from a JSON file
│── 📄 package.json         # Project configuration
│── 📄 utils/helpers.js     # Helper functions
```

---

## 📝 Notes

- If the `reports/` folder does not exist, the script will create it automatically.
- If the JSON/JS file is missing in the `data/` folder, the script/s will not run.
- The `{{ }}` syntax is used as a delimiter in the DOCX template for dynamic values.

---

## 📌 Dependencies Used

- `docx-templates`: For generating documents based on templates.
- `fs` and `path`: Node.js modules for file and path handling.

---

## 📜 License

This project is under the MIT license. Feel free to use and modify it as needed.

---

Enjoy generating automated reports! 🚀
