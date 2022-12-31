#[macro_use]
extern crate rocket;
mod store;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    store::extablish_connection();
    rocket::build().mount("/", routes![index])
}
