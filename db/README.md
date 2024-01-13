# How to setup the database

### build dockerfile to image
```docker build -t social_media_db .```

### run docker image
```docker run -d -p 5432:5432 social_media_db```

# Run Liquidbase

```
brew install liquibase
liquidbase status
liquibase update