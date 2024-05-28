export async function GET() {
  const weather_api = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${process.env.MY_ZIPCODE}&aqi=no`
  const res = await fetch(weather_api)
  const data = await res.json()
  const condition = data.current.condition

  return Response.json({ condition })
}