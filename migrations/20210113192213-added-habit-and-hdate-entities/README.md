# Migration `20210113192213-added-habit-and-hdate-entities`

This migration has been generated by Caitlin Tibbetts at 1/13/2021, 1:22:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "HDate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "habitId" INTEGER,

    FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

CREATE TABLE "Habit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
)

CREATE UNIQUE INDEX "Habit.name_unique" ON "Habit"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210113191845-added-habit-and-hdate-entities..20210113192213-added-habit-and-hdate-entities
--- datamodel.dml
+++ datamodel.dml
@@ -1,11 +1,23 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
   output = "../server/node_modules/.prisma/client"
 }
+model HDate {
+    id  Int @id @default(autoincrement())
+  at DateTime @default(now())
+  finished  Boolean @default(false)
+}
+
+model Habit {
+    id  Int @id @default(autoincrement())
+  name String @unique
+  hDate HDate[]
+}
+
```

