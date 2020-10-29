const body = document.querySelector("body");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
    fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");
    // const notificatio = document.createElement("div");
    // console.log(nickname, " just joined");
};

export const handleDisconnected = ({ nickname }) => {
    fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
};
