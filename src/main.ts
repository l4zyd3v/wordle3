import "./style.css";

const createElement = (element: string, className?: string): HTMLElement => {
  const elm = document.createElement(element) as HTMLElement;
  className && elm.classList.add(className);

  return elm;
};

const createNewGame = () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const gameBoard = createElement("div", "gameBoard");
  const player1 = createElement("div", "player1");
  const player2 = createElement("div", "player2");
  const ball = createElement("div", "ball");
  const button = createElement("button", "startButton");
  button.textContent = "Start Game";
  button.style.position = "absolute";
  button.style.top = "10px";

  app.appendChild(gameBoard);
  app.appendChild(button);
  gameBoard.appendChild(player1);
  gameBoard.appendChild(player2);
  gameBoard.appendChild(ball);
};

const initiateControl = () => {
  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");
  const startBtn = document.querySelector(".startButton");

  startBtn?.addEventListener("click", () => {});

  document.addEventListener("keydown", (event) => {});
};

const start = () => {
  createNewGame();
  initiateControl();
};

document.addEventListener("DOMContentLoaded", start);
