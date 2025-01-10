type testParams = {
    name: string | number;
};

function testing(props: testParams) {
    return <div>test {props.name}</div>;
}

export default testing;
