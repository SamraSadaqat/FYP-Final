'use strict';

let NotificationModel = require('./notification.model');

let fetchUserWise = async (req, res) => {
    try {
        let {
            start,
            rows
        } = req.query;
        let result;
        let totalResults;
        if (start && rows) {
            result = await NotificationModel.find({
                userId: req.user._id
            }).skip(+start).limit(+rows).populate({
                path: 'userId',
                select: 'name'
            })
            totalResults = await NotificationModel.countDocuments();
        } else {
            result = await NotificationModel.find({
                userId: req.user._id
            }).populate({
                path: 'userId',
                select: 'name'
            })
            totalResults = result.length;
        }
        return res.status(200).json({
            message: 'Notification list',
            data: result,
            totalRecords: totalResults
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unexpected error'
        });
    }
}

let save = async (req, res) => {
    try {
        let {
            userId,
            title,
            body,
            screen
        } = req.body;
        if (!title) {
            return res.status(400).json({
                message: 'Title is required'
            });
        }
        if (!body) {
            return res.status(400).json({
                message: 'Body required'
            });
        }
        let obj = {
            userId,
            title,
            body,
            screen
        }

        let newNotification = new NotificationModel(obj);
        let result = await newNotification.save();
        if (!result || !result._id) {
            return res.status(500).json({
                message: 'Unexpected error'
            });
        }
        return res.status(200).json({
            message: 'Save notification'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unexpected error'
        });
    }
}

let deleteNotification = async (req, res) => {
    try {
        let {
            id
        } = req.query;
        if (!id) {
            return res.status(400).json({
                message: 'Id is required'
            });
        }
        let result = await NotificationModel.deleteOne({
            _id: id
        });
        return res.status(200).json({
            message: 'Delete from notification'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unexpected error'
        });
    }
}

module.exports = {
    fetchUserWise: fetchUserWise,
    save: save,
    deleteNotification: deleteNotification
}