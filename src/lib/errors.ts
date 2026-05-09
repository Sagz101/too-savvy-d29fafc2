/**
 * Extract a user-readable error message from an unknown thrown value.
 */
export function getErrorMessage(error: unknown, fallback = "An unexpected error occurred"): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "message" in error) {
    const msg = (error as { message?: unknown }).message;
    if (typeof msg === "string") return msg;
  }
  return fallback;
}
