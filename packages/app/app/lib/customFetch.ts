import { API_BASE_URL, SECRET_API_KEY, REVALIDATE_WINDOW } from "@app/app/template/envVars";


export default async function customFetch(
  method: string,
  path: string,
  payload?: {
    query?: Record<string, any>;
    body?: Record<string, any>;
  }
) {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-publishable-key': SECRET_API_KEY,
    },
    next: {
      revalidate: parseInt(REVALIDATE_WINDOW.toString()),
      tags: ['custom_request'],
    },
  };

  if (payload?.body) {
    options.body = JSON.stringify(payload.body);
  }

  if (payload?.query) {
    const params = objectToURLSearchParams(payload.query!).toString();
    path = `${path}?${params}`;
  }

  const limit = payload?.query?.limit || 100;
  const offset = payload?.query?.offset || 0;

  try {
    const result = await fetch(`${API_BASE_URL}/api${path}`, options);
    // const result = await fetch(`${API_BASE_URL}/api${path}`, options);
    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    const nextPage = offset + limit;

    body.nextPage = body.count > nextPage ? nextPage : null;

    return {
      status: result.status,
      ok: result.ok,
      body,
    };
  } catch (error: any) {
    throw {
      error: error.message,
    };
  }
}

function objectToURLSearchParams(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value: any) => {
        params.append(`${key}[]`, value);
      });
    } else {
      params.append(key, obj[key]);
    }
  }

  return params;
}
