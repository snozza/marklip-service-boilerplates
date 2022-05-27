export default {
  type: 'object',
  properties: {
    function: { type: 'string' },
    input: { type: 'object' },
  },
  required: ['function'],
} as const;
