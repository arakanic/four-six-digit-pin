// ATM machines allow either 4 or 6 digit PIN codes. This function validates PIN codes taking strings as parameters.

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}