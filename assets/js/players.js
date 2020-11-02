import { disableCanvas, hideControls } from "./paint";

const board = document.getElementById("jsPBoard");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.innerText = `${player.nickname} : ${player.point}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  // disable canvas events
  disableCanvas();
  // hide the canvas controls
  hideControls();
};
