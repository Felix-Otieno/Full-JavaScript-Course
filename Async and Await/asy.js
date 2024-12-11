const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };
  
  async function getPersonsInfo(name) {
    try {
      const people = await server.getPeople(); // Fetch the list of people
      const person = people.find(person => person.name === name) || null; // Find the person or return null
      return person;
    } catch (error) {
      console.error("Error fetching people:", error); // Log errors if any
      return null; // Return null in case of an error
    }
  }
  
  // Example usage
  async function main() {
    console.log("Fetching person information...");
    
    const name = "Thor"; // Change this name to test other inputs
    const person = await getPersonsInfo(name);
    
    if (person) {
      console.log("Person found:", person);
    } else {
      console.log("Person not found");
    }
  }
  
  main();
  