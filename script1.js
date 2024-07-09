const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
    "🤡", "👹", "👺", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃",
    "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💄", "💍", "💼", "🌂",
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊",
    "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
    "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞"
    // Add more emojis 
  ];

  const generateBtn = document.getElementById("emojiGeneratreBtn");
  const emoji = document.querySelector(".emoji");

  generateRandomNumber = () =>
  {
    return Math.floor(Math.random()*emojis.length);
  }

  generateBtn.addEventListener('click',()=>
  {
    emoji.textContent = emojis[generateRandomNumber()];
  })