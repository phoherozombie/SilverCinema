import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/navigation";
import { login } from "../../utils/api/auth";
import { loginFailedToast, loginSuccessToast } from "../../toasts/toast";

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
      const { token, user } = response;
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
      title={
        <h2 className="text-3xl font-semibold text-[#d4314d] text-left">
          Sign in to SilverScreen
        </h2>
      }
      open={true}
      onCancel={onClose}
      footer={null}
      className="p-4 rounded-lg shadow-lg"
    >
      <Form
        form={form}
        onFinish={handleLogin}
        layout="vertical"
        className="space-y-4"
      >
        <Form.Item
          name="email"
          label={<span className="text-lg font-medium text-gray-700">Email</span>}
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            disabled={loading}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <span className="text-lg font-medium text-gray-700">Password</span>
          }
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter Password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            disabled={loading}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={loading}
            className="bg-[#d4314d] text-white font-medium py-2 px-4 rounded-lg hover:bg-red transition-all duration-300"
          >
            {loading ? (
              <BarLoader color="#ffffff" />
            ) : (
              "Sign In"
            )}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
