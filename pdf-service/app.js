const express = require("express");
const app = express();
const morgan = require("morgan");
const PDFExtract = require("pdf.js-extract").PDFExtract;
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(morgan("dev"));
app.post("/extractTextFromPDF", upload.single("text"), async (req, res) => {
  try {
    const buffer = req.file.buffer;
    const pdfExtract = new PDFExtract();
    const data = await pdfExtract.extractBuffer(buffer, {});
    const pages = data.pages;
    let extractedText = "";
    // console.log(pages.length);
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { content } = page;
      // console.log(content.length);
      for (let j = 0; j < content.length - 1; j++) {
        const textElement = content[j];
        extractedText +=
          Math.round(content[j].y) != Math.round(content[j + 1].y)
            ? textElement.str + "\n"
            : textElement.str;
        if (j == content.length - 2) extractedText += content[j + 1].str;
      }
    }
    res.status(200).json({
      status: "success",
      text: extractedText,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء تحميل الملف" });
  }
});
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "err",
    message: "this router is not define",
  });
});
app.listen(3400, () => {
  console.log(`Example app listening at http://localhost:3400`);
});
