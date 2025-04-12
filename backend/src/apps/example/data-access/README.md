# Data Access

This is where the app holds code that interacts with DB.

Ideally, it should externalize an interface that returns/gets plain JavaScript object that is DB agnostic (also known as the **repository-pattern**).

This layer involves DB helper utilities like query builders, ORMs, DB drivers and other implementation libraries.