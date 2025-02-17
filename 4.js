function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
        return "Invalid";
    }
    if (person1.gender === person2.gender) {
        return false;
    }
    return Math.abs(person1.age - person2.age) <= 7;
}

function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        if (vote.toLowerCase() === "mango") {
            mangoCount++;
        } else if (vote.toLowerCase() === "banana") {
            bananaCount++;
        }
    }

    if (mangoCount > bananaCount) {
        return "Mango";
    } else if (bananaCount > mangoCount) {
        return "Banana";
    }
    return "Draw";
}
