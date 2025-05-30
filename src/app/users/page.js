import getUsers from "../../../services/getUsers";
import Link from "next/link";
export default async function Page() {
  const getUserList = getUsers();
  const users = await getUserList;
  console.log(users);
  return (
    <div>
      <h1>user List</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
