# Design Process

1. Identify all the different routes you want your app to have + the Data that each shows

2. Make `path helper` functions
   Very good for medium - large scale applications

3. Create routing folders + `page.tsx` files based on the step 1

4. Identify the places where data changes in your application

5. Make empty Server actions for each route

6. Add in comments on what paths you'll need to `revalidate` for each server action
