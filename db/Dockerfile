# Use the official PostgreSQL image
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB social_media
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_INITDB_ARGS --encoding=UTF-8 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.UTF-8

# Expose the PostgreSQL default port
EXPOSE 5432

# Run the PostgreSQL server
CMD ["postgres"]