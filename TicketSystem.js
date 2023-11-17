class Ticket {
    constructor(guests) {
        this.guests = guests;
    }

    calculateTotalCharges() {
        let totalCharges = 0;
        for (const guest of this.guests) {
            if (guest.age <= 2) {
                totalCharges += 0;
            } else if (guest.age > 2 && guest.age < 18) {
                totalCharges += 100;
            } else if (guest.age >= 18 && guest.age < 60) {
                totalCharges += 500;
            } else {
                totalCharges += 300;
            }
        }
        return totalCharges;
    }

    displayTicketDetails() {
        for (let i = 0; i < this.guests.length; i++) {
            console.log(`Guest ${i + 1} - Name: ${this.guests[i].name}, Age: ${this.guests[i].age}`);
        }
    }
}

function main() {
    // Issue a ticket
    const numGuests = prompt("Enter the number of guests:");
    const guestsList = [];
    for (let i = 0; i < numGuests; i++) {
        const name = prompt(`Enter name of guest ${i + 1}:`);
        const age = prompt(`Enter age of guest ${i + 1}:`);
        guestsList.push({ name, age: parseInt(age) });
    }

    const issuedTicket = new Ticket(guestsList);
    const totalCharges = issuedTicket.calculateTotalCharges();

    console.log("\nTicket Issued:");
    issuedTicket.displayTicketDetails();
    console.log(`Total Charges: INR ${totalCharges}`);

    // Validate the ticket
    console.log("\nSecurity Check:");
    issuedTicket.displayTicketDetails();
}

main();
