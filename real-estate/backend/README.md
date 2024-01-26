RealEstate Backend
------------------
This system provide REST API based authentication with JWT. I've created CRUD operations for users and properties. Authorization will work with passed token in each request. You must login before create property and send JWT token with create property request. Users operations do not require authentication for now. But can be added in route if you needed.


1. Populate users - use '/users' API end point with POST methods. Put role param if need specific role like admin. Without role param, it will add 'registered' role to user. It's default role for non-admin users. You should add at least one admin user to create property from frontend.


2. Populate properties - use '/properties/populate' to populate properties table. Each property will have 3-20 images randomly. 


I have used 'pnpm' and 'vite' to create this backend.


Run following commands to run project (check package.json for more commands)
-----------------------------------------
pnpm install

pnpm run dev