export const autoTypeWriter = (text, setText, play, speed) => {
  let lengthText = text.length;
  let ok = false;
  if (play) {
    text.split("").forEach((e, i) =>
      setTimeout(() => {
        setText(text.substring(0, i + 1));
      }, i * speed)
    );
  }
};
