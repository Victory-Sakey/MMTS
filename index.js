// index.js
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Serve React build folder
app.use(express.static(path.join(process.cwd(), "build")));

// SPA fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
