module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets//scss/reset";
                    @import "@/assets//scss/colors";
                    @import "@/assets//scss/buttons";
                    @import "@/assets//scss/mixins";
                    @import "@/assets//scss/typography";
                    @import "@/assets//scss/config";
                `
            }
        }
    }
}