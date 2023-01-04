import mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
};

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
