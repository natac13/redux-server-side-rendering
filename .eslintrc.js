module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
      "new-cap": ["error", {
        "capIsNewExceptions": ["Map", "Set", "List"]
      }],
      "max-len": ["error", { "code": 120, "tabWidth": 2, "ignoreComments": true }],
      "quote-props": ["error", "consistent-as-needed"],
    }
};