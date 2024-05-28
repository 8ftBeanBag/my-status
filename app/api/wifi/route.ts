export async function GET() {
  const url = `https://api.uptimerobot.com/v2/getMonitors?api_key=${process.env.UPTIME_KEY}`
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  const body = {
    'api_key': process.env.UPTIME_KEY,
    'format': 'json'
  }

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return Response.json({ status: data.monitors[0].status == 2 })
}