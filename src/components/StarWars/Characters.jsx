export const Characters = ({users}) => {
  return (
    <ul>
      {users.map((item) => {
        return (
          <li key={item.name}>
            <p>{item.name}</p>
            <p>{item.gender}</p>
          </li>
        );
      })}
    </ul>
  );
};
