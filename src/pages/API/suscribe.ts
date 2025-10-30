import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try{
    const { email } = await request.json();
    const apikey = import.meta.env.API_KEY_BREVO_REGISTRE_CONTACT;

    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apikey, 
      },
      body: JSON.stringify({
        email,
        listIds: [5],
      }),
    });
  
    const data = await resp.json();
  
    return new Response(JSON.stringify(data), { status: resp.status });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }
};
