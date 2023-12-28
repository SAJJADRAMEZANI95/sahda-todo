import { BASE_URL } from "./constants";

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
  return fetch(BASE_URL)
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
    const response = await fetch(`${BASE_URL}/update.php`, {
      method: "POST",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ ...params, sort: true }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}

export async function deleteTodo({ id }: { id: string }) {
  try {
    const response = await fetch(`${BASE_URL}/delete.php`, {
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
    const response = await fetch(`${BASE_URL}/update.php`, {
      method: "delete",
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
    const response = await fetch(`${BASE_URL}/create/task/`, {
      method: "delete",
      headers: DEFAULT_HEADER,
      body: JSON.stringify({ item: val }),
    });

    errorThrower(response);

    return await response.json();
  } catch (error) {
    errorCatcher(error);
  }
}
