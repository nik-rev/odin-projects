import addTodo from "./add-todo";

export const data = {
  events: [
    {
      title: "Birthday",
      description: "Happy birthday to me",
      date: "14 August",
      color: "Blue",
      favorite: true,
    },
    {
      title: "Physics Exam",
      description: "Final year A Level exam",
      date: "25 May",
      color: "Red",
      favorite: false,
    },
  ],
  learning: [
    {
      title: "Website Launch",
      description: "Launching my personal project website",
      date: "30 June",
      color: "Green",
      project: "Learning",
      favorite: true,
    },
    {
      title: "Maths Tutorial",
      description: "Attending advanced calculus session",
      date: "15 March",
      color: "Orange",
      project: "Learning",
      favorite: false,
    },
  ],
  leisure: [
    {
      title: "Science Fair",
      description: "Participating in regional science fair",
      date: "20 April",
      color: "Purple",
      project: "Leisure",
      favorite: false,
    },
    {
      title: "Family Trip",
      description: "Weekend getaway with family",
      date: "10 July",
      color: "Yellow",
      project: "Leisure",
      favorite: true,
    },
  ],
};

export default function interpretData(data) {
  for (const [key, value] of Object.entries(data)) {
    for (const todo of value) {
      addTodo(
        `${key}`,
        todo["title"],
        todo["description"],
        todo["date"],
        todo["color"],
        todo["favorite"]
      );
    }
  }
}

// addTodo(
//   projectName,
//   todoTitle,
//   todoDescription,
//   todoDate,
//   todoPriority,
//   todoFavorite
// );
