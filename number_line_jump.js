function kangaroo(x1, v1, x2, v2) {
    // If the starting positions are the same, they will always land on the same spot
    if (x1 === x2) {
        return 'YES';
    }

    // If the distances between the kangaroos are increasing, they will never land on the same spot
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
        return 'NO';
    }

    // If the remainder of the difference in starting positions divided by the difference in jump distances is 0, they will land on the same spot
    return ((x2 - x1) % (v1 - v2) === 0) ? 'YES' : 'NO';
}
