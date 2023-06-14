const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a task, field cannot be empty"],  //validation so that the user can not enter an empty field
    },
    description: {
      type: String,
      required: [true, "Please add a description, field cannot be empty"],  //validation so that the user can not enter an empty field
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,   //initially task is not completed, hence false
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;