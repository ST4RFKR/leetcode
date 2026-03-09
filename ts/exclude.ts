type MyExclude<T, V extends unknown = never> = T extends V ? never : T;
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
// условный тип распределяется по каждому элементу union.
// если элемент T совместим с V — возвращаем never,
// иначе возвращаем T.
// never автоматически исчезает из union.
