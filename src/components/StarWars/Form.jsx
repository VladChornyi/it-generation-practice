import {useState} from 'react';

export const Form = ({onSubmit}) => {
  const [searchName, setSearchName] = useState('');
  // console.log(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchName);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
