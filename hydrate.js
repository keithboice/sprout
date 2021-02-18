/* eslint-disable no-console */
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const https = require("https");
const appRoot = require("app-root-path").toString();

const schema = {
	appRoot: appRoot,
	tempRoot: path.join(appRoot, "temp"),
	partialsRoot: path.join(appRoot, "sources", "packages", "templates", "partials"),
};

const payload = [
	{
		srcPath: "main/projects",
		srcFile: "README.md.hbs",
		destPath: "./",
		destFile: "README.md",
		hydrate: true,
	},
	{
		srcPath: "main/projects",
		srcFile: "README.md.hbs",
		destPath: "./backend",
		destFile: "README.md",
		hydrate: true,
	},
	{
		srcPath: "main/projects",
		srcFile: "README.md.hbs",
		destPath: "./frontend",
		destFile: "README.md",
		hydrate: true,
	},
	{
		srcPath: "main/projects",
		srcFile: "README.md.hbs",
		destPath: "./tooling",
		destFile: "README.md",
		hydrate: true,
	},
	{
		srcPath: "main/projects",
		srcFile: "LICENSE",
		destPath: "./",
		destFile: "LICENSE",
		hydrate: false,
	},
	{
		srcPath: "main/projects",
		srcFile: "LICENSE",
		destPath: "./frontend",
		destFile: "LICENSE",
		hydrate: false,
	},
	{
		srcPath: "main/projects",
		srcFile: "LICENSE",
		destPath: "./backend",
		destFile: "LICENSE",
		hydrate: false,
	},
	{
		srcPath: "main/projects",
		srcFile: "LICENSE",
		destPath: "./tooling",
		destFile: "LICENSE",
		hydrate: false,
	},
];

const partials = new Promise((resolve, reject) => {
	fs.readdir(schema.partialsRoot, function (error, result) {
		if (error) {
			reject("error: " + error);
		} else {
			resolve(
				result.forEach((p) => {
					const name = path.basename(p);

					// Register partials
					handlebars.registerPartial(`${name}`, fs.readFileSync(path.join(schema.partialsRoot, name), "utf8"));
					console.log("registered partial: " + name);
				})
			);
		}
	});
});

const data = new Promise((resolve) => {
	const pkg = require(path.join(schema.appRoot, "package.json"));

	const { repository, scripts, types, engines, name, module, browser, languageName, main, description } = pkg;

	const format = (data, header) => {
		let head = "| ";
		let sub = "|";
		let body = "";

		header.forEach((column) => {
			head += column + "|";
			sub += "-----------------|";
		});

		for (const [key, value] of Object.entries(data)) {
			body += `| ${key} | ${value} |\n`;
		}

		return head + "\n" + sub + "\n" + body;
	};

	resolve({
		name,
		description,
		repository,
		files: {
			main,
			module,
			browser,
		},
		scripts: format(scripts, ["command", "runs"]),
		stack: {
			language: languageName,
			type: types,
			engines,
		},
	});
});

function make(
	objs = [
		{
			srcPath: "main/projects",
			srcFile: "README.md.hbs",
			destPath: "./",
			destFile: "README.md",
			hydrate: true,
		},
	],
	data
) {
	objs.forEach((obj) => {
		const localTemplate = path.join(schema.tempRoot, `${obj.srcFile}`);
		const localDest = path.join(schema.appRoot, `${obj.destPath}`, `${obj.destFile}`);

		const file = fs.createWriteStream(localTemplate);

		// https://raw.githubusercontent.com/keithboice/kb_template_github/main/projects/README.md.hbs
		https.get(`https://raw.githubusercontent.com/keithboice/kb_templates/${obj.srcPath}/${obj.srcFile}`, (res) => {
			const stream = res.pipe(file);

			stream.on("error", (err) => {
				console.error(`fetchTemplate error: ${err}`);
			});

			stream.on("finish", async function () {
				console.log("\nfetch() stream.on finish");
				console.log(`localTemplate: ${localTemplate}`);
				console.log(`localDest: ${localDest}`);

				if (obj.hydrate) {
					const template = handlebars.compile(fs.readFileSync(localTemplate, "utf8"));

					// Render template
					const output = template(data);

					fs.writeFileSync(localDest, output, "utf8");
				}

				return "fetch ran successfully";
			});
		});
	});
}

Promise.all([partials, data]).then((values) => {
	make(payload, values[1]);
});
