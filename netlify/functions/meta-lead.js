const crypto = require("crypto");

const META_PIXEL_ID = "1354108716770070";
const META_CAPI_TOKEN =
  "EAAhL7OZBZBPPoBRcCIB0B8KX3rK2qPOiAL2RPob84H6NGSVwFZAfdqcvpql8jZAfvQltwocM0b0MUewxGqJz2fchZAPTZANNklIBE4RjgpP2owLIuVn0qtnmunMfmZC3auebC3cdhCrWODWcZCmaUnN3880ab0BLwgQDRGdWbsIWeItqlrMpOiobXZAwG3GZBEiTUpfwZDZD";

function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function parseName(fullName) {
  const cleaned = String(fullName || "").trim().replace(/\s+/g, " ");
  if (!cleaned) return { firstName: "", lastName: "" };
  const parts = cleaned.split(" ");
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const phone = normalizePhone(payload.phone);
  const ph = phone ? [sha256(phone)] : undefined;
  const { firstName, lastName } = parseName(payload.full_name);
  const fn = firstName ? [sha256(normalizeText(firstName))] : undefined;
  const ln = lastName ? [sha256(normalizeText(lastName))] : undefined;
  const eventTime = Number(payload.event_time) || Math.floor(Date.now() / 1000);

  const data = {
    event_name: payload.event_name || "Lead",
    event_time: eventTime,
    event_id: payload.event_id,
    action_source: "website",
    event_source_url: payload.event_source_url || "",
    user_data: {
      ph,
      fn,
      ln,
      fbp: payload.fbp || undefined,
      fbc: payload.fbc || undefined,
      client_ip_address: payload.ip_address || undefined,
      client_user_agent: payload.user_agent || undefined,
    },
    custom_data: {
      content_name: "IELTS consultation",
      utm_source: payload.utm_source || undefined,
      utm_medium: payload.utm_medium || undefined,
      utm_campaign: payload.utm_campaign || undefined,
      utm_term: payload.utm_term || undefined,
      utm_content: payload.utm_content || undefined,
      fbclid: payload.fbclid || undefined,
      full_name: payload.full_name || undefined,
    },
  };

  const endpoint = `https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`;

  const metaRes = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [data] }),
  });

  const metaBody = await metaRes.text();

  if (!metaRes.ok) {
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: "Meta CAPI request failed",
        status: metaRes.status,
        response: metaBody,
      }),
    };
  }

  console.log("[Meta CAPI] Lead sent successfully", {
    event_id: data.event_id,
    event_name: data.event_name,
    response: metaBody,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      response: metaBody,
    }),
  };
};
