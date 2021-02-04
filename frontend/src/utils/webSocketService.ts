export function handleReceive(event: MessageEvent<any>, callback: any) {
  try {
    const action = JSON.parse(event.data);
    if (typeof action === "object" && action !== null) {
      callback(action);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Unexpected socket message - ${err}`);
  }
}

class WebSocketService {
  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(
      process.env.REACT_APP_WEBSOCKET_HOST || "ws://localhost:3000"
    );
  }

  onReceive(listener: any) {
    if (this.socket) {
      this.socket.addEventListener("message", (event) =>
        handleReceive(event, listener)
      );
    }
  }
}

export default new WebSocketService();
