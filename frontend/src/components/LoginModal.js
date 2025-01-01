import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/navigation";
import { login } from "../utils/api/auth";
import { loginFailedToast, loginSuccessToast } from "../toasts/toast";

const LoginModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Handle form submission logic
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await login(values);
      const { token, user } = await response;
      console.log(token, user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.id);

      loginSuccessToast();

      // Dispatch custom event
      const event = new Event("userLoggedIn");
      window.dispatchEvent(event);
    } catch (err) {
      handleLoginError(err);
    } finally {
      form.resetFields();
      setLoading(false);
      onClose();
      const user = localStorage.getItem("user");
      redirectUser(user);
    }
  };

  // Success logic: store token and redirect
  const handleLoginSuccess = (data) => {
    const { token, user } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Handle error case with toast
  const handleLoginError = (err) => {
    console.log(err.response.data.message);
    const errorMessage =
      err.response?.data?.message || "Login failed. Please try again.";
    loginFailedToast(errorMessage);
  };

  // Redirect based on user role
  const redirectUser = (user) => {
    if (user.role === '"admin"') {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  return (
    <Modal
      title="Sign in to SilverScreen"
      open={true}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleLogin} layout="vertical">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            disabled={loading}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter Password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            disabled={loading}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={loading}>
            {loading ? <BarLoader color="#e6e6e8" /> : "Sign In"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
