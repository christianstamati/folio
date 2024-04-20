import { getUsers } from "@/server/data-access/user/get-users.persistence";

export default async function Dashboard() {
  const users = await getUsers();
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div>
        {users.map((value, index) => (
          <div key={index}>{JSON.stringify(value, null, 2)}</div>
        ))}
      </div>
    </div>
  );
}
