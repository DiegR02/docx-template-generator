# docx-template-generator

A learning project that generates `.docx` documents from data supplied as either a JavaScript module or a JSON file, using the [`docx`](https://www.npmjs.com/package/docx) library on Node.js.

> **Note:** This is personal practice work and is not intended for production use.

---

## Project Structure

```
docx-template-generator/
├── data/
│   ├── data.js          # Data source (JavaScript module)
│   └── data.json        # Data source (JSON file)
├── templates/
│   └── template.docx    # Base .docx template
├── utils/
│   └── helpers.js       # Shared helper functions
├── generateFromJS.js    # Entry point — generates document from data.js
├── generateFromJSON.js  # Entry point — generates document from data.json
├── package.json
└── LICENSE
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Document generation | docx |
| Language | JavaScript |

---

## Getting Started

Review `package.json` for the exact dependency versions and any defined scripts before running the project.

---

## Usage

Two entry points are provided depending on the preferred data source format:

- `generateFromJS.js` — reads data from `data/data.js`
- `generateFromJSON.js` — reads data from `data/data.json`

Add concrete invocation examples here after validating the entry points locally.

---

## License

See [LICENSE](LICENSE).
