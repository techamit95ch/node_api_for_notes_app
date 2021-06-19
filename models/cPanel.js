import mongoose from "mongoose";

const cPanelSchema = mongoose.Schema({
  email: {

  },
  uid: String,
  password: String,
  salt: String,
  loginAttempt: [Number],
  accStatus: {
    type: Number,
    default: 0,
  },
  isLoggedIn: Boolean,
  loggedIp:[{
      type: String
  }], 
  fromReact:Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CPanel = mongoose.model("cpanel", cPanelSchema);

export default CPanel;
