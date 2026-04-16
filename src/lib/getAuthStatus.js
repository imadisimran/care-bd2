import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
export const serverAuthConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  cookieName: 'AuthToken',
  cookieSignatureKeys: [process.env.COOKIE_SECRET_KEY],
  serviceAccount: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }
};
export const getAuthStatus=async ()=>{
  const cookieStore = await cookies();
  const tokens = await getTokens(cookieStore, serverAuthConfig);
  return tokens;
}
