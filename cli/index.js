const { Command } = require("commander");
const chalk = require("chalk");
const { listContacts, addContact, getContactById } = require("./contact");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
        .then((contacts) => console.table(contacts))
        .catch((error) => console.log(error));
      break;

    case "get":
      getContactById(id)
        .then((contact) => {
          if (contact) {
            console.log(contact);
          } else {
            console.log(chalk.yellow("CONTACT NOT FOUND"));
          }
        })
        .catch((error) => console.log(error));
      break;

    case "add":
      addContact(name, email, phone)
        .then((contacts) => console.table(contacts))
        .catch((error) => console.log(error));
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
}

invokeAction(argv);
