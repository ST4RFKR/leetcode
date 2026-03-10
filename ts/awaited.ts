type MyAwaited<T> = T extends Promise<infer R> ? R : T; // если T розширает Промис то берем и вытаскиваем содержимое

type Result1 = MyAwaited<Promise<string>>; // string
type Result2 = MyAwaited<Promise<number>>; // number
