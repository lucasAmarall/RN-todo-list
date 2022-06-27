# React Native code challenge
## Description
You're in charge of building a Todo List App.

We provided the basic wireframes, check the `wireframes` directory.

The App must connect to the graphql API inside the `backend` directory. Check the `README` file and follow the setup instructions.

You can check the graphql playground in `http://localhost:3000/graphql`. All the queries and mutations required for the challenge are in the `graphql` directory.

## Objectives
- create app using create-react-native-app cli with typescript template (don't use expo).
- use Apollo client to set up graphql provider.
- create three screens, SignIn, Home, Profile.
- create BottomNavigation with react navigation
- create Authentication flow.
  - login mutation will return an accessToken, set the Authorization header Bearer token on all requests because queries and mutations are guarded.
- when the user is logged in, should be redirected to Home, and show all todos for the user.
- create handler to add Todo.
- create handler to set todo complete.
- Profile page should have a button to logout user.

## Plus (nice to have)
- Testing (unit or e2e with Detox)
- Redux store.

## Next Steps

- Clone this repository
- Create a new branch feature/lastname-firstname
- Implement your solution on a **client** named folder



