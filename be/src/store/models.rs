use diesel::pg::PgConnection;

pub trait Store {
    // add code here
}

pub struct VideoRentalStore {
    pub db_conn: PgConnection,
}
