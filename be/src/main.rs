#[macro_use]
extern crate rocket;
mod store;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    println!("connecting to database");
    store::extablish_connection();
    println!("connection to database successfully extablished");
    rocket::build().mount("/", routes![index])
}
