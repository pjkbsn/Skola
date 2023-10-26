// skapa en funktion för att hämta data
// skapa en funktion för att lägga till data
// skapa DOM för att visa upp data
// skapa en eventlistener på knappen som anropar funktionen addTodo(funktionens namn)
// fånga upp felmeddelanden om servern inte svarar
// visa max 5 användare från start(egen preferens/regel)

//UPPGIFT   ---STYLA LISTAN---

const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

const url = "https://jsonplaceholder.typicode.com/todos";


/************ladda in data *************/
const fetchTodos = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("fail to load data");
        }
        const data = await response.json(); //omvandlar json till javascript object
        data.slice(0, 5).forEach((todo) => {
            addTodoList(todo);
            /* console.table(todo) */
        });
    } catch (error) {
        console.error("Error adding a new todo", error);
    }
};



/*********funktion för att lägga till data *************/
const addTodo = async () => {
    const newTodo = todoInput.value;
    if (newTodo) {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    userId: 1,
                    title: newTodo,
                    completed: false,
                }),
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
            });
            if (!response.ok) {
                throw new Error("fail to load data");
            }
            const data = await response.json();
            addTodoList(data);
            todoInput.value = "";
        } catch (error) {
            console.error("Error adding a new todo", error);
        }
    }
}


/******** funktion för att kunna lägga in data via inputfältet ************/

const addTodoList = (todo) => {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.title;
    /* li.append(taskSpan); */

    // uppdatera lista
    const updateButton = document.createElement("button");
    updateButton.textContent = 'Update';
    updateButton.addEventListener("click", () => {
        const updatedTitle = prompt("updated task", taskSpan.textContent);
        if (updatedTitle) {
            updateTodo(todo.id, updatedTitle, taskSpan);
        }
    });
    /******** *******/

    //deleta lista
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteTodo(todo.id, li);
    });
    /******* ******/
    li.append(taskSpan);
    li.append(updateButton);
    li.append(deleteButton);
    todoList.appendChild(li);
};

//function to update todo
const updateTodo = async (todoId, updatedTitle, taskSpan) => {
    try {
        const response = await fetch(`${url}/${todoId}`, {
            method: "PUT",
            body: JSON.stringify({
                title: updatedTitle,
            }),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        });
        if (!response.ok) {
            throw new Error("fail to update");
        }
        const data = await response.json();
        taskSpan.innerText = data.title;
    } catch (error) {
        console.error("Error updating the todo: ", error);
    }
};

const deleteTodo = async (todoId, listItem) => {
    try {
        const response = await fetch(`${url}/${todoId}`,
            {
                method: "DELETE",
            }
        );
        if (!response.ok) {
            throw new Error("fail to update")
        }

        listItem.remove();
    } catch (error) {
        console.error("Error deleting the todo:", error);
    }
};

addTodoButton.addEventListener("click", addTodo);
fetchTodos();