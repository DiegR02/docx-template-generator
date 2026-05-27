# docx-template-generator

A personal learning project that explores generating `.docx` files from data using the [`docx`](https://www.npmjs.com/package/docx) Node.js library. Two entry points are provided: one that reads data from a JavaScript module and one that reads from a JSON file.

> **Note:** This is practice work, not production software.

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Document generation | docx |
| Language | JavaScript |

## Project Structure

```
docx-template-generator/
├── data/
│   ├── data.js          # Data source as a JS module
│   └── data.json        # Data source as a JSON file
├── templates/
│   └── template.docx    # Base .docx template
├── utils/
│   └── helpers.js       # Shared helper functions
├── generateFromJS.js    # Entry point — generates docx from data.js
├── generateFromJSON.js  # Entry point — generates docx from data.json
├── package.json
└── LICENSE
```

## Installation

Review `package.json` to confirm dependencies, then install:

```bash
npm install
```

> Add exact run commands after validating the project entry points.

## Usage

Pending review — inspect `generateFromJS.js` and `generateFromJSON.js` for entry-point details before adding usage examples.

## License

See [LICENSE](LICENSE).
