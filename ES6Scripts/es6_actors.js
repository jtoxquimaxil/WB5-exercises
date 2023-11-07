

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",

    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    }
   ];


// Who is the Academy Member whose ID is 187?

let memId = 187;

academyMember187 = academyMembers.find(member => member.memID == memId);

if (academyMember187) {
    console.log(academyMember187);
} else {
    console.log("There is no member with that ID");
}


// Who has been in at least 3 films?

function memberWithMin3Films(minFilms, academyMembers) {
    return academyMembers.filter(member => member.memID <= minFilms);
   }
   let minNumberOfFilms = 3;
   let firstMember = memberWithMin3Films(minNumberOfFilms);

   if (firstMember != undefined) {
    console.log(firstMember);
   }
   else {
    console.log("No member has 3 films or less")
   }



// Who has a name that starts with "Bob"?

let memberName = "Bob";

let memberWithTheNameBob = academyMembers.filter(member => member.name.startsWith(memberName));

console.log(memberWithTheNameBob);


// HARDER: Which Academy Members have been in a film
// that starts with "A"

