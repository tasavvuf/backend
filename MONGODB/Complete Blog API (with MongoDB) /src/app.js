const express = require("express");
const app = express();
app.use(express.json());
const blogModel = require("./model/blog.model");
app.get("/", (_, res) => {
  res.send("welcome to server ");
});
app.get("/api/posts", async (req, res) => {
  const posts = await blogModel.find();
  res.json(posts);
});
app.get("/api/posts/published", async (req, res) => {
  const published = await blogModel.find({ published: true });
  res.json(published);
});
app.get("/api/posts/:id", async (req, res) => {
  const _id = req.params.id;
  const post = await blogModel.findOne({ _id });
  res.json(post);
});
app.post("/api/posts", async (req, res) => {
  try {
    const newPost = await blogModel.create(req.body)

    res.status(201).json({
      message: "Post created",
      data: newPost
    })

  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors
      })
    }

    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
})
app.put("/api/posts/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const updated = await blogModel.findOneAndUpdate({ _id }, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Post updated successfully",
      data: updated,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors,
      });
    }

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});
app.delete("/api/posts/:id", async (req, res) => {
  const _id = req.params.id;
  const deleted = await blogModel.findOneAndDelete({ _id });
});
app.get("/api/posts/author/:authorName", async (req, res) => {
  const authorName = req.params.authorName;
  const post = await blogModel.find({ author: authorName });
  res.json(post);
});
module.exports = app;
