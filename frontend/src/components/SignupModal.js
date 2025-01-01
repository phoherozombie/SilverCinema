import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/navigation";
import { register } from "../utils/api/auth"; // Make sure to implement this API function
import { signupFailedToast, signupSuccessToast } from "../toasts/toast";

const SignUpModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Handle form submission logic
  const handleSignUp = async (values) => {
    setLoading(true);
    try {
      console.log(values);
      const response = await register(values); // Sign-up API function
      const { token, user } = response;
      console.log(token, user);

      signupSuccessToast(); // Redirect to home page
      onClose();
      form.resetFields();
    } catch (err) {
      handleSignUpError(err);
    } finally {
      router.push("/");
      setLoading(false);
    }
  };

  // Handle error case with toast
  const handleSignUpError = (err) => {
    console.log(err.response.data.message);
    const errorMessage =
      err.response?.data?.message || "Sign up failed. Please try again.";
      signupFailedToast(errorMessage);
  };

  return (
    <Modal
      title="Sign Up to SilverScreen"
      open={true}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleSignUp} layout="vertical">
        <div className="form-row">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name!" },
              { pattern: /^\S*$/, message: "No white spaces allowed!" }
            ]}
          >
            <Input
              type="text"
              name="firstName"
              value={inputs.firstName}
              onChange={handleInputChange}
              placeholder="Your first name"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please enter your last name!" },
              { pattern: /^\S*$/, message: "No white spaces allowed!" }
            ]}
          >
            <Input
              type="text"
              name="lastName"
              value={inputs.lastName}
              onChange={handleInputChange}
              placeholder="Your last name"
              disabled={loading}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email!" },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            placeholder="Your email"
            disabled={loading}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Password must be at least 8 characters long and contain both letters and numbers!",
            },
          ]}
        >
          <Input.Password
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            placeholder="Your password"
            disabled={loading}
          />
        </Form.Item>

        {/* New Phone Number Input with pattern */}
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number!",
            },
          ]}
        >
          <Input
            type="text"
            name="phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleInputChange}
            placeholder="Your phone number"
            disabled={loading}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={loading}>
            {loading ? <BarLoader color="#e6e6e8" /> : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
