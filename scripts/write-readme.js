const { execSync } = require('child_process');
const core = require('@actions/core');
const fs = require('fs');


let topics = [
  { "topic": "pcb-software", "name": "PCBs (software)"},
  { "topic": "gse", "name": "Ground Support (GSE)"},
  { "topic": "server", "name": "Main Server"},
  { "topic": "library", "name": "Libraries"},
]

let file_path = "./profile/README.md"

let start_mark = "<!--autoindex:start-->\n"
let end_mark = "<!--autoindex:end-->"


function info(text) {
  //console.log(text)
  core.info(text)
}

function warning(text) {
  //console.warn(text);
  core.warning(text);
}

function commitAndPush(targetFile) {
  try {
    execSync(`git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"`);
    execSync(`git config --local user.name "github-actions[bot]"`);
    execSync(`git add ${JSON.stringify(targetFile)}`);
    execSync(`git diff --cached --quiet || git commit -m [chore] Update org navigation`);
    execSync('git push');
    info('Pushed dashboard update.');
  } catch (err) {
    warning(`Commit/push failed: ${err.message}`);
  }
}

function getFormattedNavigation(repo_json) {
  let out_string = ""
  out_string += "S²OUTH Repository Navigation\n"
  out_string += "----------------------------\n\n"

  for (let topic of topics) {
    out_string += `### ${topic["name"]}\n`;
    out_string += "URL | Description\n";
    out_string += "--- | ---:\n"
    for (let repo of repo_json) {
      if (repo["done"] == true || repo["isPrivate"] == true || repo["repositoryTopics"] == null) continue;
      for (let repo_topic of repo["repositoryTopics"]) {
        if (repo_topic["name"] === topic["topic"]) {
          out_string += `[${repo["name"]}](${repo["url"]}) | ${repo["description"]}\n`;
          repo["done"] = true;
        }
      }
    }
  }

  out_string += `### Other\n`
  for (let repo of repo_json) {
    if (repo["done"] == true || repo["isPrivate"] == true) continue;
    out_string += `- [${repo["name"]}](${repo["url"]}) ${repo["description"]}\n`
    repo["done"] = true;
  }

  return out_string
}

// Work with the input, that is piped into the script
process.stdin.on("data", data => {
  let readme = fs.readFileSync(file_path, 'utf8');

  let repo_json = JSON.parse(data)

  let navigation_string = getFormattedNavigation(repo_json) 
  //info(navigation_string)

  let start = readme.indexOf(start_mark) + start_mark.length
  let end = readme.indexOf(end_mark)

  if(start == -1 || end == -1) {
    warning("Please check for the missing marks, signaling where the Navigation will go")
    return
  }

  readme_new = readme.substring(0, start) + navigation_string + readme.substring(end, readme.length);
  
  fs.writeFileSync(file_path, readme_new);

  info("New Readme has been written");

  commitAndPush(file_path);
})

