const messagesContainers = document.querySelectorAll(".mgs-wrapper");
const readAllToggler = document.querySelector("[data-readAll]");
const mgsCountDisplay = document.querySelector(".num-of-messages");

// count the number of unread messages
let unreadMgsCount = 0;
messagesContainers.forEach((mgs) => {
  if (!mgs.classList.contains("read")) unreadMgsCount++;
});

// add the class read if not present
function readMessageHandler() {
  if (this.classList.contains("read")) return;
  this.classList.add("read");
  unreadMgsCount--;
  mgsCountDisplay.textContent = `${unreadMgsCount}`;
  return;
}

// add read to all the messages
function handleReadAll() {
  messagesContainers.forEach((mgs) => {
    mgs.classList.add("read");
  });
  unreadMgsCount = 0;
  mgsCountDisplay.textContent = `${unreadMgsCount}`;
  return;
}

messagesContainers.forEach((mgs) =>
  mgs.addEventListener("click", readMessageHandler)
);
readAllToggler.addEventListener("click", handleReadAll);
