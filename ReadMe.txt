### Run through brew

# install postgres through brew
brew install postgres

# run the damn thing
brew services start postgresql@14

# check if postgress is working
psql -d postgres

or

### Run through docker

# run dockerfile
docker build -t social_media_db .
