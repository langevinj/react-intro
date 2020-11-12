const App = () => (
    <div>
        <Person name="Johnathan" age={15} hobbies={["skateboard", "rock-climbing", "tennis"]} />
        <Person name="Ashely" age={85} hobbies={["weaving", "watching movies"]}/>
        <Person name="Ellie" age={27} hobbies={["music", "baking"]} />
    </div>   
)

ReactDOM.render(<App />, document.getElementById("root"))