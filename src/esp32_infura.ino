#include <WiFi.h>
#include <Wire.h>
#include <Arduino.h>
#include <HTTPClient.h>

int pinsensorPH = 33;
WiFiClient clienteWifi;
const char* direccionCuentaEth = "7c82811324474eeaa72bccd5d2dbba92";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  delay(1000);
  Serial.print("Conectando a la red WiFi");
  WiFi.begin("Wokwi-GUEST", "", 6);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.print("\nConectado a la red WiFi");
  pinMode(pinsensorPH,INPUT);
  ConectarseaInfura();
}

void ConectarseaInfura() {
  HTTPClient http;
  String json = "{\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"" + String(direccionCuentaEth) + "\",\"latest\"],\"id\":1}";
  http.begin("https://mainnet.infura.io/v3/7c82811324474eeaa72bccd5d2dbba92");
  http.addHeader("Content-Type", "application/json");
  int httpRespuesta = http.POST(json);

  String respuesta = http.getString();
  Serial.print("\nRespuesta del servidor");
  Serial.print(respuesta);
  http.end();
}

void loop() {
 int valorPH = analogRead(pinsensorPH);
 float ValorPHVerdadero = map(valorPH,0,4095,0,14);
 Serial.print("PH: ");
 Serial.println(ValorPHVerdadero);

  
  delay(5000);
}
