import db from "../db"
import { postsTable } from "../db/schemas/post.schema";

const DUMMY_USER_ID = "11111111-1111-1111-1111-111111111111"; // temporary
export const createPost = async ({ mediaUrl, publicId }: { mediaUrl: string, publicId: string }) => {
  try{
    const [post] = await db.insert(postsTable).values({userId: DUMMY_USER_ID, mediaUrl: mediaUrl}).returning();
    return post;
  }

  catch(error) {
    throw new Error("insertion failed");
  }
}