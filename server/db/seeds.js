use hotel_lab;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Johnny Davidson",
        email: "j.davis@davidsmail.com",
        checkedIn: false,
    },
    {
        name: "Margret Thatcher",
        email: "bigtory@money4free.com",
        checkedIn: false,
    },
    {
        name: "Karen from Finance",
        email: "kazzabagz@scorebits.net",
        checkedIn: false,
    },

]);