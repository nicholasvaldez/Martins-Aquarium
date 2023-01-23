const database = {
    fish: [
        {
            image: "https://www.georgiaaquarium.org/wp-content/uploads/2018/09/beluga-whale-webcam-9.jpg",
            name: "Baloo",
            species: "Beluga Whale",
            length: 15,
            location: "Arctic Ocean",
            food: "Mollusks and Zooplankton",
            size: 10
        },
        {
            image: "https://images.pexels.com/photos/9084873/pexels-photo-9084873.jpeg?auto=compress&cs=tinysrgb&w=800" ,
            name: "Mumble",
            species: "African Penguin",
            length: 25, 
            location: "Africa",
            food: "Crustaceans and Squid",
            size: 3
        },
        {
            image: "https://images.pexels.com/photos/4666747/pexels-photo-4666747.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Slappy",
            species: "California Sea Lion",
            length: 8,
            location: "Pacific Ocean",
            food: "Squid and Anchovy",
            size: 5
        }
    ]
}





export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}