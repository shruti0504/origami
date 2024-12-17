import React, { useState } from "react";
import axios from "axios";

const EnrollPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://origami-1.onrender.com/enroll", formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("yeahhh doneeeeeee.");
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Enroll in Origami World</h1>
            <p>Fill in your details to start your origami journey.</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Enroll
                </button>
            </form>
            {message && <p style={{ marginTop: "15px", color: "green" }}>{message}</p>}
        </div>
    );
};

export default EnrollPage;
