import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{3,20}$)([\u4e00-\u9fa5a-zA-Z0-9._]+)$/, "Username invalid, it should contain 3-20 characters including Chinese, alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;
