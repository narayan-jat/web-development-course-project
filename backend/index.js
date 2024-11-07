const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());



const getData = () => {
  const filePath = path.join(__dirname, 'MOCK_DATA.json');
  const rawData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(rawData);
};

// GET route to fetch a person by id
app.get('/:id', (req, res) => {
  const personId = parseInt(req.params.id, 10);  // Get the person ID from the URL parameter
  const data = getData();  // Get the data from the mock JSON

  // Find the person by ID
  const person = data.find(p => p.id === personId);

  if (person) {
    return res.json(person);  // If found, return the person object
  } else {
    return res.status(404).json({ error: 'Person not found' });  // If not found, send a 404 response
  }
});


// Serve the existing data with a GET request
app.get("/", (req, res) => {
  fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading data");
    }
    res.send(JSON.parse(data));
  });
});

// POST method to add a new person
app.post("/", (req, res) => {
  const newPerson = req.body;

  // Validate the person data
  if (!newPerson.first_name || !newPerson.last_name || !newPerson.gender || !newPerson.country) {
    return res.status(400).send("Missing required fields");
  }

  // Read the existing data from MOCK_DATA.json
  fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading data");
    }

    // Parse the current data and add the new person
    const people = JSON.parse(data);
    newPerson.id = people.length + 1;  // Generate a simple id for the new person

    // Add the new person to the array
    people.push(newPerson);

    // Write the updated data back to the file
    fs.writeFile("MOCK_DATA.json", JSON.stringify(people, null, 2), "utf8", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error saving data");
      }
      res.status(201).send("New person added successfully");
    });
  });
});

// PUT method to update an existing person's details
app.put("/:id", (req, res) => {
  const personId = parseInt(req.params.id, 10);
  const updatedPerson = req.body;

  fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading data file");
    }

    let persons = JSON.parse(data);
    let personIndex = persons.findIndex(p => p.id === personId);

    if (personIndex === -1) {
      return res.status(404).send("Person not found");
    }

    // Update the person's data
    persons[personIndex] = { ...persons[personIndex], ...updatedPerson };

    // Save the updated data back to the file
    fs.writeFile("MOCK_DATA.json", JSON.stringify(persons, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error saving data");
      }
      res.send("Person updated successfully");
    });
  });
});


// DELETE method to delete a person by their id
app.delete("/", (req, res) => {
  
  const personId = req.body.id
  // Read the existing data from MOCK_DATA.json
  fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading data");
    }

    // Parse the current data
    const people = JSON.parse(data);
    const personIndex = people.findIndex((person) => person.id === personId);

    if (personIndex === -1) {
      return res.status(404).send("Person not found");
    }

    // Remove the person from the array
    people.splice(personIndex, 1);

    // Write the updated data back to the file
    fs.writeFile("MOCK_DATA.json", JSON.stringify(people, null, 2), "utf8", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error saving data");
      }
      res.status(200).send("Person deleted successfully");
    });
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
