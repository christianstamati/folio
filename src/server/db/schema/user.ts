import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  createdAt: integer("created_at"),
});
