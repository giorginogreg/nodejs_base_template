# Entrypoints folder

This is where requests and flows start, whether it's REST API, Graph, message queue, scheduled jobs or any other door to the application.

This layer's responsibility is quite minimal:
adapt the payload (e.g., JSON) to the app format, including first validation, call the logic/domain layer and return a response. 
 
This is typically achieved with a few lines of code. Many use the term "controller" for this type of code also technically, its just an adapter