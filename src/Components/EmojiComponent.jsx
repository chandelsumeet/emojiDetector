import { useState } from "react";
const EmojiComponent = () => {
  const [meaning, setMeaning] = useState("Emoji Meaning");

  const emojiData = {
    "❤️": "Love",
    "😂": "Laughing",
    "😍": "Smiling face with heart eyes",
    "👍": "Thumbs up",
    "😁": "Beaming face",
    "🙌": "High Five",
    "👌": "Ok Hand",
    "🤣": "LOL",
    "😢": "Crying face",
  };

  const handleChange = (event) => {
    filterEmoji(event.target.value);
  };

  const filterEmoji = (emoji) => {
    let result = emojiData[emoji];
    result = result ? result : "Not Found";
    setMeaning(result);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Emoji Detector</h1>
      <input onChange={handleChange} placeholder="enter emoji to" />
      <h2>{meaning}</h2>
      <div style={{ display: "flex" }}>
        {Object.keys(emojiData).map((emoji, index) => {
          return (
            <p key={index} onClick={() => filterEmoji(emoji)}>
              {emoji}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default EmojiComponent;
