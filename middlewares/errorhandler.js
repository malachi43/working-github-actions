const errorhandler = (err, req, res, next) => {
    res.status(err.status || 500).json({ success: false, error_message: err.message || "INTERNAL SERVER ERROR." })
}


module.exports = errorhandler;
;
