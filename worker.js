export default {
  async fetch(request, env, ctx) {
    const url = 'https://api.binance.com/api/v3/fundingRate?symbol=BTCUSDT&limit=5';

    try {
      const response = await fetch(url);
      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response('Error fetching data: ' + err.message, { status: 500 });
    }
  }
};
