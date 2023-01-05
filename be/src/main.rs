#[macro_use]
extern crate rocket;
use std::str::FromStr;
use jsonwebtoken::{encode,  Header, EncodingKey};
use rocket::serde::{Serialize, json::Json,Deserialize};
use rocket::response::status;
mod store;


#[get("/v1/health")]
fn healthcheck() -> status::NoContent {
    status::NoContent
}

#[derive(Responder)]
#[response(status = 418, content_type = "json")]
struct HealthCheck{
    status: &'static str
}

#[head("/v1/health/live")]
fn is_api_alive() -> HealthCheck{
    return HealthCheck { status: "OK"}
}

#[derive(Responder)]
#[response(status = 418, content_type = "json")]
struct TeapotJson(&'static str);

#[get("/egg")]
fn easter_egg() -> TeapotJson {
    TeapotJson("Patrizio was here")
}

/*
#[post("/signin")]
fn
*/ 

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct JWTPayload{
    payload: String,
}


/// Our claims struct, it needs to derive `Serialize` and/or `Deserialize`
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,
    company: String,
    exp: usize,
    user_id: u32
}

#[post("/v1/signup")]
fn signup() -> Json<JWTPayload> {
    // TODO use a secret key to secure the actual JWT
    let token = encode(&Header::default(), &Claims{sub:String::from_str("12345").unwrap(),company: String::from_str("barbone").unwrap(),exp:3600,user_id:42}, &EncodingKey::from_secret("secret".as_ref())).unwrap();
    return Json(JWTPayload{payload: token});
}

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct Reservation{
    id: u32
}

#[get("/v1/reservations/<reservation_id>")]
fn retrieve_single_reservation(reservation_id: u32) -> Json<Reservation>{
    return Json(Reservation { id: reservation_id })
}

#[post("/v1/reservation")]
fn retrieve_reservations() -> Json<Vec<Reservation>> {
    return Json(vec![Reservation{id:12},Reservation{id:13}])
}

#[derive(Responder)]
#[response(status = 200, content_type = "json")]
struct OKReservationDeletion(&'static str);

#[delete("/reservation/:id")]
fn delete_reservation() -> OKReservationDeletion{
    OKReservationDeletion("{ \"status\": \"OK\" }")
}

/*
#[put("/wallet")]
fn
*/ 

/*
#[get("/wallet/:id")]
fn
*/ 

#[launch]
fn rocket() -> _ {
    println!("connecting to database");
    store::extablish_connection();
    println!("connection to database successfully extablished");
    rocket::build()
        .mount("/", routes![is_api_alive,easter_egg,signup,healthcheck,delete_reservation,retrieve_reservations,retrieve_single_reservation])
}