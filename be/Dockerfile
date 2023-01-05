FROM rust:1.66.0-slim-buster as builder

WORKDIR /usr/src

RUN apt-get update -y
RUN apt-get install libpq-dev -y

COPY Cargo.toml /usr/src/video-rental-be/

WORKDIR /usr/src/video-rental-be/

## Install target platform (Cross-Compilation) --> Needed for Alpine
# RUN rustup target add x86_64-unknown-linux-musl

COPY src src/

RUN cargo build --release

################
##### Runtime
FROM debian:bullseye-slim AS runtime 
RUN apt-get update -y
RUN apt-get install libpq5 -y
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
# Copy application binary from builder image
COPY --from=builder /usr/src/video-rental-be/target/release/video-rental-be /usr/local/bin

EXPOSE 8000
ENV ROCKET_ADDRESS=0.0.0.0

# Run the application
CMD ["/usr/local/bin/video-rental-be"]
