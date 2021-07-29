Due to a bug in IntelliJ on linux this is currently a .txt and not a .md file

# Code for Fintools Research Project
A relatively simple application that applies the theoretical ideas.

### Note on the database:
You may look through the code and wonder "why didn't this guy use a proper database?"
-> The simple reason for that is that it is an explicit requirement for this application to be deployable without the need for a database setup.
-> all data is stored using plain JSON files, both input and output.

Output files can be downloaded through an admin endpoint.

### Note on security
The admin endpoint for downloading result files is the only secured endpoint and even that is only using simple basic auth. The main point here is also that this application is designed to be as simple as possible
