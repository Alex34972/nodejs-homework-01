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

function readContact() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
