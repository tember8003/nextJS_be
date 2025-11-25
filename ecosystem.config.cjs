module.exports = {
	apps: [
		{
			name: "be",
			script: "app.cjs",
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
		},
	],
};