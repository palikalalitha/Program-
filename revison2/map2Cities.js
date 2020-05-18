import { observable, values } from "mobx";

const persons = observable(new Map());

const data = [
  {
    id: 1,
    name: "Sri Potti Sriramulu",
    city: "Nellore",
    state: "Andhra Pradesh",
  },
  {
    id: 2,
    name: "Pingali Venkayya",
    city: "Vijayawada",
    state: "Andhra Pradesh",
  },
  {
    id: 3,
    name: "Hanuma Vihari",
    city: "Kakinada",
    state: "Andhra Pradesh",
  },
];

data.forEach((person) => {
  persons.set(person.id, person);
});

const cities1 = [];
for (const [key, value] of persons.entries()) {
  cities1.push(value.city);
}

const cities2 = Array.from(persons.values()).map((person) => person.city);

const cities3 = values(persons).map((person) => person.city);

const cities4 = persons.values().map((person) => person.city);
