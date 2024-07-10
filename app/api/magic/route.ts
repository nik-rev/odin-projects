import { loginWithMagicLinkUseCase } from "@/use-cases/magic-link";
import { afterLoginUrl } from "@/app-config";
import { setSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response(null, {
        headers: {
          Location: "/sign-in",
        },
        status: 302,
      });
    }

    const user = await loginWithMagicLinkUseCase(token);

    await setSession(user.id);

    return new Response(null, {
      headers: {
        Location: afterLoginUrl,
      },
      status: 302,
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      headers: {
        Location: "/sign-in/magic/error",
      },
      status: 302,
    });
  }
}
