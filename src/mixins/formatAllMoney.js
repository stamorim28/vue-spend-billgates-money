export const formatAllMoney = {
  methods: {
    formatAllMoney(value, notation) {
      const options = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      };
      if (notation === "compact") {
        options.notation = "compact";
      } else if (notation && notation !== "compact") {
        throw new Error(`Invalid parameter, expected "compact"`);
      }

      return new Intl.NumberFormat("en", options).format(value);
    },
  },
};
