const handleDuplicateKeyError = (err, res) => {
	console.log(err)
	const field = Object.keys(err.keyValue);
	const error = `Ten login jest już zajęty`;
	res.status(409).json({success: false, message: [error], fields: field});
};

const handleValidationError = (err, res) => {
	let errors = Object.values(err.errors).map(el => el.message);
	let fields = Object.values(err.errors).map(el => el.path);
	res.status(400).json({success: false, message: errors, fields: fields})
};

export default (err, res) => {
 try {
	if(err.name === 'ValidationError') return err = handleValidationError(err, res);
	if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
	} catch(err) {
		res.status(500).json({success: false, message: ['Wystapił błąd. Spróbuj ponownie.']});
	}
};