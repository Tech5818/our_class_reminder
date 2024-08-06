export const ChatbotResponse = (body: string) => {
  return {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: body,
          },
        },
      ],
    },
  };
};
