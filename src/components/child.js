

const Child = (props) => {
    const {count, userName} = props;
    return (
        <div>
            <p>User Name: {userName}</p>
            <p>Count: {count}</p>

        </div>
    )
}

export default Child;