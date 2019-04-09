# DockerCounter

## Goal

Develop a service, using a node or ruby, that increments a count via a POST call, and returns that count via a GET call. Since we want to persist the count, include a data store of your choice in this project.

## Functionality

The service should increment the count with a POST call to `http://localhost:3000/count` (an empty body is ok). The response should include the new count, i.e. `{ "count": 1 }`

It should return the count with a GET call to `http://localhost:3000/count` with the shape `{ "count": 1 }`

The provided integration tests should all pass. To run the tests, first make sure that you have [newman](l) installed: `npm install -g newman`. There is a provided script to run the tests in the `tests` directory: `./tests/run_tests.sh`
