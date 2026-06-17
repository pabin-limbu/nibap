/*
  Warnings:

  - The values [CONVERTATIONAL] on the enum `VoiceCategory` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `repetitionpenalty` on the `Generation` table. All the data in the column will be lost.
  - Added the required column `repetitionPenalty` to the `Generation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VoiceCategory_new" AS ENUM ('AUDIOBOOK', 'CONVERSATIONAL', 'CUSTOMER_SERVICE', 'GENERAL', 'NARRATIVE', 'CHARACTERS', 'MEDITATION', 'MOTIVATIONAL', 'PODCAST', 'ADVERTISING', 'VOICEOVER', 'CORPORATE');
ALTER TABLE "public"."Voice" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Voice" ALTER COLUMN "category" TYPE "VoiceCategory_new" USING ("category"::text::"VoiceCategory_new");
ALTER TYPE "VoiceCategory" RENAME TO "VoiceCategory_old";
ALTER TYPE "VoiceCategory_new" RENAME TO "VoiceCategory";
DROP TYPE "public"."VoiceCategory_old";
ALTER TABLE "Voice" ALTER COLUMN "category" SET DEFAULT 'GENERAL';
COMMIT;

-- AlterTable
ALTER TABLE "Generation" DROP COLUMN "repetitionpenalty",
ADD COLUMN     "repetitionPenalty" DOUBLE PRECISION NOT NULL;
