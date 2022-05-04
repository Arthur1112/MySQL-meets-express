import connection from './db.js';

// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly)
// VALUES (?,?,?,?,?,?,?)`

// const input = ["Xave", 8, "Yorkie", "Dog", "male", true, true]

// const [rows, fields] = await connection.promise().query(insertQuery, input)

// console.log("This is all my rows", rows)

// const newPet = {
//     name: "Fluffy",
//     age: 1,
//     breed: "Poodle",
//     species:"Dog",
//     gender: "Female",
//     is_kid_friendly: false,
//     is_hypoallergenic: true,
// };

export const createPet = async (pet) => {
    const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    gender = pet.gender,
    is_kid_friendly = pet.is_kid_friendly,
    is_hypoallergenic = pet.is_hypoallergenic

    const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly)
    VALUES (?,?,?,?,?,?,?)`
    
    const input = [name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly]
    try {
        const [results] = await connection.query(insertQuery, input)
        return results;
    } catch (error) {
        console.error(error)
    }
}

export const getPets = () => {
    const selectQuery = "Select * FROM pets"
    // try {
    //     const [results] = await connection.promise().query(selectQuery)
    //     return results
    // } catch (error) {
    //     console.log(error)
    // }
    return connection.query(selectQuery)
    .then(results => {
        return results[0];
    })
    .catch(err => console.error(err))
}

// console.log("These are all my pets", await getPets())
// console.log("This is the new pet", await createPet(newPet))

// connection.end()