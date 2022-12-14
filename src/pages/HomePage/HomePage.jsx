// import React, { useEffect } from "react";
// import { useState } from "react";

import { Link, useSearchParams, useLocation } from "react-router-dom";

const tasks = [
  {
    name: "posts",
    link: "posts",
  },
  {
    name: "products",
    link: "products",
  },
  {
    name: "albums",
    link: "albums",
  },
  {
    name: "starWars",
    link: "starWars",
  },
  {
    name: "goodsList",
    link: "goodsList",
  },
  {
    name: "FAQ",
    link: "FAQ",
  },
];

export default function HomePage() {
  const [params, setParams] = useSearchParams();

  const location = useLocation();

  const taskName = params.get("search") ?? "";

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(taskName)
  );

  const taskNameChange = (event) => {
    setParams({ search: event.target.value.toLowerCase() });
  };

  return (
    <>
      <div>HomePage</div>
      <input
        name="taskName"
        placeholder="Type task name"
        type="text"
        onChange={taskNameChange}
        value={taskName}
      />
      {filteredTasks.length > 0 && (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.name}>
              <Link to={`exercises/${task.link}`} state={{ from: location }}>
                {task.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
