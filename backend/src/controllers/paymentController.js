const { Payment } = require('../models');

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create({
            userId: req.body.userId,
            amount: req.body.amount,
            method: req.body.method,
            status: req.body.status
        });
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a payment
exports.updatePayment = async (req, res) => {
    try {
        const updatedRows = await Payment.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
    try {
        const deletedRows = await Payment.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
