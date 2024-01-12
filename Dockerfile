# Use the official PostgreSQL image
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB social_media
ENV POSTGRES_USER stevie
ENV POSTGRES_PASSWORD bestPasswordEver
ENV POSTGRES_INITDB_ARGS --encoding=UTF-8 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.UTF-8

# Copy the SQL script to initialize the database schema
COPY ./social_media_schema.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL default port
EXPOSE 5432

# Run the PostgreSQL server
CMD ["postgres"]