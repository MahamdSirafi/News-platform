const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
const t = require("tesseract.js");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.post("/text_extraction", upload.single("text"), async (req, res) => {
  try {
    const buffer = req.file.buffer;
    t.recognize(buffer, "eng")
      .then((out) => res.json({ text: out.data.text }))
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "حدث خطأ أثناء معالجة الصورة" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء تحميل الصورة" });
  }
});
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "err",
    message: "this router is not define",
  });
});
app.listen(3300, () => {
  console.log(`Example app listening at http://localhost:3300`);
});
