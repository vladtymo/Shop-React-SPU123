import './UserCard.css';

// ------------ create component function

// props - input parameters
export default function UserCard({ username, email, address } /*props*/) {
    // props destructuring
    //let {username, email, address} = props;

    // ... additional logic

    // return component markup
    return (
        // {code}
        <div className="UserCard">
            <h3>User {username}</h3>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
        </div>
    );
}
