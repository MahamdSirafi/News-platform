const express = require("express");
const querystring = require("querystring");
const app = express();
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.post("/spellcheck", async (req, res) => {
  let text = req.body.text;
  let match = (start, end) => {
    let match = "";
    for (let i = start; i < end + start; i++) {
      match += text[i];
    }
    return match;
  };
  const requestData = {
    text,
    language: "en-US",
  };
  const requestDataEncoded = querystring.stringify(requestData);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    copytext = text;
    const response = await axios.post(
      "https://api.languagetool.org/v2/check",
      requestDataEncoded,
      config
    );
    response.data.matches.forEach((item, index) => {
      copytext = copytext.replace(
        match(item.offset, item.length),
        item.replacements[0].value
      );
    });
    correctedText = copytext;
    res.status(200).json({
      status: "success",
      text: correctedText,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء تصحيح الملف" });
  }
});
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "err",
    message: "this router is not define",
  });
});
app.listen(3500, () => {
  console.log(`Example app listening at http://localhost:3500`);
});
