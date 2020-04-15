# Oracle Connector for Node.js

This repository contains a Dockerfile and basic Node.js project that will connect to Oracle to pull data. This should serve as starting point and expand from here.

## To get started:

1. Run `cp .env.base .env` and replace 'ABC123' actual connection parameters
2. Run `docker build -t oracle-test .` to build and tag the basic image
3. Run `docker run -d -p 3000:3000 oracle-test` to start the container

## Notes:

- This solutions does not require you to have the Oracle client installed in your machine - it is inside the container.
- **Do not commit the .env file with actual connection parameters**. More information on the dotenv module can be found [here](https://www.npmjs.com/package/dotenv).
A- For local development, you can run this through `docker-compose`. A working file is included and it maps a volume for hot-reloading of code changes. Follow step one above, then run `docker-compose build` and then `docker-compose up`.
