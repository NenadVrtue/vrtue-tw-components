// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      minHeight: {
        "90vh": "90vh",
        "80vh": "80vh",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      rotate: ["group-hover", "active"],
    },
  },
  plugins: [],
}
