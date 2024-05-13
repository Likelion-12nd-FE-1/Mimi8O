import { useState } from "react";
import Sample from "./components/Sample";
import "./Display.css";

const Display = () => {
  const [stacks, setStacks] = useState([
    { id: 100, text: "Java" },
    { id: 200, text: "Spring" },
    { id: 300, text: "Vue" },
    { id: 400, text: "Mysql" },
    { id: 500, text: "Swift" },
    { id: 600, text: "Python" },
    { id: 700, text: "React" },
    { id: 800, text: "Kotlin" },
  ]);

  const stackList = stacks.map((stacks) => (
    <li key={stacks.id}>{stacks.text}</li>
  ));

  const [images, setImages] = useState([]);

  const onRemove = (names) => {
    const Nextimg = images.filter((image) => image.names !== names);
    setImages(Nextimg);
  };

  const imageList = images.map((image) => (
    <img
      key={image.id}
      src={image.img}
      alt={image.names}
      onDoubleClick={() => onRemove(image.names)}
    />
  ));

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const OnChange = (e) => setInputText(e.target.value);

  const OnClick = () => {
    const TEXT = Sample().filter((list) => list.name === inputText);
    console.log(TEXT);
    if (TEXT.length === 0) {
      alert("그 스택은 없어요 ~");
    } else {
      const newImg = images.concat({
        id: nextId,
        names: TEXT[0].name,
        img: TEXT[0].img,
      });
      setNextId(nextId + 1);
      setImages(newImg);
    }
    setInputText("");
  };

  return (
    <div>
      <h1>과제 1: Event-Handling과 map함수 사용 + useState맛보기</h1>
      <h3>등록가능한 스택 이름(대문자 까지 일치해야 함)</h3>
      <ul>{stackList}</ul>
      <input value={inputText} onChange={OnChange}></input>
      <button onClick={OnClick}>추가</button>
      <div className="imageList">{imageList}</div>
    </div>
  );
};

export default Display;
