type Concat<T extends unknown[], V extends unknown[]> = [...T, ...V];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
