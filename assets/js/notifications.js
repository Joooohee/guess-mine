const { default: events } = require("../../src/events");

const notifications = document.getElementById("jsNotifications");

export const handleNewUser = ({ nickname }) => {
  console.log(nickname, " just joined");
};
