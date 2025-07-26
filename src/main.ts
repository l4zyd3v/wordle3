import "./style.css";

const createElement = (element: string, className?: string): HTMLElement => {
  const elm = document.createElement(element) as HTMLElement;
  className && elm.classList.add(className);

  return elm;
};

const createGame = () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const gameBoard = createElement("div", "gameBoard");
  const player1 = createElement("div", "player1");
  const player2 = createElement("div", "player2");
  const ball = createElement("div", "ball");

  app.appendChild(gameBoard);
  gameBoard.appendChild(player1);
  gameBoard.appendChild(player2);
  gameBoard.appendChild(ball);
};

document.addEventListener("DOMContentLoaded", () => {
  createGame();
  control();
});

const startGame = () => {};

const control = () => {
  const player1 = document.querySelector(".player1");
  console.log(player1);

  player1?.addEventListener("click", () => {
    console.log("testtest");
  });
};
