import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { user } from "@/server/db/schema/user";

export const todo = sqliteTable("todo", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => user.id),
  name: text("name"),
  done: integer("done", { mode: "boolean" }),
  createdAt: integer("created_at"),
});
