# wlhd-mono-repo
this repo contains code required for launching wlhd as monolith application

This repo SHOULD NOT be used for development. It is only for deployment purposes.

## How to run

1. Clone the repo
2. Configure `.env`s in config folder
3. Run `docker-compose up` in the root directory

## .env setup

Inside the `config` folder, you will find a `.env.*.example` files. 
Each repo has their own environment variables and are required to be filled out.
Example envs **DO NOT contain** the required variables. Please consult each repo's example envs for more precise.
