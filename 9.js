function isBestFriend(person1, person2) {
    if (
        typeof person1 !== "object" || 
        typeof person2 !== "object" || 
        !person1 || 
        !person2 ||
        !("name" in person1) || 
        !("friend" in person1) ||
        !("name" in person2) || 
        !("friend" in person2)
    ) {
        return "Invalid";
    }

    return person1.name === person2.friend && person1.friend === person2.name;
}
