import bcrypt from 'bcryptjs'

const users = [
  
    {
        name: "Admin",
        email: "admin@examle.com",
        password: bcrypt.hashSync("Saidabbos", 10),
        isAdmin:true
    },
    {
        name: "User",
        email: "user@examle.com",
        password: bcrypt.hashSync("Saidabbos", 10),

       
    }

  ];
  
  export default users;
  