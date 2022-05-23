import { NodeVM } from 'vm2';

type VMArgs = {
  codeStringToRun: string;
  input: any;
};

export const runVM = async ({ codeStringToRun, input }: VMArgs) => {
  const output = {};

  const vm = new NodeVM({
    console: 'inherit',
    sandbox: { output },
    require: {
      external: true,
      builtin: ['*'],
      root: './',
      mock: {
        fs: {
          readFileSync: () => 'not available',
        },
      },
    },
  });

  const testScript = `
  module.exports = async (input) => {
    ${codeStringToRun}
  };
  `;

  // Sync
  /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
  const functionInSandbox = vm.run(testScript);
  await functionInSandbox(input);

  /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
  return output;
};
