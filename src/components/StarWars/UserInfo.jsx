const UserInfo = ({item}) => {
  return(
    <>
    <p>{item.name}</p>
    <p>{item.gender}</p>
    <p>{item.birth_year}</p>
    <p>{item.hair_color}</p>
    <p>{item.skin_color}</p>
    </>
  );
};

export default UserInfo;