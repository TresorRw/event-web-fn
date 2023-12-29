'use server'

import { clerkClient } from "@clerk/nextjs";

export async function AssignRole(role: string, userId: string) {
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { role }
  });

  return true;
}