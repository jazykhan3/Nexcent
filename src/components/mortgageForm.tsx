"use client"
import React from 'react';
import { Form, InputNumber, Button } from 'antd';

interface MortgageFormValues {
  mortgageDebt: number;
  mortgageTerm: number;
  initialDeposit: number;
  interestRate: number;
}

const MortgageForm: React.FC = () => {
  const onFinish = (values: MortgageFormValues) => {
    console.log('Form values:', values);
    // You can handle the form submission logic here
  };

  return (
    <Form
      name="mortgageForm"
      className='mortgageForm'
      initialValues={{ interestRate: 0 }}
      onFinish={onFinish}
      labelCol={{ span: 24 }} // Set span to 24 to make labels on top
      wrapperCol={{ span: 24 }} // Set span to 24 to make labels on top
    >
      <Form.Item label="Mortgage Debt" name="mortgageDebt" rules={[{ required: false, message: 'Please enter Mortgage Debt!' }]}>
        <InputNumber controls={false} className='h-[3.5rem]' style={{ width: '100%' }} placeholder="£0.00" />
      </Form.Item>

      <Form.Item label="Mortgage Term" name="mortgageTerm" rules={[{ required: false, message: 'Please enter Mortgage Term!' }]}>
        <InputNumber  controls={false} className='h-[3.5rem]' style={{ width: '100%' }} placeholder="Years" />
      </Form.Item>

      <Form.Item label="Initial Deposit" name="initialDeposit" rules={[{ required: false, message: 'Please enter Initial Deposit!' }]}>
        <InputNumber controls={false} className='h-[3.5rem]' style={{ width: '100%' }} placeholder="£0.00" />
      </Form.Item>

      <Form.Item  label="Interest Rate" name="interestRate" rules={[{ required: false, message: 'Please enter Interest Rate!' }]}>
        <InputNumber
        controls={false}
        className='h-[3.5rem]'
          style={{ width: '100%' }}
          formatter={(value) => `${value}%`}
          placeholder="0%"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button  
          className="hover:text-white text-white py-3 px-8 bg-[#000000] hover:bg-[#000000] h-[3rem]" htmlType="submit">
   
          Calculate
               </Button>
      </Form.Item>
    </Form>
  );
};

export default MortgageForm;
