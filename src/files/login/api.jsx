const handleSubmit = (values, { resetForm }) => {
    setLoading(true); // start loading

    const headers = {
        Authorization: token,
        "Content-Type": "application/json",
    };

    // 1️⃣ GET request
    axios.get("https://generateapi.techsnack.online/api/login", { headers })
        .then((getRes) => {
            console.log("GET response:", getRes.data);
            showSnackbar("GET successful", "info");
        })
        .catch((err) => {
            console.error("GET error:", err);
            showSnackbar("GET failed", "error");
        });

    // 2️⃣ POST request (login)
    axios.post(
        "https://generateapi.techsnack.online/api/login",
        { username: values.username, password: values.password },
        { headers }
    )
    .then((postRes) => {
        console.log("POST response:", postRes.data);
        if (postRes.data.Status === "Success") {
            showSnackbar("Login successful!", "success");
            resetForm();
            history.push("/dashboard");
        } else {
            showSnackbar(postRes.data.message || "Login failed", "error");
        }
    })
    .catch((err) => {
        console.error("POST error:", err);
        showSnackbar(err.response.data.message || "Server error", "error");
    });

    // 3️⃣ PATCH request (example: update password)
    axios.patch(
        "https://generateapi.techsnack.online/api/user/update",
        { password: "NewPass@123" },
        { headers }
    )
    .then((patchRes) => {
        console.log("PATCH response:", patchRes.data);
        showSnackbar("Password updated (PATCH)", "success");
    })
    .catch((err) => {
        console.error("PATCH error:", err);
        showSnackbar("PATCH failed", "error");
    });

    // 4️⃣ DELETE request (example: delete user)
    axios.delete(
        "https://generateapi.techsnack.online/api/user/delete",
        { headers }
    )
    .then((deleteRes) => {
        console.log("DELETE response:", deleteRes.data);
        showSnackbar("User deleted (DELETE)", "warning");
    })
    .catch((err) => {
        console.error("DELETE error:", err);
        showSnackbar("DELETE failed", "error");
    })
    .finally(() => {
        setLoading(false); // stop loading after all requests
    });
};
