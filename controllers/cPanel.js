import CPanel from "../models/CPanel.js";
export const getUid = async (req, res) => {
  const { email } = req.body;
  console.log({ "Create Post Data": post });
  try {
    const uid = await CPanel.find();
    res.status(200).json(postMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getPosts = async (req, res) => {
  const post = req.body;
  console.log({ "Create Post Data": post });
  try {
    const postMessages = await CPanel.find();
    res.status(200).json(postMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new PostMessage(post);

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  // const newPostMessage = new PostMessage(post);
  // const { title, message, creator, selectedFile, tags } = req.body;
  try {
    if (!mongoose.Type.ObjectID.isValid(id))
      return res.status(404).send("Not Valid Id");
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    console.log({ message: error.message });
    res.status(407).json({ message: error.message });
  }
};
