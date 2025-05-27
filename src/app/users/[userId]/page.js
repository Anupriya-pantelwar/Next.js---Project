import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const getUserList = getUsers();
  const Users = await getUserList;
  const currentId =props.params.userId;
  console.log();
  return (
    <div>
      <h3>User detail Page</h3>
    </div>
  );
}
