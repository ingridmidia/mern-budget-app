import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_INCOME, DELETE_EXPENSE } from "../utils/mutations";
import IncomeTable from "../components/incomeTable";
import ExpenseTable from "../components/expenseTable";
import { Grid } from "@mui/material";

const Transaction = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const updateExpense = (event, expenseId) => {
    event.preventDefault();
    window.location.assign(`/expense/${expenseId}/update`);
  };

  const [deleteExpense, { err }] = useMutation(DELETE_EXPENSE, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const removeExpense = async (event, expenseId) => {
    event.preventDefault();
    try {
      const { data } = await deleteExpense({ variables: { expenseId } });
    } catch (error) {
      console.error(error);
    }
  };

  const updateIncome = (event, incomeId) => {
    event.preventDefault();
    window.location.assign(`/income/${incomeId}/update`);
  };

  const [deleteIncome, { error }] = useMutation(DELETE_INCOME, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const removeIncome = async (event, incomeId) => {
    event.preventDefault();

    try {
      const { data } = await deleteIncome({ variables: { incomeId } });
    } catch (error) {
      console.error(error);
    }
  };

  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  // Handle loading state
  if (loading) {
    // You can use loading skeletons or placeholders here
    return <div>Loading...</div>;
  }

  // User data is available
  const userInfo = data.me;

  return (
    <div style={{ marginTop: "3rem", paddingBottom: "3rem"}}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* First table - Income */}
        <Grid item xs={12} md={6} xl={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IncomeTable
              data={userInfo.incomes}
              onUpdate={updateIncome}
              onDelete={removeIncome}
            />
            {userInfo.incomes.length === 0 && <p>No incomes found.</p>}
          </div>
        </Grid>

        {/* Second table - Expenses */}
        <Grid item xs={12} md={6} xl={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ExpenseTable
              data={userInfo.expenses}
              onUpdate={updateExpense}
              onDelete={removeExpense}
            />
            {userInfo.expenses.length === 0 && <p>No expenses found.</p>}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transaction;
