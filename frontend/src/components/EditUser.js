import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://localhost:5050/user/" + id, {
        name: nama,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get("http://localhost:5050/user/" + id);
    setNama(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);

  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="columns">
      <div className="column is-half mt-5">
        <form onSubmit={handleUpdate}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
