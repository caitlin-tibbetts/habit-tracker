# Migration `20210116002919-added-hdate-list-to-habit`

This migration has been generated by Caitlin Tibbetts at 1/15/2021, 6:29:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210116001857-added-habit-and-hdate-entities..20210116002919-added-hdate-list-to-habit
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -18,6 +18,7 @@
 }
 model Habit {
     name String @id
+  dates HDate[]
 }
```


