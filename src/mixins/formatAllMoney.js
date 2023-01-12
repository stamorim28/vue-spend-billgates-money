export const formatAllMoney = {
  methods: {
    formatAllMoney(value) {
      let currency = value;

      const formattedNumber = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(currency);

      return formattedNumber;
    },
  },
};
