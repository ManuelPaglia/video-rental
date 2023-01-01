pub mod models;
use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenvy::dotenv;
use std::env;

// TODO Study on how traits works and instead of returning struct return trait here
pub fn extablish_connection() -> models::VideoRentalStore {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let pg_conn = PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url));
    return models::VideoRentalStore { db_conn: pg_conn };
}
