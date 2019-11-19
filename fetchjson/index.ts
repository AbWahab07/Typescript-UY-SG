import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const { id, title, completed } = todo;

  console.log(`
    Todo with Id: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
  `);
});
