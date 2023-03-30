---
outline: deep
---

# The Geen package

TODO

Why Geen
It’s a “less little" framework on top of Vostok to add these notions:

Homogeneous development of REST services

Removal of dumb code that takes 80% of time for simple CRUDS (create, read, update, delete, search) actions

stronger IoC: inversion of control

means : the framework structures all calls

is different from a simple library

consistency of code execution

robustness

swiftness of development / prototyping

Separation of concerns: development of whole applications by following a n-tier architecture. Separation by logical layers (e.g. models, business logic, database access, API endpoints)

natural breakdown of code (ideally ~250 lines per file, 100 lines per function)

consistency of code writing

readability+++

enforced by specific contexts

enforces code reuse & robustness

Geen features:

Coding of entities (“business objects” or “models”)

For BI, WS, DB: overridable hooks

for example, there a "native" CreateEntity(vehicle)

hooks: BeforeCreate ChangeafterUpdate, IsValid

Automatic persistency of entities ("no SQL" to write)

Tracked scheduled jobs

Structuration of "REST" endpoints

"code first" approach (describe at the same time the persistency layer, & the WS layer)

functions / methods to declare endpoints

automatically “Swaggerised” app

Loading plans

describe in 1 line what to load

save hundreds & hundreds of LoC

performance of the "by-layer" loading method

Generic User / User group management (WIP)

Generic diff functions ("Audit")

1 hook to override to activate

keep track of who changed what

Automatic testing

random persistency tests ("it can all be persisted to the DB")

schema (compliance of the developed entities)

Errors declaration, allowing to track a causal chain

Persisted cron jobs configuration

WIP: 

    quick search / count...

    Count(KINDVEHICLE).Where(criteria, value) ("no SQL")

    deletion / removal / purge of entities

+ admin module (WIP)
+ task engine
+ personal info audit


