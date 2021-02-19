/* eslint-disable no-console */
const { compile, registerPartial } = require("handlebars");
const hbs = require("handlebars");
const path = require("path");
const fs = require("fs");
const path_app_root = require("app-root-path").toString();
const { cd, exec } = require("shelljs");

// Config

/**
 * Common paths
 *
 * @type {{path_repo: string, path_partials: string, path_templates: string, path_queue: string, path_app_root}}
 */
const schema = {
  path_app_root: path_app_root,
  path_queue: "/Users/dkb/queue",
  path_templates: `${path.join("/Users/dkb/queue", "templates")}`,
  path_partials: path.join("/Users/dkb/queue", "templates", "partials"),
  path_repo: "git@github.com:keithboice/kb_templates.git",
};

/** Files to create and/or hydrate in the repo each time. */
const payload = [
  {
    srcPath: "projects",
    srcFile: "README.md.hbs",
    destPath: "./",
    destFile: "README.md",
    hydrate: true,
  },
  {
    srcPath: "projects",
    srcFile: "README.md.hbs",
    destPath: "./backend",
    destFile: "README.md",
    hydrate: true,
  },
  {
    srcPath: "projects",
    srcFile: "README.md.hbs",
    destPath: "./frontend",
    destFile: "README.md",
    hydrate: true,
  },
  {
    srcPath: "projects",
    srcFile: "README.md.hbs",
    destPath: "./tooling",
    destFile: "README.md",
    hydrate: true,
  },
  {
    srcPath: "projects",
    srcFile: "LICENSE",
    destPath: "./",
    destFile: "LICENSE",
    hydrate: false,
  },
  {
    srcPath: "projects",
    srcFile: "LICENSE",
    destPath: "./frontend",
    destFile: "LICENSE",
    hydrate: false,
  },
  {
    srcPath: "projects",
    srcFile: "LICENSE",
    destPath: "./backend",
    destFile: "LICENSE",
    hydrate: false,
  },
  {
    srcPath: "projects",
    srcFile: "LICENSE",
    destPath: "./tooling",
    destFile: "LICENSE",
    hydrate: false,
  },
];

// Functions

/**
 * Fetch the templates from the template repo
 *
 * @type {Promise<unknown>}
 */
const fetch = new Promise((resolve, reject) => {
  cd(schema.path_queue);
  exec(`rm -rf ~/queue/* && git clone ${schema.path_repo} templates`);
  const verify = fs.readdirSync(path.join(schema.path_queue, "templates"))
    .length;

  if (verify) {
    return resolve();
  }

  return reject("No files found in queue directory after cloning the repo");
});

/**
 * Register the handlebars partials
 *
 * @type {Promise<unknown>}
 */
const partials = new Promise((resolve, reject) => {
  fs.readdir(schema.path_partials, function (error, result) {
    if (error) {
      reject("error: " + error);
    } else {
      resolve(
        result.forEach((p) => {
          const name = path.basename(p);

          console.log(`registering partial ${name}`);

          // Register partials
          hbs.registerPartial(
            `${name}`,
            fs.readFileSync(path.join(schema.path_partials, name), "utf8")
          );
          console.log("registered partial: " + name);
        })
      );
    }
  });
});

/**
 * Get data to hydrate files with from local package.json and jsdocs comments
 *
 * @type {Promise<unknown>}
 */
const data = new Promise((resolve) => {
  const pkg = require(path.join(schema.path_app_root, "package.json"));

  const {
    repository,
    scripts,
    types,
    engines,
    name,
    module,
    browser,
    languageName,
    main,
    description,
  } = pkg;

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

/**
 * Hydrate and save the files to their local destination.
 *
 * @param objs
 * @param data
 */
function make(
  objs = [
    {
      srcPath: "projects",
      srcFile: "README.md.hbs",
      destPath: "./",
      destFile: "README.md",
      hydrate: true,
    },
  ],
  data
) {
  objs.forEach((obj) => {
    const localTemplate = path.join(
      schema.path_templates,
      `${obj.srcPath}`,
      `${obj.srcFile}`
    );
    const localDest = path.join(
      schema.path_app_root,
      `${obj.destPath}`,
      `${obj.destFile}`
    );

    // Render and hydrate handlebars template
    const template = compile(fs.readFileSync(localTemplate, "utf8"));
    const output = template(data);

    fs.writeFileSync(localDest, output, "utf8");

    console.log(`saved ${obj.destFile} to ${obj.destPath}`);
  });
}

Promise.all([fetch, partials, data]).then((values) => {
  make(payload, values[1]);
});
