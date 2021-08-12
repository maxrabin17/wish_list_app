# README

User Stories

- Login
- Signup
- Full CRUD for Wishes
- User must be logged in to create/update/delete Wishes
- View Wishes by Category

- When User navigates to Site, option to Login/Singup

- User can Signup with Signup form Username and Password

- Once logged in: 
    - See all of that User's Wishes
        - Links to 'show' pages for each Wish where we can Update/Delete

- Navbar with user Signed Out:
    - Home -> Signup/Login
        - Forms to Signup/Login
- Navbar with user Signed In:
    - Logout
        - clear session
    - Wishlist Page
        - index of all current users Wishes
        - Crud is accessible from here
    - New Wish
        - form for creating new Wish
    - New Group
        - form for creating new wish group
    

FRONTEND:
    - Home Page COMPONENT-> Directs to
        - Sign up Page COMPONENT
        - Log in Page COMPONENT
    - Wish Container -> Renders all of user's wishes
    - Wish Component -> Responsible for formatting display of individual wish
    - State to save User's Wishes
    - Wish Form -> Creates new wish and saves to state & DB
    - Group Form -> Creates new group and saves to state & DB
    - Comment Form -> Creates new comment for wish

BACKEND:
WISHES ROUTES
    - Endpoint for Wishes index -> get '/wishes/' -> wishes#index
    - Endpoint for Wishes show -> get '/wishes/id' -> wishes#show
    - Endpoint for Wishes update -> patch '/wishes/id' -> wishes#update
    - Endpoint for Wishes create -> post '/wishes/' -> wishes#create
    - Endpoint for Wishes destroy -> delete '/wishes/id' -> wishes#destroy
USER ROUTES
    - Endpoint for Users create -> post '/users/' -> users#create
    - Endpoint for Users show -> get '/users/id' -> users#show
GROUP ROUTES
    - Endpoint for Groups create -> '/groups/' -> groups#create
COMMENT ROUTES
    - Endpoint for Comments create -> '/comments/' -> comments#create

    - Wish model/table