# README

## Getting started
Ruby, NodeJS and PostgresQL versions are defined in `.tool-versions`. If you are using asdf as a version manager install the relevant versions with `asdf install`

- Install gems: `bundle install`
- Ensure database server is running: `pg_ctl start`
- Create database: `rails db:create`
- Run migrations: `rails db:migrate`

## Running locally
- Build JS files (and watch for changes): `yarn build --watch`
- Run rails server in a separate terminal: `rails s`

The application should be running on `http://localhost:3000/`
