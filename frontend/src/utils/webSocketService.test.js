import webSocketService, { handleReceive } from "./webSocketService";

describe("WebSocketService", () => {
  it("should call callback function when received socket message in JSON", () => {
    const mockedCallback = jest.fn();
    const event = { data: '{"type": "TESTING"}' };
    handleReceive(event, mockedCallback);
    expect(mockedCallback).toBeCalledTimes(1);
    expect(mockedCallback).toBeCalledWith({ type: "TESTING" });
  });

  it("should throw error when received unexpected socket message", () => {
    const mockedCallback = jest.fn();
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => {});
    const event = { data: "invalid message" };
    handleReceive(event, mockedCallback);
    expect(mockedCallback).toBeCalledTimes(0);
    expect(consoleError).toBeCalledTimes(1);
  });

  it("should add addEventListener when calling onReceive()", () => {
    const spy = jest
      .spyOn(WebSocket.prototype, "addEventListener")
      .mockImplementation(() => {});
    webSocketService.onReceive();
    expect(spy).toBeCalledTimes(1);
  });
});
