import React from "react";
import {
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useGetAccountsQuery,
  useUpdateAccountsMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  const [addAccounts] = useAddAccountsMutation();
  const [deleteAccounts] = useDeleteAccountsMutation();
  const [updateAccounts] = useUpdateAccountsMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {isLoading ? <p>Loading...</p> : null}
        {isSuccess &&
          data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}
              <button onClick={() => deleteAccounts(account.id)}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccounts({ id: account.id, amount: 777 })}
              >
                Update Account
              </button>
            </p>
          ))}

        <button onClick={() => addAccounts(101, data.length + 1)}>
          Add Account
        </button>
      </div>
    </div>
  );
};

export default Admin;
