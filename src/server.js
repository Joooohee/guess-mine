import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import { join } from "path";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log(`✅ Server is starting`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => {
  setTimeout(() => socket.broadcast.emit("hello"), 5000);
});
