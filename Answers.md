1. What problem does the context API help solve?

Context provides a central location to store state, without having to do prop drilling



2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers provide a way to change state depending on the action being passed in.  Store is the what holds the state and reducers and makes them available to the application.

single source of truth: because it is a single location that is available to the whole app



3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state for the whole application, where component state is for a single component



4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that allows action-creators to handle asynchronous operations



5. What is your favorite state management system you've learned and this sprint? Please explain why!

I'm not partial to any of them