import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/navigation";
import { register } from "../../utils/api/auth";
import { signupFailedToast, signupSuccessToast } from "../../toasts/toast";

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
      const response = await register(values);
      const { token, user } = response;
      console.log(token, user);

      signupSuccessToast();
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
    console.log(err.response?.data?.message);
    const errorMessage =
      err.response?.data?.message || "Sign up failed. Please try again.";
    signupFailedToast(errorMessage);
  };

  return (
    <Modal
      title={
        <h2 className="text-3xl font-semibold text-[#d4314d] text-left">
          Sign Up to SilverScreen
        </h2>
      }
      open={true}
      onCancel={onClose}
      footer={null}
      className="p-4 rounded-lg shadow-lg"
    >
      <Form
        form={form}
        onFinish={handleSignUp}
        layout="vertical"
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="firstName"
            label={<span className="text-lg font-medium text-gray-700">First Name</span>}
            rules={[
              { required: true, message: "Please enter your first name!" },
              { pattern: /^\S*$/, message: "No white spaces allowed!" },
            ]}
          >
            <Input
              type="text"
              name="firstName"
              value={inputs.firstName}
              onChange={handleInputChange}
              placeholder="Your first name"
              disabled={loading}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label={<span className="text-lg font-medium text-gray-700">Last Name</span>}
            rules={[
              { required: true, message: "Please enter your last name!" },
              { pattern: /^\S*$/, message: "No white spaces allowed!" },
            ]}
          >
            <Input
              type="text"
              name="lastName"
              value={inputs.lastName}
              onChange={handleInputChange}
              placeholder="Your last name"
              disabled={loading}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label={<span className="text-lg font-medium text-gray-700">Email</span>}
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="text-lg font-medium text-gray-700">Password</span>}
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label={<span className="text-lg font-medium text-gray-700">Phone Number</span>}
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4314d]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={loading}
            className="bg-[#d4314d] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#bf2c44] hover:text-white transition-all duration-300"
          >
            {loading ? <BarLoader color="#ffffff" /> : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
