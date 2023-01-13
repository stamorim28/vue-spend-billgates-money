export const formatAllMoney = {
  methods: {
    formatAllMoney(value, notation) {
      let currency = value;
      let compact = { notation: "compact" };

      const trueNotation = () => {
        if (notation && notation === "compact") {
          return compact.notation;
        } else if (notation && notation !== "compact") {
          throw new Error(`Parametrô incorreto, é esperado: "compact"`);
        } else {
          return;
        }
      };

      const formattedNumber = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        notation: trueNotation(),
      }).format(currency);

      return formattedNumber;
    },
  },
};
