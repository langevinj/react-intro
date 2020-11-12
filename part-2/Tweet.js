const Tweet = (prop) => (
    <div>
        <h3>{prop.message}</h3>
        <p>tweeted by {prop.username}, {prop.date}</p>
    </div>
)