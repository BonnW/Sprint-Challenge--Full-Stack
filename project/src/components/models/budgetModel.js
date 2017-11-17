const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  budgetName: {
    type: String,
    required: true
  },
  budgetDescription: {
    type: String,
    required: false
  },
  budgetAmmount: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
});

module.exports = mongoose.model('Budget', BudgetSchema);