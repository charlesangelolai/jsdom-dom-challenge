const Timer = {
  timerId: null,
  time: 0,
  likes: {
    0: 0,
  },
};

// class Timer {
//   constructor(element) {
//     this.timerId = null;
//     this.time = 0;
//     this.likes = {
//       0: 0,
//     };
//     this.timerElement = element;
//   }

//   startCounter() {
//     this.timerId = window.setInterval(this.increment, 1000);
//   }

//   increment() {
//     this.likes[++this.time] = 0;
//     counter.innerText = this.time;
//   }
// }

// const timer = new Timer(document.getElementById("counter"));

const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("list");
const likeList = document.querySelector(".likes");

function startCounter() {
  Timer.timerId = window.setInterval(increment, 1000);
}

function increment() {
  Timer.likes[++Timer.time] = 0;
  counter.innerText = Timer.time;
}

function decrement() {
  --counter.innerText;
}

function addLike() {
  const currentLikes = ++Timer.likes[Timer.time];
  const output = `The ${Timer.time} has been liked ${currentLikes} time${
    currentLikes > 1 ? "s" : ""
  }.`;

  if (document.getElementById(Timer.time)) {
    document.getElementById(Timer.time).innerText = output;
  } else {
    const newLike = document.createElement("li");
    newLike.id = Timer.time;
    newLike.innerText = output;
    likeList.appendChild(newLike);
  }
}

function pause() {
  if (pauseButton.innerText == "pause") {
    window.clearInterval(Timer.timerId);
    pauseButton.innerText = "resume";
  } else {
    startCounter();
    pauseButton.innerText = "pause";
  }
}

const createComment = (e) => {
  e.preventDefault();
  const newCommentInput = document.getElementById("comment-input");
  const newComment = document.createElement("p");
  newComment.innerText = newCommentInput.value;

  addComment(newComment);
  e.target.reset();
};

const addComment = (c) => {
  commentList.appendChild(c);
};

document.addEventListener("DOMContentLoaded", startCounter);
plusButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);
pauseButton.addEventListener("click", pause);
heartButton.addEventListener("click", addLike);
commentForm.addEventListener("submit", createComment);
