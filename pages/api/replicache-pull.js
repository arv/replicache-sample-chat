export default async (req, res) => {
  res.json({
    lastMutationID: 0,
    cookie: null,
    patch: [
      { op: "clear" },
      {
        op: "put",
        key: "user/1",
        value: {
          name: "Jane",
        },
      },
      {
        op: "put",
        key: "user/2",
        value: {
          name: "Fred",
        },
      },
      {
        op: "put",
        key: "message/1",
        value: {
          fromUser: 1,
          content: "Hey, what's for lunch?",
        },
      },
      {
        op: "put",
        key: "message/1",
        value: {
          fromUser: 2,
          content: "tacos?",
        },
      },
    ],
  });
  res.end();
};
