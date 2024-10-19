import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fba8ac0000b1157c1b");

export const account = new Account(client);
export const databases = new Databases(client);
