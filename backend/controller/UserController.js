import User from "../models/UserModel.js";

// mengambil semua data user
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// mengambil data user berdasarkan id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// menambakan data user
export const addUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// mengupdate data user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json("Data berhasil diupdate");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// menghapus data user
export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json("Data berhasil dihapus");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
