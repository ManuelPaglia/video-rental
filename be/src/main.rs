#[macro_use]
extern crate rocket;
use std::str::FromStr;
use jsonwebtoken::{encode, decode, Header, Algorithm, Validation, EncodingKey, DecodingKey};
use rocket::serde::{Serialize, json::Json,Deserialize};
mod store;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
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

#[post("/signup")]
fn signup() -> Json<JWTPayload> {
    // TODO use a secret key to secure the actual JWT
    let token = encode(&Header::default(), &Claims{sub:String::from_str("12345").unwrap(),company: String::from_str("barbone").unwrap(),exp:3600,user_id:42}, &EncodingKey::from_secret("secret".as_ref())).unwrap();
    return Json(JWTPayload{payload: token});
}

/*
#[get("/reservations/:id")]
fn
*/ 

/*
#[post("/reservation")]
fn
*/ 

/*
#[delete("/reservation/")]
fn
*/ 

/*
#[put("/wallet")]
fn
*/ 

/*
#[get("/wallet/:id")]
fn
*/ 


/*
#[get("/egg")] meme endpoint return the best status code
fn
*/ 

#[launch]
fn rocket() -> _ {
    println!("connecting to database");
    store::extablish_connection();
    println!("connection to database successfully extablished");
    rocket::build()
        .mount("/v1", routes![index,signup])
}