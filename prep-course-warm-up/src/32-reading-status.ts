export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (arr: any) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      arr[i].isRead
        ? `Already read '${arr[i].title}' by ${arr[i].author}.`
        : `You still need to read '${arr[i].title}' by ${arr[i].author}.`
    );
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
