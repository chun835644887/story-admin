export const isAccount = (account) => {
	if(typeof account !== 'string') return false;
	let reg = /^([a-zA-Z]{1}).{4,11}/;
	return reg.test(account);
}

export const isPwd = (pwd) => {
	if(typeof pwd !== 'string') return false;
	let reg = /^([a-zA-Z]{1}).{4,11}/;
	return reg.test(pwd);
}