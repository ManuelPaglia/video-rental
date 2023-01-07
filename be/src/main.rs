#[macro_use]
extern crate rocket;
use jsonwebtoken::{encode, EncodingKey, Header};
use rocket::response::status;
use rocket::serde::{json::Json, Deserialize, Serialize};
mod store;

#[get("/v1/health")]
fn healthcheck() -> status::NoContent {
    status::NoContent
}

#[derive(Responder)]
#[response(status = 418, content_type = "json")]
struct HealthCheck {
    status: &'static str,
}

#[head("/v1/health/live")]
fn is_api_alive() -> HealthCheck {
    return HealthCheck { status: "OK" };
}

#[derive(Responder)]
#[response(status = 418, content_type = "json")]
struct TeapotJson(&'static str);

#[get("/egg")]
fn easter_egg() -> TeapotJson {
    TeapotJson("Patrizio was here")
}

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct JWTPayload {
    payload: String,
}

/// Our claims struct, it needs to derive `Serialize` and/or `Deserialize`
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    //sub: String,
    exp: usize,
    user_id: u32,
}

#[derive(Deserialize,Debug)]
struct UserCredentials{
    email: String,
    password: String
}

#[derive(Responder)]
struct HttpStatus{
    status: &'static str,
}

#[post("/v1/signup", data = "<signup>")]
fn signup(signup: Json<UserCredentials>) -> status::NoContent {
   println!("{:#?}",signup.email);
   status::NoContent
}


#[post("/v1/signin", data = "<signin>")]
fn singin(signin: Json<UserCredentials>) -> Json<JWTPayload> {
    println!("{:#?}",signin.email);
    // TODO use a secret key to secure the actual JWT
    let token = encode(
        &Header::default(),
        &Claims {
            exp: 3600,
            user_id: 42,
        },
        &EncodingKey::from_secret("secret".as_ref()),
    )
    .unwrap();
    return Json(JWTPayload { payload: token });
}


#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct Reservation {
    id: u32,
}

#[get("/v1/reservations/<reservation_id>")]
fn retrieve_single_reservation(reservation_id: u32) -> Json<Reservation> {
    return Json(Reservation { id: reservation_id });
}

#[post("/v1/reservation")]
fn retrieve_reservations() -> Json<Vec<Reservation>> {
    return Json(vec![Reservation { id: 12 }, Reservation { id: 13 }]);
}


#[delete("/v1/reservation/<reservation_id>")]
fn delete_reservation(reservation_id: u32) -> status::NoContent {
    println!("deleted reservation {}",reservation_id);
    status::NoContent
}

#[derive(Deserialize,Debug)]
struct WalletOperation{
    amount: u32
}

#[put("/wallet/<wallet_id>/spend", data = "<amount>")]
fn wallet_spend_money(wallet_id: u32,amount: Json<WalletOperation>) -> status::NoContent{
    println!("spent {:#?} from wallet {}",amount.amount,wallet_id);
    status::NoContent
}

#[put("/wallet/<wallet_id>/recharge", data = "<amount>")]
fn wallet_recharge_money(wallet_id: u32,amount: Json<WalletOperation>) -> status::NoContent{
    println!("recharged {:#?} from wallet {}",amount.amount,wallet_id);
    status::NoContent
}

#[derive(Serialize)]
struct Wallet {
    cash: u16
}

#[get("/wallet/<wallet_id>")]
fn retrieve_wallet_info(wallet_id: u32) -> Json<Wallet>{
    println!("deleted wallet {}",wallet_id);
    Json(Wallet { cash: 100 })
}

#[launch]
fn rocket() -> _ {
    println!("connecting to database");
    store::extablish_connection();
    println!("connection to database successfully extablished");
    rocket::build().mount(
        "/",
        routes![
            is_api_alive,
            easter_egg,
            signup,
            singin,
            healthcheck,
            delete_reservation,
            retrieve_reservations,
            retrieve_single_reservation,
            retrieve_wallet_info,
            wallet_spend_money,
            wallet_recharge_money
        ],
    )
}

