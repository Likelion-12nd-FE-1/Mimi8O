const Sample = () => {
  const stacks_array = [
    {
      name: "React",
      img: "images/React.png",
    },
    {
      name: "Java",
      img: "images/Java.png",
    },
    {
      name: "Kotlin",
      img: "images/Kotlin.png",
    },
    {
      name: "Mysql",
      img: "images/Mysql.png",
    },
    {
      name: "Python",
      img: "images/Python.png",
    },
    {
      name: "Spring",
      img: "images/Spring.png",
    },
    {
      name: "Swift",
      img: "images/Swift.png",
    },
    {
      name: "Vue",
      img: "images/Vue.png",
    },
  ];

  const SampleList = stacks_array.map((stack) => ({
    name: stack.name,
    img: stack.img,
  }));

  return SampleList;
};

export default Sample;
