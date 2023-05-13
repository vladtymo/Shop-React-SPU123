import UserCard from "./UserCard";

export function UserList({ users }) {

    return (
        <>
            <h2>User List</h2>
            {users.map((u, i) => <UserCard key={i} {...u} />)}
        </>
    );
}