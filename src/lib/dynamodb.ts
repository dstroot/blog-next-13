import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb'
import type {
  GetCommandInput,
  PutCommandInput,
  QueryCommandInput,
  ScanCommandInput,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb'

import { env } from '@/config/env.mjs'

/*

Note that we're using AWS-SDK v3, and the DynamoDBDocumentClient which will simplify querying our Database from within our code. Additionally, its important *not* to use the variable names AWS provided us with: e.g AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY. These are reserved variable names on Vercel so we cannot use them.  The problem was AWS documentation doesn't explain how to do that so I finally figured it out below.

 */

// Create an Amazon DynamoDB service client object.
export const client = new DynamoDBClient({
  credentials: {
    accessKeyId: env.ACCESS_KEY,
    secretAccessKey: env.SECRET_KEY,
  },
  region: env.REGION,
})

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
}

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
}

const translateConfig = { marshallOptions, unmarshallOptions }

// Create the DynamoDB *Document* client
export const ddbDocClient = DynamoDBDocumentClient.from(client, translateConfig)

// export simple operators (document client)
export const get = (params: GetCommandInput) =>
  ddbDocClient.send(new GetCommand(params))
export const put = (params: PutCommandInput) =>
  ddbDocClient.send(new PutCommand(params))
export const upd = (params: UpdateCommandInput) =>
  ddbDocClient.send(new UpdateCommand(params))
export const scan = (params: ScanCommandInput) =>
  ddbDocClient.send(new ScanCommand(params))
export const query = (params: QueryCommandInput) =>
  ddbDocClient.send(new QueryCommand(params))
