# Instructions

In order to launch the backend locally you will require docker or podman respectivelly

As for now ask for the env in order to connect the database, or use you're own db.

`podman run --rm -it $(podman build -q --build-arg DATABASE_URL=<database-url> be/)`

FYI this command is also launching with docker replacing the postman command with docker.
