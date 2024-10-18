import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { EdubukContexts } from "../../Context/EdubukContext";
import SmallLoader from "../SmallLoader/SmallLoader";

const AddWitness = () => {
  const [instWitnessAdd, setInstWitnessAdd] = useState("");
  const [loading, setLoading] = useState();
  const { connectingWithContract, account } = useContext(EdubukContexts);
  const [isTransaction, setTransaction] = useState(false);

  const addWitness = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const contract = await connectingWithContract();
      await contract.revokeInstitute(instWitnessAdd);
      setLoading(false);
      setTransaction(true);
      toast.success("Institute Revoked Successfully");
      setInstWitnessAdd("");
    } catch (error) {
      toast.error("Error in Institute Revoke", error);
      console.error("Error in Institute Revoke: ", error);
      setLoading(false);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={addWitness}>
        <h2>Add Institute Witness</h2>
        <div className="input-box">
          <input
            type="text"
            required
            placeholder="Institute Witness Address"
            value={instWitnessAdd}
            onChange={(e) => setInstWitnessAdd(e.target.value)}
          ></input>
          <label htmlFor="name">Institute Witness Address</label>
        </div>
        {loading === true ? (
          <SmallLoader />
        ) : (
          <div className="multi-btn">
            {" "}
            <button id="register-btn">Add Witness</button>{" "}
            {isTransaction && (
              <a
                href={`https://explorer.xinfin.network/address/${account}`}
                id="xdc-explorer"
                target="_blank"
                rel="noreferrer"
              >
                View Transaction
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddWitness;
