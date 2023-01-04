// @generated automatically by Diesel CLI.

diesel::table! {
    reservations (id) {
        id -> Int4,
        user_id -> Nullable<Int4>,
        created_at -> Nullable<Date>,
        expired_at -> Nullable<Date>,
        price -> Nullable<Int2>,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        name -> Nullable<Varchar>,
        email -> Nullable<Varchar>,
        password -> Nullable<Varchar>,
        created_at -> Nullable<Date>,
        deleted_at -> Nullable<Date>,
    }
}

diesel::table! {
    wallets (id) {
        id -> Int4,
        user_id -> Nullable<Int4>,
        cash -> Nullable<Int4>,
        created_at -> Nullable<Date>,
        deleted_at -> Nullable<Date>,
    }
}

diesel::joinable!(reservations -> users (user_id));
diesel::joinable!(wallets -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    reservations,
    users,
    wallets,
);
