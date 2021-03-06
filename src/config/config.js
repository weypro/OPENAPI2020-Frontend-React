let _Setting = {
	USER_SYSTEM_NAME: {
		zh_CN: "幽径",
		en_US: "Solitary Trail",
	},
	THIRD_PARTY_SYSTEM_NAME: {
		zh_CN: "幽享",
		en_US: "Solitary Share",
	},
	THIRD_PARTY_SYSTEM_LINKS: {},

	USERNAME_MINLEN: 1,
	USERNAME_MAXLEN: 20,
	USERNAME_REGEX: /./,

	DISPLAYNAME_MINLEN: 1,
	DISPLAYNAME_MAXLEN: 15,
	DISPLAYNAME_REGEX: /./,

	SIGNATURE_MAXLEN: 40,
	SIGNATURE_REGEX: /./,

	EMAIL_MAXLEN: 50,

	PASSWORD_MINLEN: 8,
	PASSWORD_MAXLEN: 40,
	PASSWORD_REGEX: /./,

	AVATOR_MAX_SIZE: 200,

	PASSWORD_SALT: "",
	TOKEN_SALT: "",
	VERIFICATION_CODE_SALT: "",

	TOKEN_AVAILABLE_DURATION: 3600,
	VERIFICATION_CODE_AVAILABLE_DURATION: 300,

	DEFAULT_COUNTRY: "CN",
	DEFAULT_LOCALE: "zh_CN",

	DEFAULT_GROUP_PERMISSION: {
		createApp: false,
		numAppLimit: 1,
	},
	ALLOW_TOKEN_IP_CHANGE: true,
	DEBUG_MODE: true,
};


export default _Setting;
