{
    const tasks = [];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString +=
                `<li ${task.done ? "style = \"text-decoration: line-through\"" : ""}>
                <button class="js-removeTask">Usuń!</button>
                ${task.content};
                </li>`;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-removeTask");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask (index);
            });
        });
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const addNewTask = (addTaskElement) => {
        tasks.push({ content: addTaskElement });
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const addTaskElement = document.querySelector(".js-addTask").value.trim();
        if (addTaskElement === "") {
            return;
        }
        addNewTask(addTaskElement);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}