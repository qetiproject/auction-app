import User from "./user.model.js";

export async function createUser(body) {
  const newUser = new User(body);
  await newUser.save();
  return newUser;
}

export async function getUsers() {
  const users = User.find();
  return users;
}

export async function getUserById(userId) {
  const user = User.findById(userId);
  return user;
}

export async function deleteUserById(userId) {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.deleteOne();
  return user;
}
