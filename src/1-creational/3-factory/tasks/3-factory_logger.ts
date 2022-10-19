// ! npm run 1-3-3

import { LogEntry } from "./log-entry.model";

// * interfaces
interface Formatter {
  format(entry: LogEntry): string;
}
interface Writer {
  write(entry: string): void;
}
