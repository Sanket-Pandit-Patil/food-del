import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kabaddi1424:S8a3zASPKhVqA3G9@cluster0.axqme.mongodb.net/food-del');
    console.log("✅ DB Connected Successfully");
  } catch (error) {
    console.error("❌ DB Connection Error: ", error.message);
    process.exit(1);  // Exit process with failure
  }
};
