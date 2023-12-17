import { v4 } from "uuid";

export default function getUuid(length: number = 10): string {
  return v4().replace(/-/g, "").substring(0, length);
}
