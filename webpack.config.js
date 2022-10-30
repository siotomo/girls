const path = require("path");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    'admin/app': path.resolve(__dirname, "app/javascript/packs/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "public/packs"),
    filename: isProd ? "[name]-[hash].js" : "[name].js"
  }
}