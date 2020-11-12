const App = () => (
    <div>
        <Tweet message="JSX is exciting" username="testuser" date="11-12-2020" />
        <Tweet message="I don't think i'll ever learn React" username="testuser" date="08-20-2020" />
        <Tweet message="I'm a full time software developer finally!" username="testuser" date="11-1-2021" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))