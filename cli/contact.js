const fs = require("fs/promises");
const contactsPath = require("path");
const crypto = require("crypto");

const readContact = async () => {
  const res = await fs.readFile(
    contactsPath.join(__dirname, "contacts.json"),
    "utf8"
  );
  const contacts = JSON.parse(res);
  return contacts;
};

function listContacts() {
  return readContact();
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  const connacts = await readContact();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  connacts.push(newContact);
  await fs.writeFile(
    contactsPath.join(__dirname, "contacts.json"),
    JSON.stringify(connacts, null, 2)
  );
  return newContact;
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
