docker kill db
docker rm db
docker build -t social_media_db ./db
docker run -d -p 5432:5432 --name db social_media_db
docker ps
liquidbase status
liquibase update