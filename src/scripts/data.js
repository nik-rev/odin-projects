import addTodo from "./add-todo";

export const data = {
  events: [
    // Existing events
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
    // New events for 'events' project
    {
      title: "Coding Workshop",
      description: "Participating in a JavaScript workshop",
      date: "5 September",
      color: "Grey",
      favorite: false,
    },
    {
      title: "Hackathon",
      description: "Attending a local hackathon",
      date: "11 November",
      color: "Pink",
      favorite: true,
    },
    {
      title: "Project Deadline",
      description: "Submission deadline for personal project",
      date: "30 November",
      color: "Black",
      favorite: false,
    },
    {
      title: "New Year Celebration",
      description: "Celebrating New Year with friends",
      date: "31 December",
      color: "Gold",
      favorite: true,
    },
  ],
  learning: [
    // Existing events
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
    // New events for 'learning' project
    {
      title: "JavaScript Course",
      description: "Starting an advanced JavaScript course",
      date: "1 February",
      color: "Cyan",
      project: "Learning",
      favorite: true,
    },
    {
      title: "Physics Conference",
      description: "Presenting at a physics conference",
      date: "22 August",
      color: "Violet",
      project: "Learning",
      favorite: false,
    },
    {
      title: "Group Study",
      description: "Group study session for finals",
      date: "3 June",
      color: "Brown",
      project: "Learning",
      favorite: false,
    },
    {
      title: "Online Webinar",
      description: "Attending a webinar on web development",
      date: "18 October",
      color: "Magenta",
      project: "Learning",
      favorite: true,
    },
  ],
  leisure: [
    // Existing events
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
    // New events for 'leisure' project
    {
      title: "Movie Marathon",
      description: "Hosting a movie night with friends",
      date: "24 December",
      color: "Silver",
      project: "Leisure",
      favorite: true,
    },
    {
      title: "Beach Day",
      description: "Day trip to the beach",
      date: "15 August",
      color: "Turquoise",
      project: "Leisure",
      favorite: false,
    },
    {
      title: "Book Club Meeting",
      description: "Monthly book club gathering",
      date: "5 January",
      color: "Maroon",
      project: "Leisure",
      favorite: true,
    },
    {
      title: "Gaming Tournament",
      description: "Participating in a local gaming event",
      date: "17 March",
      color: "Lime",
      project: "Leisure",
      favorite: false,
    },
  ],
  // Two additional projects with events
  fitness: [
    {
      title: "Gym Membership",
      description: "Starting a new gym membership",
      date: "2 January",
      color: "Blue",
      favorite: false,
    },
    {
      title: "Half Marathon",
      description: "Running in a local half marathon",
      date: "16 April",
      color: "Red",
      favorite: true,
    },
    {
      title: "Yoga Workshop",
      description: "Attending a weekend yoga retreat",
      date: "21 July",
      color: "Green",
      favorite: false,
    },
    {
      title: "Bike Race",
      description: "Competing in a charity bike race",
      date: "3 September",
      color: "Orange",
      favorite: true,
    },
    {
      title: "Hiking Trip",
      description: "Hiking trip with friends",
      date: "28 May",
      color: "Purple",
      favorite: false,
    },
    {
      title: "Swimming Lessons",
      description: "Starting swimming lessons",
      date: "12 August",
      color: "Yellow",
      favorite: true,
    },
  ],
  work: [
    {
      title: "Project Presentation",
      description: "Presenting a major project at work",
      date: "10 February",
      color: "Grey",
      favorite: true,
    },
    {
      title: "Team Building",
      description: "Team building activity",
      date: "26 May",
      color: "Pink",
      favorite: false,
    },
    {
      title: "Client Meeting",
      description: "Meeting with an important client",
      date: "15 July",
      color: "Black",
      favorite: true,
    },
    {
      title: "Annual Review",
      description: "Annual performance review",
      date: "20 October",
      color: "Gold",
      favorite: false,
    },
    {
      title: "Conference Attendance",
      description: "Attending an industry conference",
      date: "11 March",
      color: "Cyan",
      favorite: true,
    },
    {
      title: "Deadline for Report",
      description: "Submission deadline for quarterly report",
      date: "31 January",
      color: "Violet",
      favorite: false,
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
