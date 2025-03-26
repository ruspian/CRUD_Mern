import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/user', {
        name: nama,
        email,
        gender,
      });
      navigate('/');
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="columns">
      <div className="column is-half mt-5">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="input" placeholder="Nama" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Nama" />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type='submit' className='button is-success'>Simpan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser;
