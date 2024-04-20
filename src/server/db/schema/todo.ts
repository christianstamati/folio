import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { user } from "@/server/db/schema/user";
import { sql } from "drizzle-orm";

export const todo = sqliteTable("todo", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  name: text("name").notNull(),
  done: integer("done", { mode: "boolean" }).notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});
