import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const photos = sqliteTable("photos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  url: text("url").notNull(),

  uploadedBy: text("uploaded_by"),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
