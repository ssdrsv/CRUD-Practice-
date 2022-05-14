



## SQL
#### STEPS
1. [ ] Run the following command to install external dependencies (make sure you are in the correct folder!):
````
npm install
````
2. [ ] Invoke `psql -d <url from elephantSQL> -f starwars_postgres_create.sql`. This will open the connection to your database and execute the SQL statements that will create tables in your database and populate them with rows of data. Make sure you let the script run all the way through. It will take a minute or two.

3. [ ] Create the dbModel.js to connect the database to the application
        [ ] require {Pool} from pg (Non-blocking PostgreSQL client for Node.js)

4. [ ] Create a server.js file

