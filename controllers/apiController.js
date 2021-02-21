const axios = require('axios').default;
const mongoose = require('mongoose');
const { Books } = require('../models');

module.exports = {
    apiPost: async function (req, res) {
        try {
            const book = req.body;
            const savedBook = Books.create(book);
            if (savedBook) {
                res.status(200).json(savedBook);
            } else {
                res.status(404).json({ message: 'book not saved' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    apiDelete: async function (req, res) {
        try {
            const bookId = req.params.id;
            const deletedBook = Books.deleteOne({ _id: bookId });
            if (deletedBook) {
                res.status(200).json(deletedBook);
            } else {
                res.status(404).json({ message: 'book not deleted' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}