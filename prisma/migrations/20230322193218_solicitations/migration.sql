-- CreateTable
CREATE TABLE "solicitations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "userCpf" TEXT NOT NULL,
    "tracking" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solicitations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "solicitations" ADD CONSTRAINT "solicitations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
