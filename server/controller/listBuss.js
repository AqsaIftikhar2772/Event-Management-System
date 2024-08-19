import User from "../models/authModle.js";
import List from "../models/listBussModel.js";

export const submitList = async (req, res) => {
  try {
    const { first_name, last_name, email, mobile, message } = req.body;
    let emptyFields = [];
    if (!first_name) {
      emptyFields.push("first_name");
    }
    if (!last_name) {
      emptyFields.push("last_name");
    }
    if (!email) {
      emptyFields.push("email");
    }
    if (!mobile) {
      emptyFields.push("mobile");
    }
    if (!message) {
      emptyFields.push("message");
    }
    if (emptyFields.length > 0) {
      return res.status(404).json({
        success: false,
        message: `${emptyFields.join(", ")} ${
          emptyFields.length === 1 ? "is" : "are"
        }  required`,
      });
    }
    const existEmail = await User.findOne({ email });
    const existnote = await User.findOne({ email });
    if (existnote) {
        return res.status(201).json({
          success: true,
          data: existnote
        });
    }
    if (existEmail) {
      const newList = await List.create({
        user: existEmail._id,
        first_name,
        last_name,
        email,
        mobile,
        message,
      });
      return res.status(201).json({
        success: true,
        data: newList,
      });
    }
    return res.status(404).json({
      success: false,
      message: "email is not exist",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};
