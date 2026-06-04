export type GreetingResponse = {
  message: string;
  service: string;
  timestamp: string;
};

const DEFAULT_API_BASE_URL = "http://127.0.0.1:5000";

export function getApiBaseUrl() {
  return (process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL).replace(
    /\/$/,
    "",
  );
}

export async function fetchGreeting(): Promise<GreetingResponse> {
  const response = await fetch(`${getApiBaseUrl()}/api/greeting`);

  if (!response.ok) {
    throw new Error("Failed to load greeting from the API");
  }

  return response.json() as Promise<GreetingResponse>;
}
