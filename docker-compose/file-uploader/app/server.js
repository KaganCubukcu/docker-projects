import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "src")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${path.extname(file.originalname)}`;
    console.log(`Generated file name: ${fileName}`);
    cb(null, fileName);
  },
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
}).single("photo");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get("/image/show/:imageID", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.imageID);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error serving file", err);
      res.status(404).json({ errpor: "Image not found" });
    }
  });
});

app.post("/image", (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.error("Error uploading image", err);
      return res.status(400).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No file Uploaded" });
    }
    res.json({
      msg: "Image uploaded successfully!",
      fileName: req.file.filename,
    });
  });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error: ", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
