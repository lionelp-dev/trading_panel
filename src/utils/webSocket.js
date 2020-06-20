let socket = null;
try {
  // Connexion vers un serveur HTTP
  // prennant en charge le protocole WebSocket ("ws://").
  socket = new WebSocket("ws://stream.binance.com:9443");

  // ----- OU -----

  // Connexion vers un serveur HTTPS
  // prennant en charge le protocole WebSocket over SSL ("wss://").
  socket = new WebSocket("wss://stream.binance.com:9443");
} catch (exception) {
  console.error(exception);
}

// Récupération des erreurs.
// Si la connexion ne s'établie pas,
// l'erreur sera émise ici.
socket.onerror = function(error) {
  console.error(error);
};

// Lorsque la connexion est établie.
socket.onopen = function(event) {
  console.log("Connexion établie.");

  // Lorsque la connexion se termine.
  this.onclose = function(event) {
    console.log("Connexion terminé.");
  };

  // Lorsque le serveur envoi un message.
  this.onmessage = function(event) {
    console.log("Message:", event.data);
  };

  // Envoi d'un message vers le serveur.
  this.send("Hello world!");
};

export function useWebSokect() {
  return <></>;
}
