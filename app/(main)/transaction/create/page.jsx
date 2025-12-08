import { getUserAccounts } from "@/actions/dashboard";
import React from "react";
import AddTransactionForm from "../_components/transaction-form";
import { defaultCategories } from "@/data/categories";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ searchParams = {} }) {
  const accounts = await getUserAccounts();

  const editId = searchParams?.edit;

  let initialData = null;
  if (editId) {
    try {
      const transaction = await getTransaction(editId);
      initialData = transaction;
    } catch (err) {
      // Leave initialData null if fetch fails; form will render in create mode.
      console.error("Failed to load transaction for edit:", err?.message);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title">
        {" "}
        {editId ? "Edit" : "Add"} Transaction
      </h1>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
