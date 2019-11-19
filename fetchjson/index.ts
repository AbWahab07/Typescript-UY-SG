import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(response => {
  const todo = response.data;

  const { ID, Title, finished } = todo;

  console.log(`
    Todo with Id: ${ID}
    Has a title of: ${Title}
    Is it finished: ${finished}
  `);
});
