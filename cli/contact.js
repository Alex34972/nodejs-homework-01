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

async function getContactById(contactId) {
  const contacts = await readContact();
  const [result] = contacts.filter((contact) => contact.id === contactId);
  return result;
}

async function removeContact(contactId) {
  const contacts = await readContact();
  const newContacts = contacts.filter((contact) => contact.id !== contactId);

  await fs.writeFile(
    contactsPath.join(__dirname, "contacts.json"),
    JSON.stringify(newContacts, null, 2)
  );
  return newContacts;
}

async function addContact(name, email, phone) {
  const contacts = await readContact();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    contactsPath.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
