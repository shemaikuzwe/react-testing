import { User } from "../lib/types";

export default function UserLists({ users }: { users: User[] }) {
  return (
    <>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/users/${user.id}`}>{user.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users availbale</p>
      )}
    </>
  );
}
