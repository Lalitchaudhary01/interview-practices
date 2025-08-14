import React, { useState } from "react";

type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

const ExpenseForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !amount || !category.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setName("");
    setAmount("");
    setCategory("");
  };

  const handleRemove = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        💰 Expense Tracker
      </h1>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          className="border p-2 rounded-lg flex-1"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 rounded-lg w-24"
          placeholder="₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="border p-2 rounded-lg flex-1"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </form>

      {/* List */}
      <ul className="space-y-3">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center p-3 border rounded-lg bg-gray-50"
          >
            <div>
              <span className="font-semibold">{exp.name}</span> - ₹{exp.amount}
              <span className="text-gray-500 text-sm"> ({exp.category})</span>
            </div>
            <button
              onClick={() => handleRemove(exp.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <h3 className="text-lg font-bold text-right mt-6">Total: ₹{total}</h3>
    </div>
  );
};

export default ExpenseForm;
