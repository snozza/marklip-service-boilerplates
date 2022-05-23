import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { runVM } from '@libs/vm';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  let result: unknown;
  try {
    const codeStringToRun = decodeURIComponent(event.body.function);
    const input = event.body.input;
    result = await runVM({
      codeStringToRun,
      input,
    });
  } catch (e) {
    console.log(e);
  }

  return formatJSONResponse({
    result,
  });
};

export const main = middyfy(hello);
