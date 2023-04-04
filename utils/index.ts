export function clampString(
  input: string,
  maxLen: number,
  ellipsis: string = "..."
): string {
  if (input.length <= maxLen) {
    return input;
  }
  const truncatedInput = input.substring(0, maxLen - ellipsis.length);
  return truncatedInput + ellipsis;
}
