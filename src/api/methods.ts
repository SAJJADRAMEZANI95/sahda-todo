import { BASE_URL_ADDRESS } from "./constants";

const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

function errorThrower(response: Response) {
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
}

function errorCatcher(error: any) {
  console.error("There was a problem with the fetch operation:", error);
  throw error;
}

export async function getTodoList() {
  return fetch(BASE_URL_ADDRESS)
    .then((response) => {
      errorThrower(response);
      return response.json();
    })
    .catch((error) => {
      errorCatcher(error);
    });
}

export async function toggleTodo(params: { id: string; type: number }) {
  try {
    const response = await fetch(`${BASE_URL_ADDRESS}/update.php`, {
      method: "PUT",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ ...params, sort: true }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}

export async function deleteTodo( id: string ) {
  try {
    const response = await fetch(`${BASE_URL_ADDRESS}/delete.php`, {
      method: "delete",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ id, type: 2, sort: true }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}

export async function updateTodo({ id, val }: { id: string; val: string }) {
  try {
    const response = await fetch(`${BASE_URL_ADDRESS}/update.php`, {
      method: "PUT",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ id, item: val }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}

export async function createTodo({ val }: { val: string }) {
  try {
    const response = await fetch(`${BASE_URL_ADDRESS}/create/task/`, {
      method: "POST",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ item: val }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}
