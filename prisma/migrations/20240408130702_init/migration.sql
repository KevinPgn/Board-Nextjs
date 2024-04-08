-- CreateTable
CREATE TABLE "Title" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titleId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,
    CONSTRAINT "Comment_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
