var ping = require("net-ping");

export async function GET() {
  let session = ping.createSession();
  const target = "fe80::a00:27ff:fe2a:3427";

  session.pingHost(target, function (error: { toString: () => string; }, target: string, sent: number, rcvd: number) {
    const ms = rcvd - sent;
    if (error)
      console.log(target + ": " + error.toString());
    else
      console.log(target + ": Alive (ms=" + ms + ")");
  });

  return Response.json({ pinged: "all good" })
}