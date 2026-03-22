class userProfile {

    constructor (Name, Status, Preview) {
        this.Name = Name;
        this.Status = Status;
        this.Preview = Preview;  
    };

    display () {
        console.log(`Hello ${this.Name}, Status: ${this.Status}, Preview: ${this.Preview}`)
    };

    Preview () {

        try {
            const secName = 'Juma';
            return `Hello ${secName}`

        }
        catch(error) {
            console.error('Error:', error)

        }
    };

};

